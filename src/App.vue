<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import MessageCard from "./components/MessageCard.vue";
import MessageCard2 from "./components/MessageCard2.vue";
import ParentEmit from "./components/ParentEmit.vue";
import ParentInput from "./components/ParentInput.vue";
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <ParentEmit></ParentEmit>
  <ParentInput />
  <MessageCard title="卡片" content="卡片內容"></MessageCard>
  <MessageCard2 content="s"></MessageCard2>
</template>

<style scoped></style>
