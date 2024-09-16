<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div class="navbar-wrapper">
    <nav class="navbar">
      <div class="navbar_logo">
        <RouterLink to="/"><h1 class="texty">kat.fieg</h1></RouterLink>
      </div>
      <button class="navbar_toggle" @click="toggleMenu">
        <box-icon name="menu"></box-icon>
      </button>
      <div :class="['navbar_links', { 'is-active': isMenuOpen }]">
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
.navbar-wrapper {
  width: 100vw;
  position: fixed;
  background-color: white;
}

.texty {
  /* background-color: aquamarine; */
  text-decoration: none;
  color: black;
}

.texty a {
  /* background-color: aquamarine; */
  text-decoration: none;
  color: black;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  border-bottom: 2px solid black;
}

.navbar_logo span {
  /* font-size: 1.5rem;
  font-weight: bold; */
}

.navbar_links {
  display: flex;
  gap: 1.5rem;
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
    border-bottom: 2px solid;
    background-color: white;
  }

  .navbar_links.is-active {
    display: flex;
  }
}
</style>
