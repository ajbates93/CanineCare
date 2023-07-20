import { getUsers } from '~/server/db/users'

export default defineEventHandler(async () => {
  return await getUsers()
})