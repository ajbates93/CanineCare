<script setup lang="ts">
const { data: dogs, pending } = await useFetch('/api/dogs')
</script>
<template>
  <div class="container w-full">
    <UiTitleBar title="Your Pets">
      <NuxtLink to="/pets/add-pet">
        <UiButtonAdd class="text-lg">Add Pet</UiButtonAdd>
      </NuxtLink>
    </UiTitleBar>
    <div v-if="dogs && dogs.length > 0" class="text-lg grid grid-cols-2 gap-10">
      <UiPanel v-for="dog in dogs" class="mb-0">
        <div class="font-bold text-2xl text-custPrimary mb-3">{{ dog.name }}</div>
        <div class="border-b my-3 pb-3 font-bold">{{ dog.breed }}</div>
        <div class="italic text-gray-600 mb-3">A few things to know about {{ dog.name }}...</div>
        <div class="mb-3 pb-3 border-b">{{ dog.notes }}</div>
        <div class="italic text-gray-600 mb-3">Your Actions</div>
        <div class="actions flex items-center gap-2">
          <NuxtLink :to="`/pets/${dog.id}`"><UiButtonLink>View</UiButtonLink></NuxtLink>
          <NuxtLink :to="`/pets/${dog.id}/edit`"><UiButtonLink>Edit</UiButtonLink></NuxtLink>
        </div>
      </UiPanel>
    </div>
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
