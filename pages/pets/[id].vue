<script setup lang="ts">
import type { Dog } from '~/types/dogs'
const route = useRoute()
const edit = useState('edit', () => false)
const showAddTreatment = useState('showAddTreatment', () => false)
const { data: pet } = await useFetch<Dog>(`/api/dogs/${route.params.id}`)
</script>

<template>
  <div>
    <div v-if="pet" class="container w-full text-lg">
      <UiTitleBar :title="pet.name" />
      <UiPanel class="mb-0">
        Edit Mode: {{ edit }}
        <div class="border-b my-3 pb-3 font-bold">{{ pet.breed }}</div>
        <div class="italic text-gray-600 mb-3">A few things to know about {{ pet.name }}...</div>
        <div class="mb-3 pb-3 border-b">{{ pet.notes }}</div>
        <PetsAddTreatmentRecurring :id="pet.id" v-if="showAddTreatment" />
        <div class="actions flex items-center gap-2">
          <UiButtonEdit @click="edit = !edit">Edit</UiButtonEdit>
          <UiButtonEdit @click="showAddTreatment = !showAddTreatment">Add Treatment</UiButtonEdit>
        </div>
      </UiPanel>
    </div>
  </div>
</template>
