<script setup lang="ts">
import { ProjectCard } from '@/components';

import tafebuddy from '@/assets/tafebuddy-square.png';
import handleit from '@/assets/handleit-square.png';
import portfolio from '@/assets/portfolio-square.png';
import istherework from '@/assets/istherework-square.png';
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
          name="Online Portfolio"
          description="Yes - I added my portfolio to the list! I finally built a personal portfolio and will start coding outside of work. I plan to keep improving it over time and will be adding a blog, night mode, etc."
          date="2024"
          :photo="portfolio"
          sourceCodeLink="https://github.com/kathrynfieg/my-online-portfolio-2025"
          :tech="['Vue', 'Tailwind', 'Typescript', 'UI/UX']"
        />

        <ProjectCard
          name="IsThereWorkToday"
          description="A fun and quirky web app that checks if today is a public holiday in Australia based on your location! If it's not a holiday, it gives you a playful message and counts down to the next one, complete with cheeky encouragement and a random gif (thanks to the Giphy API)."
          date="2024 • Mini Project"
          :photo="istherework"
          :tech="[
            'Vue',
            'TypeScript',
            'Vue query',
            'Geolocation',
            'LocationIQ API',
            'Nager.Date API',
            'Giphy API',
            'Tailwind',
          ]"
          sourceCodeLink="https://github.com/kathrynfieg/isthereworktoday"
          liveLink="https://istherework.today"
        />

        <ProjectCard
          name="Handleit Cleaning"
          description="Website built for our family-owned cleaning business, designed to showcase the services we offer in Adelaide. Built with Webflow and integrated with Booking Koala, it streamlines online bookings, payments, and reviews, providing a seamless experience for our customers."
          date="2024"
          liveLink="https://www.handleitcleaning.com.au/"
          :tech="['Webflow', 'BookingKoala']"
          :photo="handleit"
        />

        <ProjectCard
          name="TafeBuddy"
          description="An oldie but a goodie: the TAFE SA Student Results View (SRV) app. I built this with two fellow student developers during my time at TAFE SA as part of our Capstone project. The app addresses the challenge of manually tracking student qualifications by providing a clear display of their progress and grades."
          sourceCodeLink="https://github.com/kathrynfieg/TafeBuddy_SRV_App"
          date="2020"
          :tech="['UWP', 'C#', 'XAML', 'UI/UX', 'MySQL']"
          :photo="tafebuddy"
          :actions="[
            {
              label: 'Preview clip',
              link: 'https://youtu.be/0Y-oiwLbFMA',
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
