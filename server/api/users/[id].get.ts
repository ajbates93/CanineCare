import { getUser } from '~/server/db/users'

export default defineEventHandler(async (event) => {
  const id = parseInt(getQuery(event).id?.toString() || '')
  return await getUser(id)
})