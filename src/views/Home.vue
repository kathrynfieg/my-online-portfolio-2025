<script setup lang="ts">
import router from '@/router';
</script>

<template>
  <div class="home-screen container">
    <p>Hello! I'm Kat.</p>
    <h1>
      Inspired <span class="role">frontend developer</span>, building web
      applications with heart.<span class="blinking-cursor">|</span>
    </h1>
    <button @click="router.push('/projects')">My Projects</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3.5rem;
  line-height: normal;
}

p {
  font-size: 1.5rem;
}

.home-screen h1,
.home-screen p {
  margin: 0;
  width: 100%;
}

.role {
  background-color: black;
  padding-left: 0.5rem;
  padding-right: 1rem;
  color: white;
}

.blinking-cursor {
  font-weight: 500;
  font-size: 4rem;
  color: #2e3d48;
  display: inline-block;
  animation: blink 1s step-end infinite;
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
  h1 {
    font-size: 3rem;
  }

  .blinking-cursor {
    font-size: 3rem;
  }
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
