<script setup lang="ts">

</script>
<template>
  <div class="bg-white">
    <header class="bg-[#fbfafa] border-b border-b-[#ebeaea] flex items-stretch w-full">
      <div class="max-w-[300px] w-full p-6 border-r border-r-[#ebeaea]">
        <div class="text-2xl text-slate-900 flex items-center"><Icon class="text-[#5874F4]" name="mdi-paw" size="2em"></Icon><span class="ml-3 font-bold">CanineCare</span></div>
      </div>
    </header>
    <div class="flex items-stretch">
      <aside class="bg-[#fbfafa] h-screen max-w-[300px] p-6 border-r border-r-[#ebeaea] w-full">
        <div>Some links go here...</div>
      </aside>
      <main role="main" class="p-10">
        <slot />
      </main>
    </div>
  </div>
</template>
