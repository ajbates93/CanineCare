export const useSearch = async (input: string) => {
  const { data } = await useFetch(`/api/dogs/search?name=${input}`)

  return { data }
}