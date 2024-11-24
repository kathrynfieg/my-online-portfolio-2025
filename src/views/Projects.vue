<script setup lang="ts">
import { useFirestore, useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';
import { ProjectCard } from '@/components';

const db = useFirestore();
const {
  data: projects,
  pending,
  error,
} = useCollection(collection(db, 'projects'));
</script>

<template>
  <div class="container container-spacing">
    <h1 class="small-header">
      My Projects<span class="blinking-cursor">|</span>
    </h1>

    <div class="flex flex-col gap-4 lg:flex-row lg:gap-20">
      <!-- Header -->
      <div
        class="w-full max-w-full h-fit lg:max-w-[35%] lg:sticky lg:top-24 flex flex-col gap-4"
      >
        <h1 class="big-header">
          Notable (or just fun<box-icon name="smile"></box-icon>) side-projects
          i've worked on
        </h1>
        <p>
          I'm a big fan of Vue and love using it in my daily role, but I'm also
          excited to explore other technologies for my side projects!
        </p>
      </div>

      <!-- Project list -->
      <div class="flex flex-col gap-10 w-full">
        <transition name="fade" class="flex flex-col gap-10">
          <div v-if="pending">
            <ProjectCard v-for="index in 3" :key="index" isLoading />
          </div>

          <div v-else-if="error">
            Oops, something went wrong while loading my projects. Please try
            again later or check back soon.
          </div>

          <div v-else>
            <ProjectCard
              v-for="project in projects"
              :key="project.title"
              :title="project.title"
              :subtitle="project.subtitle"
              :description="project.description"
              :projectImg="project.imageUrl"
              :tech="project.tech"
              :liveLink="project.liveLink"
              :sourceCodeLink="project.sourceCodeLink"
              :otherLinks="project.otherLinks"
            />
          </div>
        </transition>

        <!-- See more link -->
        <a
          href="https://github.com/kathrynfieg?tab=repositories"
          target="_blank"
          class="flex gap-1 underline"
        >
          <box-icon name="link-external"></box-icon>
          Feel free to check out more of my projects on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
