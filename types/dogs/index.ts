export type CreateDog = {
  name: string
  age: number
  breed: string
  gender: string
  notes: string
}

export type CreateTreatment = {
  treatmentType: string,
  date: Date,
  dog: number
}