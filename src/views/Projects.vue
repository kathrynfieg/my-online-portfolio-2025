<script setup lang="ts">
import { ProjectCard } from '@/components';

import tafebuddy from '@/assets/tafebuddy-square.png';
import handleit from '@/assets/handleit-square.png';
import portfolio from '@/assets/portfolio-square.png';
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
          I'm a big fan of Vue and love using it in my daily role, but I'm also
          excited to explore other technologies for my side projects!
        </p>
      </div>

      <!-- Project list -->
      <div class="flex flex-col gap-10">
        <ProjectCard
          name="PupSpot Adelaide"
          description="Currently building—PupSpot Adelaide is a Web app designed for dog lovers in Adelaide. It helps users discover dog-friendly parks and places, with features like geolocation and detailed venue information to ensure a great experience for pets and their owners."
          date="2024 • In progress"
          :tech="['Vue', 'Firebase', 'Typescript']"
          :number="1"
        />

        <ProjectCard
          name="Online Portfolio"
          description="Yes - I added my portfolio to the list! I finally built a personal portfolio and will start coding outside of work. I plan to keep improving it over time and will be adding a blog, night mode, etc."
          date="2024"
          :photo="portfolio"
          sourceCodeLink="https://github.com/kathrynfieg/my-online-portfolio-2025"
          :tech="['Vue', 'Tailwind', 'Typescript', 'UI/UX']"
          :number="2"
        />

        <ProjectCard
          name="Handleit Cleaning"
          description="Website built for our family-owned cleaning business, designed to showcase the services we offer in Adelaide. Built with Webflow and integrated with Booking Koala, it streamlines online bookings, payments, and reviews, providing a seamless experience for our customers."
          date="2024"
          liveLink="https://www.handleitcleaning.com.au/"
          :tech="['Webflow', 'BookingKoala']"
          :photo="handleit"
          :number="3"
        />

        <ProjectCard
          name="TafeBuddy"
          description="An oldie but a goodie: the TAFE SA Student Results View (SRV) app. I built this with two fellow student developers during my time at TAFE SA as part of our Capstone project. The app addresses the challenge of manually tracking student qualifications by providing a clear display of their progress and grades."
          sourceCodeLink="https://github.com/kathrynfieg/TafeBuddy_SRV_App"
          date="2020"
          :tech="['UWP', 'C#', 'XAML', 'UI/UX', 'MySQL']"
          :photo="tafebuddy"
          :number="4"
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
