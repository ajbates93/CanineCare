<script setup lang="ts">
const { data: dogs, pending } = await useFetch('/api/dogs')
</script>
<template>
  <div class="container w-full">
    <UiTitleBar title="Your Pets">
      <button class="flex items-center text-xl bg-green-500 text-white rounded-lg px-3 py-1">
        <span>Add Pet</span>
        <Icon name="mdi-plus" size="1.5rem" class="ml-3"></Icon>
      </button>
    </UiTitleBar>
    <UiPanel v-if="dogs.length > 0">
      <div v-for="dog in dogs">
        <div>{{ dog.name }}</div>
        <div>{{ dog.breed }}</div>
      </div>
    </UiPanel>
    <UiPanel v-else class="bg-gray-100 text-center text-lg">
      <div v-if="pending">Loading...</div>
      <div v-else class="flex flex-col gap-2">
        <div><Icon name="mdi-emoticon-sad-outline" size="3rem" class="text-gray-500"></Icon></div>
        <div class="font-bold">No pets found...</div>
        <div>Have you added your pets yet?</div>
        <NuxtLink to="/pets/add-pet" class="p-16 border-4 border-gray-300 inline-block mx-auto rounded-xl mt-5 group hover:border-gray-400 transition-all">
          <Icon name="mdi-plus" size="5rem" class="text-gray-300 group-hover:text-gray-400 transition-all"></Icon>
        </NuxtLink>
      </div>
    </UiPanel>
  </div>
</template>
