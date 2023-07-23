import { PrismaClient, Dog } from "@prisma/client"
import type { CreateDog } from '@/types'

const prisma = new PrismaClient()

export const getDogs = async () => {
  const dogs = await prisma.dog.findMany()
  return dogs
}

export const getDog = async (id: number) => {
  const dog = await prisma.dog.findUnique({
    where: { id }
  })
  return dog
}

export const createDog = async (data: CreateDog) => {
  const dog = await prisma.dog.create({
    data
  })
  return dog
}

export const deleteDog = async (id: number) => {
  const dog = await prisma.dog.delete({
    where: { id }
  })
  return dog
}