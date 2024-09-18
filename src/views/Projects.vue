<script setup lang="ts">
import { ProjectCard } from '@/components';

import photo from '@/assets/me.jpg';
import handleit from '@/assets/handleit.png';
import tafebuddy from '@/assets/tafebuddy.png';
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
        <h1 class="big-header text-traveler-blue">
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
          name="Handleit Cleaning Adelaide"
          description="Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :tech="['Webflow', 'BookingKoala integration']"
          liveLink="https://www.handleitcleaning.com.au/"
          :photo="handleit"
          :number="1"
        />

        <ProjectCard
          name="TafeBuddy"
          description="TAFE SA's Student Results View (SRV) app. elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :tech="['C#', 'XAML', 'SQL', 'MySQL']"
          :photo="tafebuddy"
          sourceCodeLink="https://github.com/kathrynfieg/TafeBuddy_SRV_App?tab=readme-ov-file#tafebuddy"
          :actions="[
            {
              label: 'Video walkthrough',
              link: 'https://www.youtube.com/watch?v=MSR6I0BNxks&ab_channel=KathrynFieg',
            },
          ]"
          :number="2"
        />

        <ProjectCard
          name="PupSpot Adelaide"
          description="Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :tech="['Vue', 'Firebase', 'Typescript']"
          liveLink="https://www.handleitcleaning.com.au/"
          :photo="photo"
          :number="3"
        />

        <ProjectCard
          name="PupSpot Adelaide"
          description="Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :tech="['Vue', 'Firebase', 'Typescript']"
          liveLink="https://www.handleitcleaning.com.au/"
          :number="4"
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
