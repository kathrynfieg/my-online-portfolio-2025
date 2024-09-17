<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';

const props = defineProps({
  as: {
    type: String,
    default: 'p',
  },
  content: {
    type: String,
    default: '',
  },
  lines: {
    type: Number,
    default: 3,
  },
});

const contentRef = ref<HTMLElement | null>(null);
const expanded = ref<boolean>(false);
const canExpand = ref<boolean>(true);

const toggle = () => {
  expanded.value = !expanded.value;
};

onMounted(() =>
  nextTick(() => {
    if (contentRef.value) {
      canExpand.value = Boolean(
        contentRef.value.scrollHeight > contentRef.value.clientHeight
      );
    }
  })
);

watch(
  () => props.content,
  () =>
    nextTick(() => {
      if (contentRef.value) {
        canExpand.value = Boolean(
          contentRef.value.scrollHeight > contentRef.value.clientHeight
        );
      }
    })
);
</script>

<template>
  <component
    v-bind="$attrs"
    :is="as"
    ref="contentRef"
    class="whitespace-pre-wrap m-0 p-0"
    :class="{ 'overflow-hidden line-clamp': !expanded }"
  >
    {{ content }}
  </component>
  <slot v-bind="{ toggle, expanded, canExpand }">
    <button
      v-if="canExpand"
      class="bg-none mt-3 p-0 border-none cursor-pointer transition-colors duration-150 underline text-sm"
      @click="toggle"
    >
      {{ expanded ? 'Read less' : 'Read more' }}
    </button>
  </slot>
</template>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: v-bind(lines);
  -webkit-box-orient: vertical;
}
</style>
