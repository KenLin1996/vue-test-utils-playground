<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <h1>404 - 找不到頁面</h1>
    <p>你輸入的網址不存在，請返回首頁。</p>
    <router-link to="/">回到首頁</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>
