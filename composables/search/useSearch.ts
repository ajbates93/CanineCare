import { ref } from 'vue'
import type { SearchResult } from '@/types'

// placeholder data of dogs matching type of Dog in prisma schema

export const useSearch = async (input: string) => {
  const { data } = await useFetch(`/api/dogs/search?search=${input}`)

  return { data }
}