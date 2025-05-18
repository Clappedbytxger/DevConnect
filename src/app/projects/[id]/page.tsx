import { notFound } from 'next/navigation'
import LikeButton from '@/components/LikeButton'
import { getServerSession } from "next-auth"
import prisma from "@/lib/prisma"
import authOptions  from "@/lib/auth"


const tagColors: { [key: string]: string } = {
    "Next.js": "bg-blue-500 text-white",
    "Firebase": "bg-orange-500 text-white",
    "Beginner": "bg-green-500 text-white",
    "AI": "bg-indigo-500 text-white",
    "Machine Learning": "bg-purple-500 text-white",
    "Open Source": "bg-red-500 text-white",
  }
/*const projectDetails: {
  [key: string]: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    githubUrl: string;
  };
} = {
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
};*/

export default async function ProjectDetail({ params }: { params: { id: string } }) {

  const session = await getServerSession(authOptions)

  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: {
      likes: true
    }
  }) 

  if (!project) {
    return notFound()
  }

  const liked = !!project?.likes.find((like) => like.userId === session?.user?.id)
  const tags = project.tags?.split(',').map(tag => tag.trim());

  //const project = projectDetails[id as keyof typeof projectDetails];

  

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover mt-4" />
      <p>{project.description}</p>
      <LikeButton projectId={project?.id} liked={liked} />
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-sm px-3 py-1 rounded-full ${tagColors[tag] || "bg-gray-300 text-gray-800"}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={project.githubUrl} className="mt-4 text-blue-500">Zum GitHub Repo</a>
    </div>
  )
}