import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const alex = await prisma.user.upsert({
    where: { email: 'ajbates93@gmail.com'},
    update: {},
    create: {
      email: 'ajbates93@gmail.com',
      name: 'Alex Bates',
      password: 'Abcd1234!'
    }
  })
  const vicky = await prisma.user.upsert({
    where: { email: 'vlavelle@gmail.com'},
    update: {},
    create: {
      email: 'vlavelle@gmail.com',
      name: 'Vicky Lavelle',
      password: 'Abcd1234!'
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })