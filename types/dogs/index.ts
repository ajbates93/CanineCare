export type Dog = {
  id: number
  name: string
  age: number
  breed: string
  gender: string
  createdAt: Date
  updatedAt: Date
  treatments: []
  vetVisits: []
  documents: []
  weighIns: []
  notes: string
}
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