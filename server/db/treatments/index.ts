import { PrismaClient } from '@prisma/client'
import { CreateTreatment } from '~/types/dogs'

const prisma = new PrismaClient()

export const createTreatmentForDog = async (data: CreateTreatment) => {
  const createTreatment = {
    type: data.treatmentType,
    date: data.date,
    dog: data.dog,
  }
  // const treatment = await prisma.treatment.create(createTreatment)
}