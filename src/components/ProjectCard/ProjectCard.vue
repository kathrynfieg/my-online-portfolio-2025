<template>
  <div class="project-card">
    <div class="project-image">IMG</div>
    <div>
      <div>Project Name</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <br />
      <div>Tech stack: Vue, typescript, storybook</div>
      <br />
      <div class="buttons">
        <button>Live Site</button>
        <button>Code</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  /* background-color: blueviolet; */
  width: 100%;
  border: 1px solid;
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
  font-family: 'IBM Plex Mono', monospace;
}
</style>
