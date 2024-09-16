<script setup lang="ts">
defineProps({
  label: String,
});
</script>

<template>
  <div class="bg-gray-200 w-fit px-4 py-0.5 rounded-lg">{{ label }}</div>
</template>
