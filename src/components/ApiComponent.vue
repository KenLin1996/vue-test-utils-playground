<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const data = ref<string | null>(null);
const error = ref<string | null>(null);

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    data.value = response.data.title;
  } catch (err) {
    error.value = "Failed to fetch data";
  }
}
</script>
<template>
  <button @click="fetchData">Fetch data</button>
  <div v-if="data">{{ data }}</div>
  <div v-if="error" class="error">{{ error }}</div>
</template>
<style scoped>
.error {
  color: "red";
}
</style>
