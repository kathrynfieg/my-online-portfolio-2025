<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar_logo">
      <span>Fieg.dev</span>
    </div>
    <button class="navbar_toggle" @click="toggleMenu">☰</button>
    <div :class="['navbar_links', { 'is-active': isMenuOpen }]">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#blog">Blog</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  border-bottom: 1px solid black;
}

.navbar_logo span {
  /* font-size: 1.5rem;
  font-weight: bold; */
}

.navbar_links {
  display: flex;
  gap: 1rem;
}

.navbar_links a {
  text-decoration: none;
  color: black;
}

.navbar_links a:hover {
  text-decoration: underline;
}

.navbar_toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navbar_toggle {
    display: block;
  }

  .navbar_links {
    display: none;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid;
    background-color: white;
  }

  .navbar_links.is-active {
    display: flex;
  }
}
</style>
