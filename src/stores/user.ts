import { defineStore } from "pinia";
import { fetchUserData, login, register } from "../services/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    userData: (state) => state.user,
  },
  actions: {
    async login(email: string, password: string) {
      try {
        const params = new URLSearchParams();
        params.append("email", email);
        params.append("password", password);

        const response = await login(params);
        this.user = response;
        localStorage.setItem("user_token", response.token);
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },

    async register(
      email: string,
      password: string,
      confirmPassword: string,
      name: string
    ) {
      try {
        const params = new URLSearchParams();
        params.append("email", email);
        params.append("name", name);
        params.append("password", password);
        params.append("c_password", confirmPassword);

        const response = await register(params);
        this.user = response;
        localStorage.setItem("user_token", response.token);
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user_token");
    },
    async initializeFromStorage() {
      const token = localStorage.getItem("user_token");
      if (token) {
        const validate = await fetchUserData();
        this.user = { ...validate, token };
      }
    },
  },
});
