import prisma  from "lib/prisma"
import { getServerSession } from 'next-auth'
import { authOptions } from 'src/app/api/auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  const { projectId } = await req.json()

  if (!session?.user?.email || !projectId) {
    return NextResponse.json({ liked: false }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return NextResponse.json({ liked: false }, { status: 404 })
  }

  const like = await prisma.like.findUnique({
    where: {
      userId_projectId: {
        userId: user.id,
        projectId,
      }
    }
  })

  return NextResponse.json({ liked: !!like })
}
