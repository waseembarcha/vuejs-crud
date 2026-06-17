import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/components/Products.vue'
import ProductPage from '@/components/ProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
