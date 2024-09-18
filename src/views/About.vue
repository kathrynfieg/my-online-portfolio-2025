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
    <h1 class="small-header">
      About Me<span class="blinking-cursor-primary">|</span>
    </h1>
    <div class="flex flex-col gap-6 md:gap-20 md:flex-row">
      <h1 class="big-header text-traveler-blue">
        Frontend Developer of 3 years specialising in Vue
      </h1>
      <div class="flex flex-col justify-between gap-4">
        <p>
          I'm currently a full-time Frontend developer based in Adelaide,
          Australia and I love what I do. My journey in web development has been
          an exciting blend of creativity and logic, and I'm always eager to
          learn new things and take on new challenges.
        </p>
        <Button
          variant="green-primary"
          class="md:w-fit md:self-end"
          @click="router.push('/projects')"
        >
          My Projects
        </Button>
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

    <h1 class="small-header text-traveler-green-primary">
      What i've worked with
    </h1>
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
  background-image: url('../assets/me.JPG');
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
