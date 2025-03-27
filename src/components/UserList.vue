<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const users = ref<User[]>([]);
const loading = ref<boolean>(true);

const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    users.value = response.data;
  } catch (error) {
    console.error("Failed to fetch users", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);
</script>

<template>
  <div>
    <h2>使用者列表</h2>
    <template v-if="loading">loading ... </template>
    <template v-else>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </template>
  </div>
</template>
