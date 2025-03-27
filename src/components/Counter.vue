<script setup lang="ts">
import { ref, watch } from "vue";

const count = ref<number>(0);
const changeCount = ref<number>(0);

watch(count, () => {
  changeCount.value++;
});
</script>
<template>
  <div class="counter">
    <h2>計數器</h2>
    <button @click="count++">增加</button>
    <button @click="count--">減少</button>
    <p data-test="count-test">目前數字: {{ count }}</p>
    <p data-test="changeCount-test">變更次數: {{ changeCount }}</p>
  </div>
</template>
