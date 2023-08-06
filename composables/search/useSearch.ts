export const useSearch = async (input: string) => {
  const { data } = await useFetch(`/api/dogs/search?search=${input}`)

  return { data }
}