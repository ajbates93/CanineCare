<script setup lang="ts">

</script>
<template>
  <div class="bg-white">
    <LayoutHeader /> 
    <div class="flex items-stretch w-full">
      <LayoutSidebar /> 
      <main role="main" class="p-10 flex-grow">
        <slot />
      </main>
    </div>
    <LayoutFooter />
  </div>
</template>
