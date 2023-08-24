import { createTreatmentForDog } from '~/server/db/treatments'
import type { CreateRecurringTreatment } from '~/types/treatments'

export default defineEventHandler(async (event) => {
  const { type } = getQuery(event)
  if (type) {
    const { name, dogId, interval, intervalValue, dateAdministered } = await readBody(event)
    const data: CreateRecurringTreatment = {
      name, dogId, interval, intervalValue, dateAdministered
    }
    console.log('from API: ', data)
    // return await createTreatmentForDog(data)
  }
})