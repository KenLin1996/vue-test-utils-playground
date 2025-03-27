import { mount } from "@vue/test-utils";
import Counter from "../src/components/Counter.vue";
import { describe, it, expect } from "vitest";

describe("Counter.vue", () => {
  it("初始顯示 count 和 changeCount 正確", async () => {
    const wrapper = mount(Counter);

    // 等待 Vue 完成 DOM 更新
    await wrapper.vm.$nextTick();

    // 檢查初始的 count 和 changeCount
    expect(wrapper.text()).toContain("目前數字: 0");
    expect(wrapper.text()).toContain("變更次數: 0");
  });

  it('點擊 "增加" 按鈕時，count 增加，changeCount 增加', async () => {
    const wrapper = mount(Counter);

    // 點擊 "增加" 按鈕
    await wrapper.find("button:nth-of-type(1)").trigger("click");

    // 等待 Vue 完成 DOM 更新
    await wrapper.vm.$nextTick();

    // 檢查 count 和 changeCount 是否正確更新
    expect(wrapper.text()).toContain("目前數字: 1");
    expect(wrapper.text()).toContain("變更次數: 1");
  });

  it('點擊 "減少" 按鈕時，count 減少，changeCount 增加', async () => {
    const wrapper = mount(Counter);

    // 點擊 "減少" 按鈕
    await wrapper.find("button:nth-of-type(2)").trigger("click");

    // 等待 Vue 完成 DOM 更新
    await wrapper.vm.$nextTick();

    // 檢查 count 和 changeCount 是否正確更新
    expect(wrapper.find('[data-test="count-test"]').text()).toContain(
      "目前數字: -1"
    );
    expect(wrapper.find('[data-test="changeCount-test"]').text()).toContain(
      "變更次數: 1"
    );
  });
});
