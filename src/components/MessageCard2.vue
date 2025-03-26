<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    content: string;
  }>(),
  {
    title: "卡片2的預設標題",
  }
);

// 手動檢查 props，若 content 缺失則拋出錯誤
if (!props.content) {
  throw new Error("content is required");
}
</script>
<template>
  <div class="message-card">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <slot>這裡是預設插槽內容</slot>
  </div>
</template>
<style scoped>
.message-card {
  border: 2px solid green;
  color: gray;
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
}
</style>
