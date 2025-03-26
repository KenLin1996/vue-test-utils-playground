import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import MessageCard2 from "../src/components/MessageCard2.vue";

describe("MessageCard2", () => {
  // 測試 title
  test("uses default title when not provided", () => {
    const wrapper = mount(MessageCard2, {
      props: {
        content: "內容",
      },
    });

    expect(wrapper.find("h2").text()).toBe("卡片2的預設標題");
  });

  // 測試 content :沒給值是否報錯
  test("throws an error if content is missing", () => {
    expect(() => mount(MessageCard2)).toThrow("content is required");
  });
});
