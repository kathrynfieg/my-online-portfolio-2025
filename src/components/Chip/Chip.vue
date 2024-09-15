<script setup lang="ts">
defineProps({
  label: String,
});
</script>

<template>
  <div class="chip">{{ label }}</div>
</template>

<style scoped>
.chip {
  background-color: rgb(222, 222, 222);
  width: fit-content;
  padding: 0.1rem 1rem;
  border-radius: 0.5rem;
}
</style>
