import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory, Router } from "vue-router";
import { describe, it, expect, beforeEach } from "vitest";
import { routes } from "../../src/router/index.ts";
import { nextTick } from "vue";
import App from "../../src/App.vue";

describe("Router Guard", () => {
  let router: Router;
  let isAuthenticated: boolean;

  beforeEach(() => {
    // 創建路由並設置守衛
    router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    // 模擬認證邏輯
    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth && !isAuthenticated) {
        next("/login");
      } else {
        next();
      }
    });
  });

  it("未登入時，應該被導向 /login", async () => {
    isAuthenticated = false; // 模擬未登入狀態

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    router.push("/user/123"); // 訪問受保護的路由
    await router.isReady();
    await nextTick();

    // 驗證是否被導向 /login
    expect(wrapper.vm.$route.path).toBe("/login");
  });

  it("已登入時，應該正常進入目標頁面", async () => {
    isAuthenticated = true; // 模擬已登入狀態

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    router.push("/user/123"); // 訪問受保護的路由
    await router.isReady();
    await nextTick();

    // 驗證是否能進入 UserPage
    expect(wrapper.html()).toContain("User Page"); // 假設 UserPage 中有這段文字
    expect(wrapper.html()).toContain("User ID: 123"); // 假設 UserPage 顯示 ID
  });
});
