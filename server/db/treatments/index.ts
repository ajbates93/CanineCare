import { PrismaClient } from '@prisma/client'
import { CreateRecurringTreatment } from '~/types/treatments'

const prisma = new PrismaClient()

export const createRecurringTreatmentForDog = async (data: CreateRecurringTreatment) => {
  const treatment = await prisma.treatment.create(data)
}