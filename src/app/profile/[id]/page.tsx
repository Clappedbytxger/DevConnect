import { getServerSession } from "next-auth"
import authOptions  from "@/lib/auth" // ggf. Pfad anpassen
import prisma from "@/lib/prisma" // ggf. Pfad anpassen
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

type ProfilePageProps = {
  params: { id: string }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  console.log("🔍 ProfilePage loaded with params:", params)

  // 1. Sicherstellen, dass params.id vorhanden ist
  const userId = params?.id
  if (!userId) {
    console.error("❌ Kein User-ID in Params")
    redirect("/") // oder Fehler anzeigen
  }

  // 2. Session holen (z.B. für personalisierte Ansicht)
  const session = await getServerSession(authOptions)
  console.log("🧑 Session:", session)

  // 3. User aus DB holen
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      projects: true,
      likes: {
        include: {
          project: true,
        },
      },
    },
  })

  if (!user) {
    console.error("❌ Kein Benutzer gefunden mit ID:", userId)
    return <div className="text-white p-4">Benutzer nicht gefunden.</div>
  }

  // 4. Ausgabe
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        <Image
          src={user.image ?? "/default-avatar.png"}
          alt="Profilbild"
          width={100}
          height={100}
          className="rounded-full border-2 border-white shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-white">{user.name ?? "Anonymer Nutzer"}</h1>
          <p className="text-gray-400">{user.email}</p>
          <div className="mt-2 text-sm text-gray-500">
            <span>{user.projects.length} Projekte</span> ·{" "}
            <span>{user.likes.length} Likes vergeben</span>
          </div>
        </div>
      </div>

      {/* Eigene Projekte */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">📦 Eigene Projekte</h2>
        {user.projects.length === 0 ? (
          <p className="text-gray-500">Du hast noch keine Projekte erstellt.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.projects.map((project) => (
              <div key={project.id} className="bg-zinc-900 p-4 rounded-xl shadow-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-md mb-3 object-cover h-40 w-full"
                />
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3">{project.description}</p>
                <div className="mt-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Projekt anzeigen →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Gelikte Projekte */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">❤️ Gelikte Projekte</h2>
        {user.likes.length === 0 ? (
          <p className="text-gray-500">Du hast noch keine Projekte geliked.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.likes.map(({ project }) => (
              <div key={project.id} className="bg-zinc-900 p-4 rounded-xl shadow-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-md mb-3 object-cover h-40 w-full"
                />
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3">{project.description}</p>
                <div className="mt-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Projekt anzeigen →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

