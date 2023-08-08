import { CreateTreatment } from "types/treatments"

export const useTreatments = () => {
  const addTreatmentForDog = async (treatment: CreateTreatment) => {
    const { data, error, status } = await useFetch('/api/treatments', {
      method: 'POST',
      body: JSON.stringify({
        ...treatment
      })
    })
    return { data, error, status }
  }

  return { addTreatmentForDog }
}