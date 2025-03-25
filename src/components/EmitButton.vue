<script setup lang="ts">
import { defineEmits } from "vue";

// 定義事件並指定事件名稱和參數類型
// const emit = defineEmits(["clickEvent"]);
const emit = defineEmits<{
  (e: "clickEvent", message: string): void;
}>();

const handleEvent = () => { 
  emit("clickEvent", "Hello from EmitButton");
};
</script>
<template>
  <button @click="handleEvent">Click me</button>
</template>
