import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import UserProfile from "../src/components/UserProfile.vue";

describe("UserProfile", () => {
  test("should compute fullName correctly", async () => {
    // 安裝組件並掛載
    const wrapper = mount(UserProfile);

    // 確認預設 fullName 顯示為空字串
    expect(wrapper.text()).toContain("Full Name:");

    // 模擬用戶輸入 firstName 和 lastName
    await wrapper.find('input[placeholder="請輸入名字"]').setValue("John");
    await wrapper.find('input[placeholder="請輸入姓氏"]').setValue("Doe");

    // 檢查 computed fullName 是否更新為 "JohnDoe"
    expect(wrapper.find('[data-test="testFullName"]').text()).toContain(
      "Full Name: JohnDoe"
    );

    // 再次修改名字和姓氏，確認 fullName 更新
    await wrapper.find('input[placeholder="請輸入名字"]').setValue("Jane");
    await wrapper.find('input[placeholder="請輸入姓氏"]').setValue("Smith");

    // 檢查 fullName 是否已經更新為 "JaneSmith"
    expect(wrapper.find('[data-test="testFullName"]').text()).toContain(
      "Full Name: JaneSmith"
    );
  });
});
