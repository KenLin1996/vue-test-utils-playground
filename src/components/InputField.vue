<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ modelValue: string }>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
<template>
  <input type="text" :value="props.modelValue" @input="handleInput" />
</template>
<style scoped></style>
