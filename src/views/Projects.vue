<script setup lang="ts">
import { ProjectCard } from '@/components';

import tafebuddy from '@/assets/tafebuddy-square.png';
import handleit from '@/assets/handleit-square.png';
// import tafebuddy from '@/assets/tafebuddy-portrait.png';
// import handleit from '@/assets/handleit-portrait.png';
</script>

<template>
  <div class="container container-spacing">
    <h1 class="small-header">
      My Projects<span class="blinking-cursor">|</span>
    </h1>

    <div class="flex flex-col gap-4 lg:flex-row lg:gap-20">
      <!-- header -->
      <div
        class="w-full max-w-full h-fit lg:max-w-[35%] lg:sticky lg:top-24 flex flex-col gap-4"
      >
        <h1 class="big-header">
          Notable (or just fun<box-icon name="smile"></box-icon>) side-projects
          i've worked on
        </h1>
        <p>
          Im a huge fan of Vue 3 and love working with it daily in my Job - But
          I do plan on playing around with different tech for my side-projects!
        </p>
      </div>

      <!-- Project list -->
      <div class="flex flex-col gap-10">
        <ProjectCard
          name="PupSpot Adelaide"
          description="Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          date="2024"
          :tech="['Vue', 'Firebase', 'Typescript']"
          :number="1"
        />

        <ProjectCard
          name="Handleit Cleaning Adelaide"
          description="Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          date="2024"
          liveLink="https://www.handleitcleaning.com.au/"
          :tech="['Webflow', 'BookingKoala']"
          :photo="handleit"
          :number="2"
        />

        <ProjectCard
          name="TafeBuddy"
          description="TAFE SA's Student Results View (SRV) app. elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          sourceCodeLink="https://github.com/kathrynfieg/TafeBuddy_SRV_App"
          date="2020"
          :tech="['UWP', 'C#', 'XAML', 'UI/UX', 'MySQL']"
          :photo="tafebuddy"
          :number="3"
          :actions="[
            {
              label: 'Video walkthrough',
              link: 'https://www.youtube.com/watch?v=MSR6I0BNxks&ab_channel=KathrynFieg',
            },
          ]"
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
