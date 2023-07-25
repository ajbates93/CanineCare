import { getDogsBySearch } from '~/server/db/dogs'

export default defineEventHandler(async (event) => {
  const { search } = getQuery(event)

  const results = await getDogsBySearch(search?.toString() || '') 
  return results
})