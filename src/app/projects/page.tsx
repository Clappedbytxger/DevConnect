import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Alle Projekte</h1>
        <p className="text-gray-700 my-2">Hier kannst du alle Projekte einsehen.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProjects.map((project, index) => (
          <div key={index}>
          <Link href={`/projects/${project.id}`}>
            
              <ProjectCard
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                imageUrl={project.imageUrl}
                tags={project.tags}
              />
            
          </Link>
        </div>
        ))}
      </div>
    </div>
  )
}


type Project = {
  id:string,
  title: string
  description: string
  githubUrl: string
  imageUrl: string
  tags: string[]
}

const dummyProjects: Project[] = [
  {
    id: "todo-app",
    title: "Todo-App",
    description: "Eine App zum Aufgaben-Verwalten mit Login und Darkmode",
    githubUrl: "https://github.com/beispiel/todo-app",
    imageUrl: "/images/todo.jpg",
    tags: ["Next.js", "Firebase", "Beginner"]
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description: "Ein Chatbot, der Fragen zu deinem Projekt beantwortet",
    githubUrl: "https://github.com/beispiel/ai-chatbot",
    imageUrl: "/images/chatbot.jpg",
    tags: ["AI", "NLP", "Open Source"]
  },
]