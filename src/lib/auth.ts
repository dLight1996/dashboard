import { compare } from 'bcryptjs'
import { prisma } from './prisma'

export async function verifyCredentials(username: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { username },
  })

  if (!user) {
    return null
  }

  const isValid = await compare(password, user.password)

  if (!isValid) {
    return null
  }

  return {
    id: user.id,
    name: user.name || user.username,
  }
}
