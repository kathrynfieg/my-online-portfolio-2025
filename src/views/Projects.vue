<script setup lang="ts">
import { useFirestore, useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';
import { ProjectCard } from '@/components';

const db = useFirestore();
const projectCollection = useCollection(collection(db, 'projects'));
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
      <div class="flex flex-col gap-10">
        <ProjectCard
          v-for="project in projectCollection"
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
