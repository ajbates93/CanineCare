<script setup lang="ts">
import { PrismaClient, Dog } from '@prisma/client';

const prisma = new PrismaClient();

const addDog = async () => {
  const now = new Date()
  const dog: Dog = {
    id: -1,
    name: 'Zafina',
    age: 5,
    breed: 'Crossbreed',
    gender: 'female',
    createdAt: now,
    updatedAt: now
  }
  await prisma.dog.create({
    data: dog
  }) 
}
</script>


<template>
  <div class="italic text-xl">Hello world</div>
  <div><button @click="addDog">Add Dog</button></div>
</template>
