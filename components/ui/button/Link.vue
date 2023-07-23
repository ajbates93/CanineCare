<script setup lang="ts">
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <button class="bg-custPrimary hover:bg-custPrimaryDark text-white rounded-lg py-1.5 px-2 flex items-center">
    <slot />
    <Icon v-if="loading" name="mdi-loading loading" class="ml-2" size="1.5rem"></Icon>
    <Icon v-else name="mdi-arrow-right" class="ml-2" size="1.5rem"></Icon>
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