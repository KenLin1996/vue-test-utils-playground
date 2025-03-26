<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ title: string; content: string }>();
</script>

<template>
  <div class="message-card">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <slot>預設內容</slot>
  </div>
</template>
<style scoped>
.message-card {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
}
</style>
