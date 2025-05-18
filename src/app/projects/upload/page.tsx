'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function UploadProjectPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin")
    }
  }, [status, router])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [githubUrl, setGithubUrl] = useState("")
  const [imageUrl, setImageUrl] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [image, setImage] = useState<File | null>(null)

  const availableTags = ["Next.js", "AI", "Firebase", "Beginner", "Open Source"].join(",")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const formData = {
      title,
      description,
      imageUrl,
      githubUrl,
      tags: tags.map(tag => tag.trim()),
    }
  
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      if (res.ok) {
        router.push('/dashboard')
      } else {
        const error = await res.json()
        alert('Fehler beim Hochladen: ' + error.error)
      }
    } catch (err) {
      alert('Es ist ein Fehler aufgetreten.')
      console.error(err)
    }
  }

  if (status === "loading") {
    return <p>Lade...</p>
  }

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append("file", file)
  
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
  
    if (!res.ok) {
      throw new Error("Bild-Upload fehlgeschlagen")
    }
  
    const result = await res.json()
    return result.url // z. B. "/uploads/deinbild.jpg"
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
  
    const formData = new FormData()
    formData.append('file', file)
  
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
  
      if (res.ok) {
        const data = await res.json()
        setImageUrl(data.url) // ✅ die URL kommt vom Server
        setImage(file)        // optional, falls du das File noch brauchst
      } else {
        const error = await res.json()
        alert('Fehler beim Hochladen: ' + error.error)
      }
    } catch (err) {
      console.error('Upload-Fehler:', err)
      alert('Fehler beim Bild-Upload.')
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Neues Projekt hochladen</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Titel</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Beschreibung</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block font-medium">GitHub-Link</label>
          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Tags</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {availableTags.split(",").map((tag) => (
              <label key={tag} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={tag}
                  checked={tags.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setTags([...tags, tag])
                    } else {
                      setTags(tags.filter((t) => t !== tag))
                    }
                  }}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-medium">Bild hochladen</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Projekt speichern
        </button>
      </form>
    </div>
  )
}
