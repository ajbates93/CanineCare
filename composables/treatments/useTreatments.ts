import { CreateRecurringTreatment } from "types/treatments"

export const useTreatments = () => {
  const addRecurringTreatmentForDog = async (treatment: CreateRecurringTreatment) => {
    const { data, error, status } = await useFetch('/api/treatments?type=recurring', {
      method: 'POST',
      body: JSON.stringify({
        ...treatment
      })
    })
    return { data, error, status }
  }

  return { addRecurringTreatmentForDog }
}