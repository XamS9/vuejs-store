<template>
  <v-app>
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import { useUserStore } from "./stores/user";

useUserStore().initializeFromStorage();
</script>
