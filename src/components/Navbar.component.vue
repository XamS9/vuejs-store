<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-title>Our Store</v-app-bar-title>
    <v-spacer></v-spacer>
    <span style="padding-right: 6px" @click="handleSignOut">{{
      user?.email
    }}</span>
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
