<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import ParentEmit from "./components/ParentEmit.vue";
import ParentInput from "./components/ParentInput.vue";
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <ParentEmit></ParentEmit>
  <ParentInput />
</template>

<style scoped></style>
