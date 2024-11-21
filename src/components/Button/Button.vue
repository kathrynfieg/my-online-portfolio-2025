<script lang="ts" setup>
/**
 * TODO
 * variants: isLoading, other colors
 */
import { PropType } from 'vue';

export type IButtonVariant = 'primary' | 'secondary';
export type IButtonSize = 'default' | 'lg' | 'sm';

defineProps({
  variant: {
    type: String as PropType<IButtonVariant>,
    default: 'primary',
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'default',
  },
  href: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    v-bind="$attrs"
    class="button border-2"
    :class="[
      `button-${size}`,
      {
        'bg-primary text-primary-text border border-primary hover:bg-primary-text hover:text-primary':
          variant === 'primary',
        'bg-secondary text-secondary-text border border-secondary-text hover:bg-secondary-text hover:text-secondary':
          variant === 'secondary',
      },
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.button {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.3rem 1rem;
  font-family: 'IBM Plex Mono', monospace;
}

a.button {
  text-decoration: none;
}

.button-lg {
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  gap: 1rem;
}

.button-sm {
  padding: 0.2rem 1rem;
  font-size: smaller;
}

.button:disabled {
  background-color: lightgray;
  border-color: lightgray;
  color: darkgray;
  cursor: not-allowed;
}

.button:disabled:hover {
  background-color: lightgray;
  border-color: lightgray;
  color: darkgray;
  cursor: not-allowed;
}
</style>
