import { PrismaClient } from '@prisma/client'
import { CreateRecurringTreatment } from '~/types/treatments'

const prisma = new PrismaClient()

export const createRecurringTreatmentForDog = async (data: CreateRecurringTreatment) => {
  const recurringTreatment = {
    type: data.name,
    interval: data.interval,
    intervalValue: data.intervalValue,
    dogId: data.dogId,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  await prisma.recurringTreatment.create(recurringTreatment)

}