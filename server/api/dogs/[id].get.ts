import { getDog } from '~/server/db/dogs'

export default defineEventHandler(async (event) => {

  const eventId = getRouterParam(event, 'id')
  if (!eventId)
    throw createError({ statusCode: 400, statusMessage: 'ID is required' })

  const id = parseInt(eventId)
  if (!Number.isInteger(id))
    throw createError({ statusCode: 400, statusMessage: "ID should be an integer" })

  return await getDog(id)
})