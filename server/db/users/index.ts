import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

export const getUser = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}

export const createUser = async (data: User) => {
  const user = await prisma.user.create({
    data
  })
  return user
}