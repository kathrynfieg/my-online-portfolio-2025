<script setup lang="ts">
import { Button, Chip, ReadMore } from '@/components';

export type IProjectCardLinks = {
  label: string;
  source: string;
};

defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  projectImg: {
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
  otherLinks: {
    type: Array<IProjectCardLinks>,
    default: [],
  },
  number: {
    type: Number,
    default: null,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-if="isLoading"
    class="flex flex-col p-3 gap-4 rounded-lg md:flex-row bg-white border mb-4"
  >
    <div
      class="bg-[#f5f5f5] w-[250px] h-[250px] flex-shrink-0 hidden md:block"
    />
    <div class="h-full w-full flex flex-col gap-4">
      <div class="h-[50px] bg-[#f5f5f5] w-full" />
      <div class="h-[180px] grow bg-[#f5f5f5] w-full" />
    </div>
  </div>

  <div
    v-else
    class="flex flex-col p-3 gap-4 rounded-lg md:flex-row bg-white border"
  >
    <!-- Project image desktop -->
    <div class="img-wrapper hidden md:block">
      <img v-if="projectImg" :src="projectImg" />
    </div>

    <div class="flex flex-col justify-between gap-8">
      <div class="flex flex-col gap-4">
        <!-- Project name -->
        <div class="flex items-start justify-between">
          <div>
            <div class="font-semibold text-lg">{{ title }}</div>
            <div class="text-sm text-gray-400">{{ subtitle }}</div>
          </div>
          <div v-if="number" class="px-3 bg-black text-white font-bold">
            {{ number }}
          </div>
        </div>

        <!-- Project image mobile -->
        <div class="img-wrapper md:hidden">
          <img v-if="projectImg" :src="projectImg" />
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
            v-for="(link, index) in otherLinks"
            :key="index"
            :href="link.source"
            >{{ link.label }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-wrapper {
  background-color: #fafafa;
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
