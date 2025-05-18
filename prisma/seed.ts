import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Dummy-User anlegen (falls nicht schon vorhanden)
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
    },
  })

  // Statische Projekte aus projectDetails
  const projectDetails: { [key: string]: { id: string, title: string, description: string, imageUrl: string, tags: string[], githubUrl: string } } = {
  "todo-app": {
    id: "todo-app",
    title: "Todo-App",
    description: "Eine App zum Aufgaben-Verwalten mit Login und Darkmode",
    imageUrl: "/images/todo.jpg",
    tags: ["Next.js", "Firebase", "Beginner"],
    githubUrl: "https://github.com/beispiel/todo-app"
  },
  "ai-chatbot": {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description: "Ein Chatbot, der Fragen zu deinem Projekt beantwortet",
    imageUrl: "/images/chatbot.jpg",
    tags: ["AI", "Machine Learning", "Open Source"],
    githubUrl: "https://github.com/beispiel/ai-chatbot"
  },
}

  // Projekte in die Datenbank einfügen
  for (const projectKey in projectDetails) {
    const project = projectDetails[projectKey]

    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: {
        id: project.id,
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        githubUrl: project.githubUrl,
        tags: project.tags.join(','), // tags als CSV speichern
        authorId: user.id, // Den Dummy-User als Autor setzen
      },
    })

    console.log(`Projekt ${project.title} wurde in die DB eingefügt ✅`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
