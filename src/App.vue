<script setup lang="ts">
import { Navbar, Footer } from '@/components';
</script>

<template>
  <div class="main-wrapper">
    <Navbar />
    <main class="main">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center; /* remove to not have everything in the middle */
  text-align: left;
}
</style>
