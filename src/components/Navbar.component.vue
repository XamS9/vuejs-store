<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-title>Our Store</v-app-bar-title>
    <v-container class="d-flex align-center" style="flex: 1">
      <span class="text-h6 font-weight-bold">{{
        user?.user.username.toUpperCase()
      }}</span>
    </v-container>
    <v-btn icon @click="dialog = true">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>Confirm Logout</v-card-title>
        <v-card-text>Are you sure you want to log out?</v-card-text>
        <v-card-actions>
          <v-btn color="grey" @click="dialog = false">Cancel</v-btn>
          <v-btn color="error" @click="confirmLogout">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn icon @click="$emit('toggle-cart')">
      <v-badge :content="cartItemCount" color="error">
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

import { ref } from "vue";

const dialog = ref(false);

const confirmLogout = () => {
  handleSignOut();
  dialog.value = false;
};
const router = useRouter();
const user = computed(() => useUserStore().userData);
defineProps<{
  cartItemCount: number;
}>();

defineEmits<{
  (e: "toggle-cart"): void;
}>();
const handleSignOut = () => {
  useUserStore().logout();
  router.push("/auth");
};
</script>
