import { getDog } from '~/server/db/dogs'

export default defineEventHandler(async (event) => {
  if (!event.context.params)
    return
  const id = parseInt(event.context.params.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    })
  }
  console.log(id)
  return await getDog(id)
})