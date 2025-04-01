<script setup lang="ts">
import ApiComponent from "../components/ApiComponent.vue";
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/user/123">Go to User 123</router-link>
    <ApiComponent />
  </div>
</template>
<style scoped>
a {
  margin: 0px 10px;
}
</style>
