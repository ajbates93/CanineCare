<script setup lang="ts">
const year = new Date().getFullYear()

</script>
<template>
  <div class="py-4 px-10 mx-auto text-center flex justify-between items-center
    bg-[#fbfafa] border-t text-custPrimary font-bold text-xl">
    <span>Footer goes here</span>
    <span>&copy; {{ year }}</span>
  </div>
</template>
