import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import EmitButton from "../src/components/EmitButton.vue";

describe("EmitButton.vue", () => {
  test("emits clickEvent when button is clicked", () => {
    const wrapper = mount(EmitButton);

    wrapper.find("button").trigger("click"); // 觸發按鈕點擊事件

    // 檢查組件是否發送了 clickEvent 事件，並且帶有正確的參數
    expect(wrapper.emitted()).toHaveProperty("clickEvent");
    expect(wrapper.emitted("clickEvent")![0]).toEqual([
      "Hello from EmitButton",
    ]);
  });
});
