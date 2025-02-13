<template>
  <v-card>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>
      <p>Price: ${{ Number(product.price).toFixed(2) }}</p>
      <p>Category: {{ "category" }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('add-to-cart', product)">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
defineProps<{
  product: Product;
}>();

defineEmits<{
  (e: "add-to-cart", product: Product): void;
}>();
</script>
