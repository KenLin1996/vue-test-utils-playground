<script setup lang="ts">
import { ref } from "vue";
import EmitButton from "../components/EmitButton.vue";

const message = ref<string>("");

const handleEvent = (msg: string) => {
  message.value = msg;
};
</script>
<template>
  <div>
    <EmitButton @clickEvent="handleEvent" />
    <p data-test="message">{{ message }}</p>
  </div>
</template>
