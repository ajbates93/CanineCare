<script setup lang="ts">
import type { CreateTreatment } from '~/types/dogs'
const router = useRouter()
const { id } = defineProps<{
  id: number
}>()

const loading = ref(false)
const newTreatment = reactive<CreateTreatment>({
  treatmentType: '',
  date: new Date(),
  dog: id
})

const handleAddNewTreatmentClick = async () => {
  loading.value = true
  const { data } = await useFetch('/api/treatments', {
    method: 'POST',
    body: JSON.stringify({
      ...newTreatment
    })
  }) 
  loading.value = false
}
</script>

<template>
  <UiFormContainer>
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Treatment Type</label>
      <select v-model="newTreatment.treatmentType">
        <option>Flea</option>
        <option>Tick</option>
        <option>Wormer</option>
      </select>
    </div>
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Date</label>
      <input type="date" v-model="newTreatment.date" />
    </div>
    <div class="actions flex items-center gap-2">
      <UiButtonAdd @click="handleAddNewTreatmentClick" :loading="loading">Confirm</UiButtonAdd>
    </div>
  </UiFormContainer>
</template>
