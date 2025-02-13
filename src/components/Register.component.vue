<template>
  <v-form @submit.prevent="handleSubmit" v-model="isValid">
    <v-text-field
      v-model="name"
      label="Name"
      name="name"
      prepend-icon="mdi-account"
      :rules="[rules.required]"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      name="email"
      prepend-icon="mdi-email"
      type="email"
      :rules="[rules.required, rules.email]"
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      name="password"
      prepend-icon="mdi-lock"
      type="password"
      :rules="[rules.required, rules.minLength(6)]"
    ></v-text-field>

    <v-text-field
      v-model="confirmPassword"
      label="Confirm Password"
      name="confirmPassword"
      prepend-icon="mdi-lock-check"
      type="password"
      :rules="[rules.required, rules.passwordMatch]"
    ></v-text-field>

    <v-btn
      color="primary"
      class="mt-4"
      block
      type="submit"
      :disabled="!isValid"
    >
      Register
    </v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isValid = ref(false);

const rules = reactive({
  required: (value: string) => !!value || "Required.",
  email: (value: string) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
  minLength: (length: number) => (value: string) =>
    value.length >= length || `Min ${length} characters`,
  passwordMatch: () =>
    password.value === confirmPassword.value || "Passwords must match",
});

const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  if (isValid.value) {
    emit("submit", {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
  }
};
</script>
