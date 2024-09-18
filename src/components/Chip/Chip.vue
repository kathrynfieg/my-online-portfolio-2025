<script setup lang="ts">
import { PropType } from 'vue';

export type IChipSize = 'default' | 'sm' | 'xs';

defineProps({
  label: {
    label: String,
    default: '',
  },
  size: {
    type: String as PropType<IChipSize>,
    default: 'default',
  },
});
</script>

<template>
  <div
    :class="[
      'bg-gray-200 w-fit px-4 py-0.5 rounded-lg',
      {
        'text-sm px-3': size === 'sm',
        'text-xs px-2': size === 'xs',
      },
    ]"
  >
    {{ label }}
  </div>
</template>
