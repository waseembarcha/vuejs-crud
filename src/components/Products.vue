<template>
  <div class="products">
    <h3 class="mb-4">Products</h3>

    <!-- Add Product Form -->
    <div class="card mb-4">
      <div class="card-header bg-primary text-white">
        Add a new product
      </div>
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="row g-3">
            <div class="col-md-3">
              <label for="productId" class="form-label">Product ID</label>
              <input
                id="productId"
                v-model="productData.product_id"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="productName" class="form-label">Product Name</label>
              <input
                id="productName"
                v-model="productData.product_name"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="productPrice" class="form-label">Product Price</label>
              <input
                id="productPrice"
                v-model="productData.product_price"
                type="number"
                class="form-control"
                step="0.01"
                required
              />
            </div>
            <div class="col-md-2 d-flex align-items-end">
              <button type="submit" class="btn btn-primary w-100">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Product List -->
    <div class="card">
      <div class="card-header bg-primary text-white">
        Product List
      </div>
      <div class="card-body">
        <div class="table-responsive" v-if="products.length > 0">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in sortedProducts" :key="product.id">
                <template v-if="editId === product.id">
                  <td>
                    <input v-model="editProductData.product_id" type="text" class="form-control" />
                  </td>
                  <td>
                    <input v-model="editProductData.product_name" type="text" class="form-control" />
                  </td>
                  <td>
                    <input
                      v-model="editProductData.product_price"
                      type="number"
                      step="0.01"
                      class="form-control"
                    />
                  </td>
                  <td>
                    <button
                      @click="onEditSubmit(product.id)"
                      class="btn btn-sm btn-success me-2"
                    >
                      <i class="fa fa-check"></i> Save
                    </button>
                    <button @click="onCancel" class="btn btn-sm btn-secondary">
                      <i class="fa fa-ban"></i> Cancel
                    </button>
                  </td>
                </template>
                <template v-else>
                  <td>{{ product.product_id }}</td>
                  <td>{{ product.product_name }}</td>
                  <td>${{ parseFloat(product.product_price).toFixed(2) }}</td>
                  <td>
                    <RouterLink
                      :to="{ name: 'ProductPage', params: { id: product.id } }"
                      class="btn btn-sm btn-info me-2"
                    >
                      <i class="fa fa-eye"></i> View
                    </RouterLink>
                    <button
                      @click="onEdit(product)"
                      class="btn btn-sm btn-warning me-2"
                    >
                      <i class="fa fa-pencil"></i> Edit
                    </button>
                    <button
                      @click="onDelete(product.id)"
                      class="btn btn-sm btn-danger"
                    >
                      <i class="fa fa-trash"></i> Delete
                    </button>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="alert alert-info">
          No products found. Add one to get started!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { getProducts, addProduct, updateProduct, deleteProduct } from '@/services/productService'

const products = ref([])
const editId = ref('')

const productData = ref({
  product_id: '',
  product_name: '',
  product_price: ''
})

const editProductData = ref({
  product_id: '',
  product_name: '',
  product_price: ''
})

const sortedProducts = computed(() => {
  return products.value
    .slice()
    .sort((a, b) => parseInt(a.product_id) - parseInt(b.product_id))
})

const fetchProducts = async () => {
  try {
    products.value = await getProducts()
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

const onSubmit = async () => {
  try {
    await addProduct(productData.value)
    productData.value = {
      product_id: '',
      product_name: '',
      product_price: ''
    }
    await fetchProducts()
  } catch (error) {
    console.error('Error adding product:', error)
  }
}

const onDelete = async (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await deleteProduct(id)
      await fetchProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }
}

const onEdit = (product) => {
  editId.value = product.id
  editProductData.value = {
    product_id: product.product_id,
    product_name: product.product_name,
    product_price: product.product_price
  }
}

const onCancel = () => {
  editId.value = ''
  editProductData.value = {
    product_id: '',
    product_name: '',
    product_price: ''
  }
}

const onEditSubmit = async (id) => {
  try {
    await updateProduct(id, editProductData.value)
    editId.value = ''
    editProductData.value = {
      product_id: '',
      product_name: '',
      product_price: ''
    }
    await fetchProducts()
  } catch (error) {
    console.error('Error updating product:', error)
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped>
h3 {
  text-align: center;
  color: #333;
  font-weight: 600;
}

.table-hover tbody tr:hover {
  background-color: #f5f5f5;
}

.btn-sm {
  margin-right: 5px;
}
</style>
