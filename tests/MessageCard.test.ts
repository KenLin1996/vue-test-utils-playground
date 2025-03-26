import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import MessageCard from "../src/components/MessageCard.vue";

describe("MessageCard", () => {
  // Props 測試
  test("renders props correctly", () => {
    const wrapper = mount(MessageCard, {
      props: {
        title: "測試標題",
        content: "測試內容",
      },
    });

    expect(wrapper.find("h2").text()).toBe("測試標題");
    expect(wrapper.find("p").text()).toBe("測試內容");
  });

  // Slots 測試: 假設 slots 傳遞 <button>
  test("render slot content correctly", () => {
    const wrapper = mount(MessageCard, {
      slots: {
        default: "<button>點擊這裡</button>",
      },
    });

    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("點擊這裡");
  });
});
