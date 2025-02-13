<script lang="ts" setup>
import { ref, reactive } from "vue";

const email = ref("");
const password = ref("");
const isValid = ref(false);
const showPassword = ref(false);

const rules = reactive({
  required: (value: string) => !!value || "Required.",
  email: (value: string) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
  minLength: (length: number) => (value: string) =>
    value.length >= length || `Min ${length} characters`,
});

const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  if (isValid.value) {
    emit("submit", { email: email.value, password: password.value });
  }
};
</script>
<template>
  <v-form @submit.prevent="handleSubmit" v-model="isValid">
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
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      label="Password"
      name="password"
      prepend-icon="mdi-lock"
      :rules="[rules.required, rules.minLength(6)]"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
    <v-btn
      color="primary"
      class="mt-4"
      block
      type="submit"
      :disabled="!isValid"
    >
      Login
    </v-btn>
  </v-form>
</template>
