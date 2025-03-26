import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import ParentInput from "../src/components/ParentInput.vue";

describe("ParentInput", () => {
  test("updates v-model value when typing in input", async () => {
    const wrapper = mount(ParentInput);

    const input = wrapper.find("input");

    // 確認 input 的初始值為空
    expect(input.element.value).toBe("");

    await input.setValue("Hello Vue Test Utils");

    expect(wrapper.find('[data-test="display-text"]').text()).toBe(
      "Hello Vue Test Utils"
    );
  });
});
