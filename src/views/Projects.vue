<script setup lang="ts">
import { ProjectCard } from '@/components';
</script>

<template>
  <div class="container container-spacing">
    <h1 class="small-header">
      My Projects<span class="blinking-cursor">|</span>
    </h1>
    <div class="flex flex-col gap-4 md:flex-row md:gap-20">
      <div class="w-full max-w-full h-fit md:max-w-[35%] md:sticky md:top-24">
        <h1 class="big-header">
          Notable (or just fun<box-icon name="smile"></box-icon>) side-projects
          i've worked on
        </h1>
        <br />
        <a
          href="https://github.com/kathrynfieg?tab=repositories"
          target="_blank"
          class="flex gap-1"
        >
          <box-icon name="link-external"></box-icon>
          Feel free to check out more of my projects on GitHub
        </a>
      </div>
      <div class="flex flex-col gap-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  button {
    align-self: auto;
    width: 100%;
  }
}
</style>
