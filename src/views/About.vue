<script setup lang="ts">
import router from '@/router';
import { Button, Chip } from '@/components';

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
  <div class="container container-spacing">
    <h1 class="small-header">About Me<span class="blinking-cursor">|</span></h1>
    <div class="flex flex-col gap-6 md:gap-20 md:flex-row">
      <h1 class="big-header">
        Frontend Developer of 3 years and I finally built a personal portfolio!
      </h1>
      <div class="flex flex-col justify-between gap-4">
        <p>
          I'm a full-time frontend developer located in Adelaide, Australia, and
          I truly enjoy my work. My career began as an intern at PwC, where I
          delved into Vue and React on a large-scale internal project,
          eventually advancing to the role of Senior Associate.<br /><br />
          Currently, I'm diving into the thrilling realm of startups working
          closely with passionate entrepreneurs and developers.
        </p>
        <Button
          variant="secondary"
          class="md:w-fit md:self-end"
          @click="router.push('/projects')"
        >
          My Projects
        </Button>
      </div>
    </div>
    <div class="me-photo"></div>
    <div class="font-medium text-xl">
      <box-icon type="solid" name="quote-alt-left"></box-icon>
      This was one of the best parts of being a coder, and an artist: the thrill
      of being in the middle of creating something delightful. It's like the
      anticipation of eating freshly baked bread after its aroma fills the room.
      <box-icon name="quote-alt-right" type="solid"></box-icon>
      <br />
      <span class="font-normal">- Dr. Joy Buolamwini, "Unmasking AI"</span>
    </div>
    <!-- <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p> -->

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
.me-photo {
  background-image: url('@/assets/me.jpg');
  height: 400px;
  width: 100%;
  background-size: cover;
  border-radius: 1rem;
}

@media (max-width: 768px) {
  .me-photo {
    height: 200px;
  }
}
</style>
