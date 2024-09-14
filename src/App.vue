<script setup lang="ts">
import { Navbar, Footer } from '@/components';
</script>

<template>
  <div class="wrapper">
    <Navbar />
    <div class="welcome-screen container">
      <h1>Hi there!</h1>
      <p>My Name is Kat.</p>
      <p>
        A <span class="role">Frontend Developer</span> based in Adelaide, South
        Australia<span class="blinking-cursor">|</span>
      </p>
      <button>My Projects</button>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.welcome-screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 0 20px;
}

.welcome-screen h1,
.welcome-screen p {
  margin: 0;
}
.welcome-screen p .role {
  background-color: black;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: white;
}

.blinking-cursor {
  font-weight: 500;
  font-size: 1.5rem;
  color: #2e3d48;
  display: inline-block;
  animation: blink 1s step-end infinite;
}

button {
  border: 2px solid;
  padding: 0.5rem;
  width: 8rem;
  margin-top: 2rem;
  background-color: white;
  font-family: 'IBM Plex Mono', monospace;
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
