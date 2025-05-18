import Link from "next/link"
import Image from "next/image"
import LikeButton from '@/components/LikeButton'

const tagColors: { [key: string]: string } = {
    "Next.js": "bg-blue-500 text-white",
    "React": "bg-blue-500 text-white",
    "Firebase": "bg-yellow-400 text-black",
    "Node.js": "bg-green-500 text-white",
    "AI": "bg-purple-500 text-white",
    "Machine Learning": "bg-purple-500 text-white",
    "Backend": "bg-orange-500 text-white",
    "API": "bg-orange-500 text-white",
    "Beginner": "bg-gray-500 text-white",
    "Open Source": "bg-gray-400 text-black",
  }

type Props = {
  title: string
  description: string
  githubUrl: string
  imageUrl: string
  tags: string[]
  projectId: string
  isLikedByUser?: boolean
}



export default function ProjectCard({ title, description, githubUrl, imageUrl,tags,projectId, 
  isLikedByUser }: Props) {
  return (
      <div className="border rounded-2xl shadow hover:shadow-md transition overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">
            <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {title}
            </Link>
          </h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <Link href={githubUrl} target="_blank" className="text-blue-600 hover:underline">
            Zum Projekt →
          </Link>
          <div className="mt-2">
  <LikeButton projectId={projectId} isLikedByUser={isLikedByUser} />
</div>
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
        </div>
      </div>
    )
  }