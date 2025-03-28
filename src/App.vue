<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/try">Try</router-link> |
      <router-link to="/user/123">User 123</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>
