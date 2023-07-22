import { ref } from 'vue'
import type { SearchResult } from '@/types'

// placeholder data of dogs matching type of Dog in prisma schema

const data: SearchResult[] = [
  {
    id: 1,
    name: 'Buddy',
    type: 'Dog',
    age: 2,
    breed: 'Golden Retriever',
  },
  {
    id: 2,
    name: 'Molly',
    type: 'Dog',
    age: 4,
    breed: 'Labrador',
  },
  {
    id: 3,
    name: 'Bella',
    type: 'Dog',
    age: 1,
    breed: 'Poodle',
  },
  {
    id: 4,
    name: 'Charlie',
    type: 'Dog',
    age: 3,
    breed: 'Pug',
  },
  {
    id: 5,
    name: 'Lucy',
    type: 'Dog',
    age: 5,
    breed: 'Poodle',
  },
  {
    id: 6,
    name: 'Max',
    type: 'Dog',
    age: 2,
    breed: 'Labrador',
  },
  {
    id: 7,
    name: 'Daisy',
    type: 'Dog',
    age: 1,
    breed: 'Golden Retriever',
  },
]

export const useSearch = (input: string) => {
  const results = ref<SearchResult[]>([])

  if (input.length !== 0 && input !== '') {
    results.value = data.filter((dog) => {
      return dog.name.toLowerCase().includes(input.toLowerCase())
    })
  }

  return { results }
}