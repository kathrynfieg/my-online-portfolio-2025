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
  date: {
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
  number: {
    type: Number,
    default: null,
  },
});
</script>

<template>
  <div class="flex flex-col p-3 gap-4 rounded-lg md:flex-row bg-white border">
    <!-- Project image desktop -->
    <div class="img-wrapper hidden md:block">
      <img v-if="photo" :src="photo" />
    </div>

    <div class="flex flex-col justify-between gap-8">
      <div class="flex flex-col gap-4">
        <!-- Project name -->
        <div class="flex items-start justify-between">
          <div>
            <div class="font-semibold text-lg">{{ name }}</div>
            <div class="text-sm text-gray-400">{{ date }}</div>
          </div>
          <div v-if="number" class="px-3 bg-black text-white font-bold">
            {{ number }}
          </div>
        </div>

        <!-- Project image mobile -->
        <div class="img-wrapper md:hidden">
          <img v-if="photo" :src="photo" />
        </div>

        <!-- Project description -->
        <div>
          <ReadMore :content="description" :lines="2"></ReadMore>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <!-- Tech used -->
        <div class="flex gap-[0.3rem] flex-wrap items-center">
          <Chip
            v-for="(tech, index) in tech"
            :label="tech"
            :key="index"
            size="sm"
          />
        </div>

        <!-- actions -->
        <div class="flex gap-2 flex-wrap items-center">
          <Button size="sm" v-if="liveLink" :href="liveLink">Live demo</Button>
          <Button size="sm" v-if="sourceCodeLink" :href="sourceCodeLink">
            Source code
          </Button>
          <Button
            size="sm"
            v-for="(action, index) in actions"
            :key="index"
            :href="action.link"
            >{{ action.label }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-wrapper {
  background-color: #fafafa;
  /* border: 2px black solid; */
  width: 250px !important;
  height: 250px !important;
  flex-shrink: 0;
}

img {
  font-size: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: top;
}

@media (max-width: 768px) {
  .img-wrapper {
    width: 100% !important;
    height: 250px !important;
    flex-shrink: 0;
  }
}
</style>
