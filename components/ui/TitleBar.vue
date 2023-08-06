<script setup lang="ts">
 const { title } = defineProps<{
  title: string
 }>()
</script>

<template>
  <div class="flex items-center justify-between w-full mb-10">
    <h1 class="text-5xl font-bold text-custPrimary">{{ title }}</h1>
    <slot /> 
  </div>
</template>
