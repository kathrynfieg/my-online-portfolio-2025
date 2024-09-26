<script setup lang="ts">
import router from '@/router';
import { Button } from '@/components';
</script>
<template>
  <div class="container container-spacing">
    <p class="small-header">Hello! I'm Kat.</p>
    <h1 class="big-header">
      Inspired <span class="role">frontend developer</span>, building web apps
      for a living - and sometimes for fun
      <span class="blinking-cursor">|</span>
    </h1>
    <Button variant="secondary" @click="router.push('/projects')" class="w-40">
      My Projects
    </Button>
  </div>
</template>

<style scoped>
.role {
  background-color: black;
  padding-left: 0.5rem;
  padding-right: 1rem;
  color: white;
}

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
