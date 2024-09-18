<script setup lang="ts">
/**
 * TODO
 * - more on flex spacing specially for about header and projects
 */
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
  min-height: 100dvh;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  /* remove to not have everything in the middle */
  justify-content: center;
  text-align: left;
}
</style>
