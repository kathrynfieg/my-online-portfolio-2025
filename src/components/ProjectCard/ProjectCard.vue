<script setup lang="ts">
import { Button, Chip, ReadMore } from '@/components';

export type IProjectCardActions = {
  label: string;
  link: string;
};

defineProps({
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  photo: {
    type: String,
    default: '',
  },
  tech: {
    type: Array<string>,
    default: [],
  },
  liveLink: {
    type: String,
    default: '',
  },
  sourceCodeLink: {
    type: String,
    default: '',
  },
  actions: {
    type: Array<IProjectCardActions>,
    default: [],
  },
});
</script>

<template>
  <div class="flex flex-col p-2 gap-4 md:flex-row">
    <div class="me-photo" :style="{ backgroundImage: `url(${photo})` }"></div>
    <div class="flex flex-col justify-between">
      <div class="flex flex-col gap-4">
        <!-- Project name -->
        <div>
          <div class="text-sm text-gray-500">Project Name</div>
          <div class="font-semibold text-lg">{{ name }}</div>
        </div>

        <!-- Project description -->
        <div>
          <div class="text-sm text-gray-500">Description</div>
          <ReadMore :lines="3">{{ description }}</ReadMore>
        </div>

        <!-- Tech used -->
        <div>
          <div class="text-sm text-gray-500">Tech used</div>
          <div style="display: flex; gap: 0.3rem">
            <Chip v-for="(tech, index) in tech" :label="tech" :key="index" />
          </div>
        </div>
      </div>

      <!-- buttons -->
      <div class="flex gap-2 mt-5">
        <Button v-if="liveLink" :href="liveLink">Live demo</Button>
        <Button v-if="sourceCodeLink" :href="sourceCodeLink">
          Source code
        </Button>
        <Button
          v-for="(action, index) in actions"
          :key="index"
          :href="action.link"
          >{{ action.label }}
        </Button>
      </div>
    </div>
  </div>
  <br />
  <hr />
</template>

<style scoped>
.me-photo {
  /* background-image: url('../../assets/me.JPG'); */
  height: 400px;
  width: 100%;
  background-size: cover;
  /* border-radius: 1rem; */
}

@media (max-width: 768px) {
  .me-photo {
    height: 250px;
    background-size: cover;
    border-radius: 1rem;
  }
}
</style>
