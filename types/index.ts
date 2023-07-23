export type SearchResult = {
  id: number
  name: string
  type: string
  age: number
  breed: string
}

export type CreateDog = {
  name: string
  age: number
  breed: string
  gender: string
  notes: string
}