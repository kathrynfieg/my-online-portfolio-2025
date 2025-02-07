<script setup lang="ts">
import router from '@/router';
import { Button } from '@/components';
</script>
<template>
  <div class="container flex flex-col gap-4">
    <div>
      <p class="small-header mb-6 mt-20">Hello! I'm Kat.</p>
      <h1 class="big-header">
        <span class="bg-primary text-primary-text pl-2 pr-4"
          >frontend developer</span
        >
        creating web experiences— professionally & for fun
        <span class="blinking-cursor">|</span>
      </h1>
    </div>

    <Button
      variant="secondary"
      @click="router.push('/projects')"
      class="w-40 mt-6"
    >
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
