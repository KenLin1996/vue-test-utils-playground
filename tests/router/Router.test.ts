import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import { describe, test, expect, beforeEach } from "vitest";
import { routes } from "../../src/router/index.ts";
import { nextTick } from "vue";
import App from "../../src/App.vue";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../../src/stores/userStore";

describe("vue-router", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const userStore = useUserStore();
    userStore.isAuthenticated = true;
  });

  test("navigates to About page", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    router.push("/about");
    await router.isReady();

    expect(wrapper.html()).toContain("About Page");
  });

  test("navigates to User page with correct ID", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    router.push("/user/456");
    await router.isReady();
    await nextTick();

    expect(wrapper.html()).toContain("User Page");
    expect(wrapper.html()).toContain("User ID: 456");
  });
});
