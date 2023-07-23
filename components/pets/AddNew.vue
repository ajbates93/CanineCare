<script setup lang="ts">
import { reactive } from 'vue'
const newPet = reactive({
  name: '',
  age: 0,
  breed: '',
  gender: '',
  notes: ''
})
</script>

<template>
  <div class="bg-gray-100 border border-gray-200 rounded-xl p-5 my-10">
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Name</label>
      <input id="name" class="border border-gray-200 rounded-lg py-1.5 px-2 min-w-[400px]" v-model="newPet.name" placeholder="e.g. Count Sniffula" /> 
    </div>
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Age</label>
      <input type="number" id="name" class="border border-gray-200 rounded-lg py-1.5 px-2 min-w-[40px]" v-model="newPet.age" placeholder="e.g. 4" /> 
    </div>
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Breed</label>
      <input id="name" class="border border-gray-200 rounded-lg py-1.5 px-2 min-w-[400px]" v-model="newPet.breed" placeholder="e.g. German Short-haired Pointer" /> 
    </div>
    <div class="mb-5">
      <label for="name" class="w-[160px] inline-block">Gender</label>
      <select id="gender" v-model="newPet.gender" class="border border-gray-200 rounded-lg py-1.5 px-2 min-w-[400px]">
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <div class="mb-5 flex items-start">
      <label for="name" class="w-[160px] inline-block">Additional Notes</label>
      <textarea id="name" class="border min-h-[100px] border-gray-200 rounded-lg py-1.5 px-2 min-w-[400px]" v-model="newPet.notes" placeholder="e.g. Lactose intollerant, likes to counter-surf, loves belly scritches..." /> 
    </div>
  </div>
</template>
