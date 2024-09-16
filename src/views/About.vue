<script setup lang="ts">
import { Chip } from "@/components";

const experiences = [
  "Vue",
  "React",
  "Remix",
  "Javascript",
  "Typescript",
  "Storybook",
  "Tailwind CSS",
  "Vanilla CSS",
  "SCSS",
  "SASS",
  "Vuetify",
  "Unit testing",
  "React Testing library",
  "Vitest",
  "W3C Accessibility",
  "Localisation (i18n)",
  "Mongo.DB",
  "Express.js",
  "Git",
  "Agile",
];
</script>

<template>
  <div class="about-screen container">
    <p class="header">About Me<span class="blinking-cursor">|</span></p>
    <div class="content">
      <h1>Frontend Developer of 3 years specialising in Vue</h1>
      <div class="short-me">
        <p>
          I'm Kat, a Frontend developer based in Adelaide, Australia and I focus
          on web applications built with vue.js
        </p>
        <button>My Projects</button>
      </div>
    </div>
    <div class="me-pic-div"></div>
    <!-- <img class="me-pic" src="../assets/me2.JPG" /> -->
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p class="header">What i've worked with</p>
    <div class="tech-stack">
      <Chip
        v-for="experience in experiences"
        :key="experience"
        :label="experience"
      />
    </div>
  </div>
</template>

<style scoped>
.about-screen {
  padding: 3rem 1rem;
  padding-top: 7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blinking-cursor {
  font-weight: 300;
  font-size: 2rem;
  padding-left: 0.5rem;
  color: #2e3d48;
  display: inline-block;
  animation: blink 1s step-end infinite;
}

.header {
  font-size: 1.5rem;
}

h1 {
  font-size: 3.5rem;
  line-height: 4rem;
}

.short-me {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.me-pic-div {
  background-image: url("../assets/me2.JPG");
  height: 400px;
  width: 100%;
  background-size: cover;
  border-radius: 1rem;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.me-pic {
  /* min-width: 100%;
  max-height: 500px; */
  /* background-size: contain; */
  /* border: 2px solid black; */
}

.content {
  display: flex;
  gap: 5rem;
}

button {
  cursor: pointer;
  border: 2px solid;
  padding: 0.5rem;
  width: 10rem;
  margin-top: 2rem;
  background-color: white;
  font-family: "IBM Plex Mono", monospace;
  align-self: flex-end;
}

button:hover {
  background-color: cadetblue;
  color: white;
}

@media (max-width: 768px) {
  .me-pic-div {
    /* background-image: url('../assets/me2.JPG'); */
    height: 200px;
    /* width: 100%; */
    /* background-size: cover; */
  }

  .about-screen {
    padding: 2rem 1rem;
    padding-top: 6rem;
  }

  .content {
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  button {
    align-self: auto;
    width: 100%;
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
