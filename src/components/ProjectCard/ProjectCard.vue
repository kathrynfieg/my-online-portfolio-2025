<script setup lang="ts">
import { Chip } from '@/components';
</script>

<template>
  <div class="flex flex-col p-2 gap-4 md:flex-row">
    <div class="me-photo"></div>
    <div class="flex flex-col justify-between">
      <div class="flex flex-col gap-4">
        <!-- Project name -->
        <div>
          <div class="text-sm text-gray-500">Project Name</div>
          <div class="font-semibold text-lg">PupSpots Adelaide</div>
        </div>

        <!-- Project description -->
        <div>
          <div class="text-sm text-gray-500">Description</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <!-- Tech used -->
        <div>
          <div class="text-sm text-gray-500">Tech used</div>
          <div style="display: flex; gap: 0.3rem">
            <Chip label="Vue" />
            <Chip label="typescript" />
            <Chip label="storybook" />
          </div>
        </div>
      </div>

      <!-- buttons -->
      <div class="flex gap-2 mt-5">
        <button>Live demo</button>
        <button>Source code</button>
      </div>
    </div>
  </div>
  <br />
  <hr />
</template>

<style scoped>
.me-photo {
  background-image: url('../../assets/me.JPG');
  height: 400px;
  width: 100%;
  background-size: cover;
  border-radius: 1rem;
}

button {
  border: 1px solid;
  padding: 0.5rem;
  width: 8rem;
  background-color: black;
  color: white;
  font-family: 'IBM Plex Mono', monospace;
}

@media (max-width: 768px) {
  .me-photo {
    height: 250px;
    background-size: cover;
    border-radius: 1rem;
  }
}
</style>
