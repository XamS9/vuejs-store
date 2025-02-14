<script lang="ts" setup>
import Navbar from "./Navbar.component.vue";
import Footer from "./Footer.component.vue";

defineProps<{
  cartItemCount: number;
}>();

defineEmits<{
  (e: "toggle-cart"): void;
}>();
</script>

<template>
  <v-container class="fill-height" fluid>
    <Navbar
      @toggle-cart="$emit('toggle-cart')"
      :cartItemCount="cartItemCount"
    />
    <v-main>
      <slot></slot>
    </v-main>
    <Footer />
  </v-container>
</template>

<style></style>
