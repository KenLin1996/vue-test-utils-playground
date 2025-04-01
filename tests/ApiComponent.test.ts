import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import ApiComponent from "../src/components/ApiComponent.vue";
import axios from "axios";

// 模擬 Axios
vi.mock("axios");

describe("ApiComponent", () => {
  it("應該顯示錯誤訊息當 API 失敗時", async () => {
    (axios.get as vi.Mock).mockRejectedValue(new Error("API Error"));

    const wrapper = mount(ApiComponent);

    await wrapper.find("button").trigger("click"); // 觸發按鈕
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Failed to fetch data"); // 確認錯誤訊息有顯示
  });
});
