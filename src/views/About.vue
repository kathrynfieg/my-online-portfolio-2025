<script setup lang="ts">
import router from '@/router';
import { Button, Chip } from '@/components';

const experiences = [
  'Vue 2 & 3',
  'React',
  'Remix',
  'TypeScript',
  'Tailwind',
  'SCSS / SASS',
  'Storybook',
  'UI Libraries',
  'Unit testing',
  'React Testing library',
  'Vitest',
  'ESLint & Prettier',
  'Git',
  'Localisation (i18n)',
  'W3C Accessibility (a11y)',
  'REST API',
  'State management',
  'Tanstack Query',
  'SQL / NoSQL',
  'Agile',
  'Github / Devops',
  'Github Actions',
];
</script>

<template>
  <div class="container container-spacing">
    <h1 class="small-header">About Me<span class="blinking-cursor">|</span></h1>
    <div class="flex flex-col gap-6 md:gap-20 md:flex-row">
      <h1 class="big-header">
        Frontend Developer of <span class="line-through opacity-20">3</span> 4 years and I finally built a personal portfolio!
      </h1>
      <div class="flex flex-col justify-between gap-4">
        <div class="text-lg">
          <box-icon type="solid" name="quote-alt-left"></box-icon>
          This was one of the best parts of being a coder, and an artist: the
          thrill of being in the middle of creating something delightful. It's
          like the anticipation of eating freshly baked bread after its aroma
          fills the room.
          <box-icon name="quote-alt-right" type="solid"></box-icon>
          <br /><br />
          <span class="font-normal text-lg">
            - Dr. Joy Buolamwini, "Unmasking AI"
          </span>
        </div>
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
    <p>
      I'm a full-time frontend developer based in Adelaide, Australia, and I
      truly enjoy my work. My professional journey began as an intern at PwC,
      where I delved into Vue and React on a large-scale internal project,
      eventually advancing to the role of Senior Associate. Currently, I'm
      diving into the thrilling realm of startups working closely with
      passionate entrepreneurs and an amazing team of developers.
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
