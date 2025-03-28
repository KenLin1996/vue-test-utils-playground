import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../pages/HomePage.vue") },
  { path: "/about", component: () => import("../pages/AboutPage.vue") },
  { path: "/try", component: () => import("../pages/TryPage.vue") },
  {
    path: "/user/:id", // 使用動態參數 id
    component: () => import("../pages/UserPage.vue"),
    props: true, // 自動將路由參數作為 props 傳遞給組件
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// export default router;
export { router, routes };
