export const useSearch = () => {
  const searchDogs = async (input: string) => {
    const { data } = await useFetch(`/api/dogs?name=${input}`)

    return { data }
  }

  return { searchDogs }
}