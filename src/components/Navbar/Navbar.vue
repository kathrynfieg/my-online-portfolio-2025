<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div class="w-dvw fixed bg-white">
    <nav class="navbar">
      <RouterLink to="/"
        ><h1 class="small-header font-bold">kat.fieg</h1></RouterLink
      >
      <button class="navbar-menu" @click="toggleMenu">
        <box-icon name="menu"></box-icon>
      </button>
      <div :class="['navbar-links', { 'is-active': isMenuOpen }]">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <a href="https://github.com/kathrynfieg" target="_blank">
          <box-icon type="logo" name="github" />
        </a>
        <a href="https://www.linkedin.com/in/kathrynfieg/" target="_blank">
          <box-icon type="logo" name="linkedin-square" />
        </a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  border-bottom: 2px solid black;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.navbar-links a {
  text-decoration: none;
  color: black;
}

.navbar-links a:hover {
  text-decoration: underline;
}

.navbar-menu {
  display: none;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navbar-menu {
    display: block;
    cursor: pointer;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 1rem;
    border-bottom: 2px solid;
    background-color: white;
  }

  .navbar-links.is-active {
    display: flex;
  }
}
</style>
