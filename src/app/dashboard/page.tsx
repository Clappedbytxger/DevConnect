"use client";

import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
  tags: string;
  isLikedByUser?: boolean;
}




export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const session = await getSession();
        if (!session?.user?.email) {
          setError("Nicht eingeloggt");
          return;
        }

        const response = await fetch("/api/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Fehler beim Laden der Projekte");
        }

        const data = await response.json();
        setProjects(data.projects);
      } catch (error:unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unbekannter Fehler");
        }
        
        }finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (projectId: string) => {
    const confirmDelete = confirm("Möchtest du dieses Projekt wirklich löschen?");
    
    if (!confirmDelete) return;
  
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        // Aktuelle Seite neu laden oder Projektliste updaten
        setProjects((prev) => prev.filter((p) => p.id !== projectId)); // Nur bei useRouter in App Router
      } else {
        const data = await res.json();
        alert("Fehler beim Löschen: " + data.error);
      }
    } catch (error) {
      alert("Etwas ist schiefgelaufen.");
      console.error(error);
    }
  };

  return (
      
    
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Willkommen im Dashboard</h1>
        <p className="mb-4 text-gray-700">Hier kannst du deine Projekte verwalten.</p>

        <Link href="/projects/upload">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow">
            Projekt hochladen
          </button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold">Meine Projekte</h1>

      {loading && <p>Lädt...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 ? (
          <p>Du hast noch keine Projekte erstellt.</p>
        ) : (
          projects.map((project) => (
            <div key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  imageUrl={project.imageUrl}
                  tags={project.tags.split(",")}
                  projectId={project.id}
            isLikedByUser={project.isLikedByUser ?? false}
                  
                />
                <button
  onClick={() => handleDelete(project.id)}
  className="text-sm text-red-500 hover:underline mt-2"
>
  Löschen
</button>
              </Link>
              
            </div>
            
          ))
          
        )}        
      </div>
    </div>
  );
}
