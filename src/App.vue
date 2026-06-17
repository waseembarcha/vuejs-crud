<template>
  <div id="app">
    <Navbar />
    <div class="container mt-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
