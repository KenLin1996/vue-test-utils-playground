<script setup lang="ts">
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
</script>
<template>
  <div class="user-profile">
    <template v-if="userStore.isAuthenticated">
      <h2>Welcome, {{ userStore.userName }}</h2>
      <button @click="userStore.logout">Logout</button>
    </template>
    <template v-else>
      <h2>Guest</h2>
      <button @click="userStore.login('Ken')">Login</button>
    </template>
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
