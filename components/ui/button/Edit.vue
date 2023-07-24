<script setup lang="ts">
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <button class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-1.5 px-2 flex items-center">
    <slot />
    <Icon v-if="loading" name="mdi-loading loading" class="ml-2" size="1.5rem"></Icon>
    <Icon v-else name="mdi-plus" class="ml-2" size="1.5rem"></Icon>
  </button>
</template>


<style scoped>
@keyframes spinner {
  to {transform: rotate(360deg);}
}
.loading {
  animation: spinner 1.5s linear infinite;
}
</style>