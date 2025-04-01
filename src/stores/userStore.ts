import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const isAuthenticated = ref(false);
  const userName = ref("");

  const login = (name: string) => {
    isAuthenticated.value = true;
    userName.value = name;
  };

  const logout = () => {
    isAuthenticated.value = false;
    userName.value = "";
  };

  return { isAuthenticated, userName, login, logout };
});
