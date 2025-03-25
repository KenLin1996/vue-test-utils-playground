import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import ParentEmit from "../src/components/ParentEmit.vue";

describe("ParentEmit.vue", () => {
  test("updates message when child component emits event", async () => {
    const wrapper = mount(ParentEmit);

    await wrapper.find("button").trigger("click"); // 觸發子組件按鈕點擊

    // 檢查父組件的 message 是否更新
    expect(wrapper.find('[data-test="message"]').text()).toBe(
      "Hello from EmitButton"
    );
  });
});
