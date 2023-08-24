import { getDogs, getDogsBySearch } from '~/server/db/dogs'

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event)
  if (name)
    return await getDogsBySearch(name.toString())
  return await getDogs()
})
