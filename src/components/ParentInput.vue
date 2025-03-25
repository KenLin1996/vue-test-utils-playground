<script setup lang="ts">
import { ref } from "vue";
import InputField from "../components/InputField.vue";

const inputText = ref("");
</script>

<template>
  <div>
    <InputField v-model="inputText" />
    <p data-test="display-text">{{ inputText }}</p>
  </div>
</template>
<style scoped></style>
