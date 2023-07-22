import { getDogs } from '~/server/db/dogs'

export default defineEventHandler(async () => {
  return await getDogs()
})
