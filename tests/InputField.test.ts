import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import InputField from "../src/components/InputField.vue";

describe("InputField", () => {
  test('emits "update:modelValue" event when input changes', async () => {
    const wrapper = mount(InputField, {
      props: {
        modelValue: "initial value",
      },
    });

    // 確保初始的 value 是 'initial value'
    const input = wrapper.find("input");
    expect(input.element.value).toBe("initial value");

    // 模擬輸入事件
    await input.setValue("new value");

    // 確認是否發射了 update:modelValue 事件並帶上正確的值
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"]?.[0]).toEqual(["new value"]);
  });
});
