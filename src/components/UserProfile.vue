<script setup lang="ts">
import { ref, computed } from "vue";

const firstName = ref<string>("");
const lastName = ref<string>("");

const fullName = computed(() => `${firstName.value}${lastName.value}`);
</script>
<template>
  <div class="user-profile">
    <h2>使用者名稱</h2>
    <input v-model="firstName" placeholder="請輸入名字" />
    <input v-model="lastName" placeholder="請輸入姓氏" />
    <p data-test="testFullName">Full Name: {{ fullName }}</p>
  </div>
</template>
<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
}
input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
