import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { createRouter, createMemoryHistory } from "vue-router";
import HomePage from "../../src/pages/HomePage.vue";
import NotFoundPage from "../../src/pages/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/:error(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

describe("NotFoundView", () => {
  it("當訪問錯誤的路由時，應該顯示 404 頁面", async () => {
    router.push("/some-random-page"); // 模擬進入錯誤頁面

    await router.isReady();

    const wrapper = mount(NotFoundPage, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain("404 - 找不到頁面"); // 確保顯示 404 錯誤訊息
    expect(wrapper.find("a").text()).toBe("回到首頁"); // 確保有回首頁按鈕
  });
});
