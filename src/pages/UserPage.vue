<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ id: string }>();
</script>

<template>
  <div>
    <h1>User Page</h1>
    <p>User ID: {{ id }}</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
<style scoped>
h1 {
  color: aqua;
}
</style>
