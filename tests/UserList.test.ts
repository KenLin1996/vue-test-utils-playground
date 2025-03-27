import { mount } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";
import axios from "axios";
import UserList from "../src/components/UserList.vue";

// Mock axios
vi.mock("axios");

describe("UserList.vue", () => {
  test("fetches and displays users", async () => {
    // 模擬 API 回應
    (axios.get as vi.Mock).mockResolvedValue({
      data: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ],
    });

    // 掛載元件
    const wrapper = mount(UserList);

    // 等待 Vue 處理 DOM 更新
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 測試是否正確顯示資料
    expect(wrapper.findAll("li")).toHaveLength(2);
    expect(wrapper.text()).toContain("Alice");
    expect(wrapper.text()).toContain("Bob");
  });
});
