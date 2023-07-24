import { createDog } from '~/server/db/dogs'
import type { CreateDog } from '~/types/dogs'

export default defineEventHandler(async (event) => {
  const { name, age, breed, gender, notes } = await readBody(event) 
  const newDog: CreateDog = {
    name, age, breed, gender, notes
  }
  return createDog(newDog)
})