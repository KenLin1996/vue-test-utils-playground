import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../pages/HomePage.vue") },
  { path: "/about", component: () => import("../pages/AboutPage.vue") },
  { path: "/try", component: () => import("../pages/TryPage.vue") },
  {
    path: "/user/:id", // 使用動態參數 id
    component: () => import("../pages/UserPage.vue"),
    props: true, // 自動將路由參數作為 props 傳遞給組件
    meta: { requiresAuth: true }, // 添加 meta.requiresAuth
  },
  { path: "/login", component: () => import("../pages/LoginPage.vue") },
  {
    path: "/:error(.*)*",
    component: () => import("../pages/NotFoundPage.vue"),
  }, // 新增 404 頁面
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = false;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // 如果需要登入但沒登入，導向 login
  } else {
    next();
  }
});

export { router, routes };
