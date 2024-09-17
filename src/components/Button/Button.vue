<script lang="ts" setup>
/**
 * TODO
 * variants: isLoading, other colors
 */
import { PropType } from 'vue';

export type IButtonVariant = 'primary' | 'secondary';
export type IButtonSize = 'default' | 'lg';

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
    :class="[`button_${variant}`, `button-${size}`]"
    :disabled="disabled"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.button {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.5rem 1rem;
}

a.button {
  text-decoration: none;
}

.button-lg {
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  gap: 1rem;
}

.button_primary {
  background: black;
  color: white;
  border-color: black;
}

.button_primary:hover {
  background: white;
  color: black;
  border-color: black;
}

.button_secondary {
  background: white;
  color: black;
  border-color: black;
}

.button_secondary:hover {
  background: black;
  color: white;
  border-color: black;
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
