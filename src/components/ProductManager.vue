<template>
  <div class="product-manager">
    <h1>Product Manager</h1>
    <form @submit.prevent="addProduct" class="form">
      <input v-model="newProduct.name" placeholder="Product Name" class="input" required />
      <input v-model="newProduct.price" type="number" placeholder="Product Price" class="input" required />
      <button type="submit" class="btn">Add Product</button>
    </form>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <span>{{ product.name }} - ${{ product.price }}</span>
        <button @click="removeProduct(product.id)" class="btn-remove">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { ref, onMounted, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { v4 as uuidv4 } from 'uuid';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
    }
  }
`;

export default {
  setup() {
    const productStore = useProductStore();
    const newProduct = ref({ name: '', price: 0 });
    const { result } = useQuery(GET_PRODUCTS);

    onMounted(() => {
      if (result.value) {
        productStore.products = result.value.products;
      }
    });

    const addProduct = () => {
      const product = { ...newProduct.value, id: uuidv4() };
      productStore.addProduct(product);
      newProduct.value = { name: '', price: 0 };
    };

    const removeProduct = (productId) => {
      productStore.removeProduct(productId);
    };

    const products = computed(() => productStore.products);

    return {
      newProduct,
      products,
      addProduct,
      removeProduct,
    };
  },
};
</script>

<style scoped>
/* Scoped styles specific to ProductManager.vue */
@import './ProductManager.css';
</style>