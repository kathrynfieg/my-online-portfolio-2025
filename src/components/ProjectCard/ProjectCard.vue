<script setup lang="ts">
import { Chip } from "@/components";
</script>

<template>
  <div class="project-card">
    <!-- <div class="project-image">IMG</div> -->
    <div class="me-pic-div"></div>
    <div>
      <!-- <data value=""></data> -->
      <div style="font-weight: 600; font-size: larger">Project Name</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <br />
      <div>Tech stack:</div>
      <div style="display: flex; gap: 0.3rem">
        <Chip label="Vue" />
        <Chip label="typescript" />
        <Chip label="storybook" />
      </div>

      <br />
      <div class="buttons">
        <button>Live demo</button>
        <button>Source code</button>
      </div>
    </div>
  </div>
  <br />
  <hr />
</template>

<style scoped>
.me-pic-div {
  background-image: url("../../assets/me2.JPG");
  height: 400px;
  width: 100%;
  background-size: cover;
  border-radius: 1rem;
}

.project-card {
  /* background-color: blueviolet; */
  width: 100%;

  padding: 1rem;
  display: flex;
  gap: 1rem;
}

.project-image {
  width: 15rem !important;
  border: 1px solid;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

.buttons button {
  border: 1px solid;
  padding: 0.5rem;
  width: 8rem;
  background-color: black;
  color: white;
  font-family: "IBM Plex Mono", monospace;
}

@media (max-width: 768px) {
  .project-card {
    /* background-color: blueviolet; */
    width: 100%;

    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .me-pic-div {
    height: 250px;
    background-size: cover;
    border-radius: 1rem;
  }
}
</style>
