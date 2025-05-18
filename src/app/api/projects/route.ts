import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/src/app/api/auth/[...nextauth]/route"
import { getCurrentUser } from "@/lib/auth"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await getCurrentUser()

  console.log("SESSION", session)

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 })
  }

  const { title, description, githubUrl, imageUrl, tags } = await req.json()

  try {

    let user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      console.error("User nicht gefunden");
      user = await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name || '',  // Füge den Namen hinzu, wenn vorhanden
          image: session.user.image || '', // Optional, falls du das Profilbild speicherst
        },
      });
      //return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 });
    }
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        githubUrl,
        imageUrl,
        tags: tags.join(","),
        author: {
          connect: {
            email: session.user.email,
          },
        },
      },
    })

    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    console.error("Fehler beim Erstellen:", error)
    return NextResponse.json({ error: "Fehler beim Erstellen" }, { status: 500 })
  }
}

export async function GET() {
  // Session mit getServerSession abrufen
  const session = await getServerSession(authOptions);

  // Wenn keine Session oder keine E-Mail im User vorhanden ist, Fehler zurückgeben
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 });
  }

  try {
    // Projekte des aktuellen Benutzers abfragen
    const userProjects = await prisma.project.findMany({
      where: {
        author: {
          email: session.user.email,
        },
      },
    });

    // Erfolgreiche Antwort mit den Projekten des Benutzers
    return NextResponse.json({ projects: userProjects }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim Abrufen der Projekte:", error);
    return NextResponse.json({ error: "Fehler beim Abrufen der Projekte" }, { status: 500 });
  }
}


