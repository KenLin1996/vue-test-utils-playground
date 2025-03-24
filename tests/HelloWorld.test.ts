import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import HelloWorld from "../src/components/HelloWorld.vue";

describe("HelloW", () => {
  test("This test case is correct", () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: "Hello Vue Test Utils" },
    });

    expect(wrapper.text()).toContain("Hello Vue Test Utils");
  });
});
