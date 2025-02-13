<script lang="ts" setup>
import { ref } from "vue";
import LoginForm from "../components/Login.component.vue";
import RegisterForm from "../components/Register.component.vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
const currentForm = ref("login");
const userStore = useUserStore();
const router = useRouter();

const toggleForm = () => {
  currentForm.value = currentForm.value === "login" ? "register" : "login";
};

const handleLogin = async (credentials: Record<string, any>) => {
  try {
    await userStore.login(credentials.email, credentials.password);
    router.push("/");
  } catch (error: any) {
    window.alert("Login failed: " + error.message);
    console.error("Login failed:", error);
  }
};

const handleRegister = async (userData: Record<string, any>) => {
  try {
    await userStore.register(
      userData.email,
      userData.password,
      userData.confirmPassword,
      userData.name
    );
    router.push("/");
  } catch (err: any) {
    console.log(err.message);
  }
};
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>{{
              currentForm === "login" ? "Login" : "Register"
            }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleForm">
              <v-icon>{{
                currentForm === "login" ? "mdi-account-plus" : "mdi-login"
              }}</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <login-form v-if="currentForm === 'login'" @submit="handleLogin" />
            <register-form v-else @submit="handleRegister" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
