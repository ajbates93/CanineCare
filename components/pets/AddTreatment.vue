<script setup lang="ts">
import { CreateTreatment } from '~/types/treatments'
import { useTreatments } from '@/composables/treatments/useTreatments'

const router = useRouter()
const { addTreatmentForDog } = useTreatments()
const { id } = defineProps<{
  id: number
}>()

const loading = ref(false)
const newTreatment = reactive<CreateTreatment>({
  name: '',
  dogId: id,
  interval: 0,
  intervalValue: 0, 
  dateAdministered: new Date(),
})

const handleAddNewTreatmentClick = async () => {
  loading.value = true
  const { data, error, status } = await addTreatmentForDog(newTreatment)  
  loading.value = false
}
</script>

<template>
  <UiFormContainer>
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Treatment Type</label>
      <select v-model="newTreatment.name">
        <option>Flea</option>
        <option>Tick</option>
        <option>Wormer</option>
      </select>
    </div>
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Date Administered</label>
      <input type="date" v-model="newTreatment.dateAdministered" />
    </div>
    <div class="mb-5">
      <div class="flex items-center gap-1">
        <span>Due every</span>
        <input v-model="newTreatment.intervalValue" type="number" />
        <select v-model="newTreatment.interval">
          <option value="0">day(s)</option>
          <option value="1">week(s)</option>
          <option value="2">month(s)</option>
          <option value="3">year(s)</option>
        </select>
      </div>
    </div>
    <div class="actions flex items-center gap-2">
      <UiButtonAdd @click="handleAddNewTreatmentClick" :loading="loading">Confirm</UiButtonAdd>
    </div>
  </UiFormContainer>
</template>
