<template>
  <div>
    <div class="row-forms">
      <h1>Click on fetchProducts to get the details</h1>
      <el-form-item>
        <div class="button">
          <el-button type="primary" @click="fetchProducts">Get Products</el-button>
          <el-button @click="$router.go(-1)">Cancel</el-button>
        </div>
      </el-form-item>
    </div>

    <div class="centered-container" v-if="products.length">
      <div v-for="(product, index) in products" :key="index" class="product-card">
        <div class="product-image-container">
          <img :src="product.img" alt="Product Image" class="product-image" />
        </div>
        <div class="product-details">
          <h3 class="product-name">{{ product.productName }}</h3>
          <p class="product-info">
            {{ product.brand }} - {{ product.category }} - {{ product.price }} - {{ product.quantity }} {{ isTokenInfo }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>No products to display.</h2>
    </div>
  </div>
</template>

<style scoped>
/* Existing styles */
.row-forms {
  border: 1px solid #902525;
  background-color: rgb(226, 232, 232);
  margin-left: 200px;
  margin-right: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
}

.product-image-container {
  margin-right: 15px;
}

.product-image {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  object-fit: cover;
  border: 1px solid #ddd;
}

.product-details {
  flex-grow: 1;
}

.product-name {
  margin: 0;
  font-size: 18px;
}

.product-info {
  margin: 0;
  color: #888;
}
</style>

<script>
import axios from 'axios';
import config from '../config'
export default {
  data() {
    return {
      products: [] // Initialize an empty array to hold fetched product
    }},
    computed: {
    isTokenInfo() {
      return this.$store.getters['common/getToken'];
    }
  }
  ,
  methods: {
    async fetchProducts() {

      try {
        const { data } = await axios.get(`${config.PRODUCT_URL}/getbyfilter`, {
          headers: { "Content-Type": "application/json" ,"authorization":localStorage.getItem('token')}
        });
        console.log('Fetched products:', data.data);
        this.products = data.data; // Update the products array with fetched data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    
  }
};

</script>
