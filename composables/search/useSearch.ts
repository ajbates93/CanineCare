import { ref } from 'vue'
import type { SearchResult } from '@/types'

// placeholder data of dogs matching type of Dog in prisma schema

export const useSearch = async (input: string) => {
  const results = ref<SearchResult[]>([])
  const { data } = await useFetch(`/api/dogs/search?search=${input}`)
  if (input.length !== 0 && input !== '') {
    console.log('input: ', input)
    // results.value = data.filter((dog) => {
    //   return dog.name.toLowerCase().includes(input.toLowerCase())
    // })
  }

  return { results }
}