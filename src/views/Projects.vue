<script setup lang="ts">
import { Chip, ProjectCard } from "@/components";
</script>

<template>
  <div class="about-screen container">
    <p class="header">My Projects<span class="blinking-cursor">|</span></p>
    <div class="content">
      <div class="side-header">
        <h1 style="">
          Notable (or just fun<box-icon name="smile"></box-icon>) side-projects
          i've worked on
        </h1>
        <br />
        <a
          href="https://github.com/kathrynfieg?tab=repositories"
          target="_blank"
          style="display: flex; gap: 0.3rem"
        >
          <box-icon name="link-external"></box-icon>
          Feel free to check out more of my projects on GitHub</a
        >
      </div>
      <div class="">
        <ProjectCard />
        <br />
        <ProjectCard /> <br />
        <ProjectCard /> <br />
        <ProjectCard /> <br />
        <ProjectCard /> <br />
        <ProjectCard /> <br />
        <ProjectCard />
        <br />
        <!-- <p>
          I'm Kat, a Frontend developer based in Adelaide, Australia and I focus
          on web applications built with vue.js
        </p>
        <p>
          I'm Kat, a Frontend developer based in Adelaide, Australia and I focus
          on web applications built with vue.js
        </p>
        <p>
          I'm Kat, a Frontend developer based in Adelaide, Australia and I focus
          on web applications built with vue.js
        </p>
        <p>
          I'm Kat, a Frontend developer based in Adelaide, Australia and I focus
          on web applications built with vue.js
        </p>

        <button>My Projects</button> -->
      </div>
    </div>
    <!-- <div class="me-pic-div"></div> -->
  </div>
</template>

<style scoped>
.about-screen {
  padding: 3rem 1rem;
  padding-top: 7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blinking-cursor {
  font-weight: 300;
  font-size: 2rem;
  padding-left: 0.5rem;
  color: #2e3d48;
  display: inline-block;
  animation: blink 1s step-end infinite;
}

.header {
  font-size: 1.5rem;
}

h1 {
  font-size: 3.5rem;
  line-height: 4rem;
}

.side-header {
  max-width: 35%;
  position: sticky;
  top: 6rem;
  height: fit-content;
}

.short-me {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.me-pic-div {
  background-image: url("../assets/me2.JPG");
  height: 400px;
  width: 100%;

  background-size: cover;
  border-radius: 1rem;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.me-pic {
  /* min-width: 100%;
  max-height: 500px; */
  /* background-size: contain; */
  /* border: 2px solid black; */
}

.content {
  display: flex;
  gap: 5rem;
}

button {
  cursor: pointer;
  border: 2px solid;
  padding: 0.5rem;
  width: 10rem;
  margin-top: 2rem;
  background-color: white;
  font-family: "IBM Plex Mono", monospace;
  align-self: flex-end;
}

button:hover {
  background-color: cadetblue;
  color: white;
}

@media (max-width: 768px) {
  .me-pic-div {
    /* background-image: url('../assets/me2.JPG'); */
    height: 200px;
    /* width: 100%; */
    /* background-size: cover; */
  }

  .about-screen {
    padding: 2rem 1rem;
    padding-top: 6rem;
  }

  .content {
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
    max-width: 100%;
    width: 100%;
    position: static;
    top: auto;
  }

  .side-header {
    max-width: 100%;
    width: 100%;
    position: static;
    top: auto;
  }

  button {
    align-self: auto;
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
