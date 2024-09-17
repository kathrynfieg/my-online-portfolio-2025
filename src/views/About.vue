<script setup lang="ts">
import { Chip } from '@/components';

const experiences = [
  'Vue',
  'React',
  'Remix',
  'Javascript',
  'Typescript',
  'Storybook',
  'Tailwind CSS',
  'Vanilla CSS',
  'SCSS',
  'SASS',
  'Vuetify',
  'Unit testing',
  'React Testing library',
  'Vitest',
  'W3C Accessibility',
  'Localisation (i18n)',
  'Mongo.DB',
  'Express.js',
  'Git',
  'Agile',
];
</script>

<template>
  <div class="about-screen container">
    <h1 class="small-header">About Me<span class="blinking-cursor">|</span></h1>
    <div class="flex flex-col gap-6 md:gap-20 md:flex-row">
      <h1 class="big-header">
        Frontend Developer of 3 years specialising in Vue
      </h1>
      <div class="flex flex-col justify-between">
        <p>
          I'm Kat, a Frontend developer based in Adelaide, Australia and I focus
          on web applications built with vue.js
        </p>
        <button>My Projects</button>
      </div>
    </div>
    <div class="me-photo"></div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <h1 class="small-header">What i've worked with</h1>
    <div class="flex flex-wrap gap-2">
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

.me-photo {
  background-image: url('../assets/me.JPG');
  height: 400px;
  width: 100%;
  background-size: cover;
  border-radius: 1rem;
}

button {
  cursor: pointer;
  border: 2px solid;
  padding: 0.5rem;
  width: 10rem;
  margin-top: 2rem;
  background-color: white;
  font-family: 'IBM Plex Mono', monospace;
  align-self: flex-end;
}

button:hover {
  background-color: cadetblue;
  color: white;
}

@media (max-width: 768px) {
  .me-photo {
    height: 200px;
  }

  .about-screen {
    padding: 2rem 1rem;
    padding-top: 6rem;
  }

  button {
    align-self: auto;
    width: 100%;
  }
}
</style>
