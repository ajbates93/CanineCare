import { getDogsBySearch } from '~/server/db/dogs'

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event)

  console.log(name)
  const results = await getDogsBySearch(name?.toString() || '')
  return results
})