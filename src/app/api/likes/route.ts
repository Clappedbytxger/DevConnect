import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

// Projekt liken
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const { projectId } = await req.json();
  console.log("Empfangene projectId:", projectId);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 });
  }

  try {
    // User-ID holen
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 });
    }
    if (!projectId) {
      return NextResponse.json({ error: "Projekt-ID fehlt" }, { status: 400 });
    }

    // Like erstellen (falls noch nicht vorhanden)
    const like = await prisma.like.create({
      data: {
        userId: user.id,
        projectId,
      },
    });

    return NextResponse.json({ success: true, like });
  } catch (error) {
    console.error("Fehler beim Liken:", error);
    return NextResponse.json({ error: "Fehler beim Liken" }, { status: 500 });
  }
}

// Projekt unliken
export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  const { projectId } = await req.json();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 });
    }

    // Like löschen
    await prisma.like.deleteMany({
      where: {
        userId: user.id,
        projectId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Fehler beim Entfernen des Likes:", error);
    return NextResponse.json({ error: "Fehler beim Entfernen" }, { status: 500 });
  }
}

