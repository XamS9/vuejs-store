<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps<{ categories: string[] }>();
const query = ref("");
const category = ref("All");
const categories = props.categories.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

const emit = defineEmits<{
  (e: "search", payload: { query: string; category: string }): void;
}>();

const emitSearch = () => {
  emit("search", { query: query.value, category: category.value });
};

watch([query, category], emitSearch);
</script>
<template>
  <v-row>
    <v-col cols="12" sm="8">
      <v-text-field
        v-model="query"
        label="Search products"
        prepend-icon="mdi-magnify"
        @input="emitSearch"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-select
        v-model="category"
        :items="categories"
        label="Category"
        @change="emitSearch"
      ></v-select>
    </v-col>
  </v-row>
</template>
