<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

watch(
  () => route.path,
  () => {
    if (isMenuOpen.value) toggleMenu();
  }
);
</script>

<template>
  <div class="w-dvw fixed bg-white">
    <nav class="navbar">
      <RouterLink to="/"
        ><h1 class="small-header font-bold">kat.fieg</h1>
      </RouterLink>
      <button class="navbar-menu" @click="toggleMenu">
        <box-icon name="menu"></box-icon>
      </button>
      <div :class="['navbar-links', { 'is-active': isMenuOpen }]">
        <RouterLink active-class="active" to="/about">About</RouterLink>
        <RouterLink active-class="active" to="/projects">Projects</RouterLink>
        <RouterLink active-class="active" to="/blog">Blog</RouterLink>
        <div class="flex gap-6">
          <a href="https://github.com/kathrynfieg" target="_blank">
            <box-icon type="logo" name="github" />
          </a>
          <a href="https://www.linkedin.com/in/kathrynfieg/" target="_blank">
            <box-icon type="logo" name="linkedin-square" />
          </a>
        </div>
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
  color: black;
}

.navbar-links a:hover,
.active {
  text-decoration: underline;
  text-decoration-thickness: 3px;
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
