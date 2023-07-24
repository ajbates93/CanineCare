<script setup lang="ts">
const props = defineProps<{
  edit?: boolean
}>()

const route = useRoute()

const { data: pet } = await useFetch(`/api/dogs/${route.params.id}`)

</script>

<template>
  <div>
    <div v-if="pet" class="container w-full text-lg">
      <UiTitleBar :title="pet.name" />
      <UiFormContainer>
        <div class="mb-5">
          {{ pet.name }}
        </div>
        <div class="mb-5">
          {{ pet.age }}
        </div>
        <div class="mb-5">
          {{ pet.breed }}
        </div>
        <div class="mb-5">
          {{ pet.gender}}
        </div>
        <div class="mb-5">
          {{ pet.notes }}
        </div>
      </UiFormContainer>
    </div>
  </div>
</template>
