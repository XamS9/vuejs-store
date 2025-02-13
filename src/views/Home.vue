<script lang="ts" setup>
import Layout from "../components/Layout.component.vue";
import ItemCard from "../components/ItemCard.component.vue";
import Finder from "../components/Finder.component.vue";
import CartSidebar from "../components/CartSidebar.component.vue";
import { ref, computed } from "vue";
import { getCategories, getProducts } from "../services/api";

const cartOpen = ref(false);
const cartItems = ref<Product[]>([]);
const searchQuery = ref("");
const searchCategory = ref("All");
const cartItemCount = computed(() => cartItems.value.length);
const products = ref<any[]>([]);
const categories = ref<string[]>([]);

const fetchProducts = async () => {
  try {
    products.value = await getProducts();
  } catch (err: any) {
    console.error(err.message);
  }
};
const fetchCategories = async () => {
  try {
    categories.value = [
      "All",
      ...(await getCategories()).map((cat) => cat.name),
    ];
  } catch (err: any) {
    console.error(err.message);
  }
};
fetchProducts();
fetchCategories();

const filteredProducts = computed(() => {
  return products.value.filter((product: Product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesCategory =
      searchCategory.value === "All" ||
      product.categories.some((cat) => cat.name === searchCategory.value);
    return matchesSearch && matchesCategory;
  });
});

const toggleCart = () => {
  cartOpen.value = !cartOpen.value;
};

const addToCart = (product: Product) => {
  cartItems.value.push(product);
};

const removeFromCart = (index: number) => {
  cartItems.value.splice(index, 1);
};

const handleSearch = ({
  query,
  category,
}: {
  query: string;
  category: string;
}) => {
  searchQuery.value = query;
  searchCategory.value = category;
};
</script>

<template>
  <Layout :cartItemCount="cartItemCount" @toggle-cart="toggleCart">
    <Finder
      v-if="categories.length"
      @search="handleSearch"
      :categories="categories"
    />
    <v-row class="mt-6"> </v-row>
    <div class="d-flex flex-wrap">
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ItemCard :product="product" @add-to-cart="addToCart"></ItemCard>
        <CartSidebar
          :modelValue="cartOpen"
          @update:modelValue="cartOpen = $event"
          :cartItems="cartItems"
          @remove-from-cart="removeFromCart"
        />
      </v-col>
    </div>
  </Layout>
</template>
