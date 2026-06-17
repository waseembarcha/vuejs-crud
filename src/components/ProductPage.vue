<template>
  <div class="single-product">
    <div v-if="loaded" class="card">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0">Product Details</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-8">
            <div class="mb-3">
              <label class="form-label fw-bold">Product ID:</label>
              <p class="form-control-plaintext">{{ productId }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Product Name:</label>
              <p class="form-control-plaintext">{{ productName }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Product Price:</label>
              <p class="form-control-plaintext">${{ parseFloat(productPrice).toFixed(2) }}</p>
            </div>
            <div class="mt-4">
              <button class="btn btn-success me-2">
                <i class="fa fa-shopping-cart"></i> Buy Now
              </button>
              <RouterLink to="/" class="btn btn-primary">
                <i class="fa fa-arrow-left"></i> Back to Products
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-info">
      <div class="spinner-border me-2" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      Loading product details...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { getProductById } from '@/services/productService'

const route = useRoute()
const productId = ref('')
const productName = ref('')
const productPrice = ref('')
const loaded = ref(false)

const loadProduct = async () => {
  try {
    const id = route.params.id
    const product = await getProductById(id)

    if (product) {
      productId.value = product.product_id
      productName.value = product.product_name
      productPrice.value = product.product_price
      loaded.value = true
    } else {
      console.log('No such product!')
      loaded.value = false
    }
  } catch (error) {
    console.error('Error loading product:', error)
    loaded.value = false
  }
}

onMounted(() => {
  loadProduct()
})
</script>

<style scoped>
h3 {
  margin-top: 30px;
  margin-bottom: 20px;
}

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
