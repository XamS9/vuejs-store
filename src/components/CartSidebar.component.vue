<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    location="right"
    temporary
  >
    <v-list-item>
      <v-list-item-title class="text-h6"> Shopping Cart </v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="(item, index) in cartItems" :key="index">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle
          >${{ Number(item.price).toFixed(2) }}</v-list-item-subtitle
        >
        <template v-slot:append>
          <v-btn icon @click="$emit('remove-from-cart', index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-title class="text-h6">
        Total: ${{ total.toFixed(2) }}
      </v-list-item-title>
    </v-list-item>

    <v-btn block color="primary" class="mt-4"> Checkout </v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  modelValue: boolean;
  cartItems: Product[];
}>();

defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "remove-from-cart", index: number): void;
}>();

const total = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
});
</script>
