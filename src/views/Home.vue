<script setup lang="ts">
import router from '@/router';
</script>

<template>
  <div class="container container-spacing">
    <p class="small-header">Hello! I'm Kat.</p>
    <h1 class="big-header">
      Inspired <span class="role">frontend developer</span>, building web
      applications with heart.<span class="blinking-cursor">|</span>
    </h1>
    <button @click="router.push('/projects')">My Projects</button>
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

button {
  cursor: pointer;
  border: 2px solid;
  padding: 0.5rem;
  width: 10rem;
  margin-top: 2rem;
  background-color: white;
  font-family: 'IBM Plex Mono', monospace;
}

button:hover {
  background-color: cadetblue;
  color: white;
}

@media (max-width: 768px) {
  .blinking-cursor {
    font-size: 3rem;
  }
}
</style>
