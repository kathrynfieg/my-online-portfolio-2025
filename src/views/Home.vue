<script setup lang="ts">
import router from '@/router';
import { Button } from '@/components';
</script>
<template>
  <div class="container container-spacing">
    <div>
      <p class="small-header">Hello! I'm Kat.</p>
      <h1 class="big-header">
        Inspired
        <span class="bg-black text-white pl-2 pr-4">frontend developer</span>,
        building web apps for a living - and sometimes for fun
        <span class="blinking-cursor">|</span>
      </h1>
    </div>

    <Button variant="secondary" @click="router.push('/projects')" class="w-40">
      My Projects
    </Button>
  </div>
</template>

<style scoped>
.blinking-cursor {
  font-weight: 300;
  font-size: 4rem;
}

@media (max-width: 768px) {
  .blinking-cursor {
    font-size: 3rem;
  }
}
</style>
