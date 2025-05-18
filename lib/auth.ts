import { getServerSession } from "next-auth"
import { authOptions } from "@/src/app/api/auth/[...nextauth]/route"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  console.log("getServerSession result", session)
  return await getServerSession(authOptions)
}

export default authOptions
