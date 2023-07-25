import { createTreatmentForDog } from '~/server/db/treatments'
import type { CreateTreatment } from '~/types/dogs'

export default defineEventHandler(async (event) => {
  const { treatmentType, date, dog } = await readBody(event)
  const data: CreateTreatment = {
    treatmentType, date, dog
  }
  console.log('from API: ', data)
  // return await createTreatmentForDog(data)
})