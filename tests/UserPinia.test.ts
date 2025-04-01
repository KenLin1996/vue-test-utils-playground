import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory, Router } from "vue-router";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { routes } from "../src/router/index.ts";
import { nextTick } from "vue";
import App from "../src/App.vue";
import { setActivePinia, createPinia, Pinia } from "pinia"; // 引入 Pinia 和 Pinia 型別
import { useUserStore } from "../src/stores/userStore";

describe("Router Guard", () => {
  let router: Router;
  let pinia: Pinia; // 為 pinia 設定型別

  beforeEach(() => {
    pinia = createPinia(); // 每次測試前創建新的 Pinia 實例
    setActivePinia(pinia); // 設置新的 Pinia 實例

    router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    const userStore = useUserStore();
    // 創建路由並設置守衛
    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth && !userStore.isAuthenticated) {
        next("/login");
      } else {
        next();
      }
    });
  });

  afterEach(() => {
    pinia = null as any; // 清除 Pinia 狀態，確保測試之間沒有污染
  });

  it("未登入時，應該被導向 /login", async () => {
    const userStore = useUserStore();
    userStore.isAuthenticated = false; // 模擬未登入

    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    });

    router.push("/user/123"); // 訪問受保護的路由
    await router.isReady();
    await nextTick();

    // 驗證是否被導向 /login
    expect(wrapper.vm.$route.path).toBe("/login");
  });

  it("已登入時，應該正常進入目標頁面", async () => {
    const userStore = useUserStore();
    userStore.isAuthenticated = true; // 模擬已登入狀態

    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    });

    router.push("/user/123"); // 訪問受保護的路由
    await router.isReady();
    await nextTick();

    // 驗證是否能進入 UserPage
    expect(wrapper.html()).toContain("User Page");
    expect(wrapper.html()).toContain("User ID: 123");
  });
});
