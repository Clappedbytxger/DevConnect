'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from "next/image"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="py-6 px-8 text-white flex justify-between items-center bg-opacity-0 text-xl sm:text-xl">
      {/* DevConnect Link immer ganz links */}
      <Image
    src="/images/logo.png"
    alt="Logo"
    width={40}
    height={40}
    className="rounded-full border border-gray-300 shadow-sm transition duration-300 hover:shadow-lg hover:ring-2 hover:ring-slate-300"
  />
      <Link href="/" className="font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all mx-4 text-xl">
        DevConnect
      </Link>
      {/* Links für Projekte, Ideen und Dashboard */}
      <div className="flex space-x-4 ml-auto text-xl font-medium">
        <Link className="hover:text-fuchsia-400 transition" href="/projects">Projekte</Link>
        <Link className="hover:text-fuchsia-400 transition" href="/ideas">Ideen</Link>
        <Link className="hover:text-fuchsia-400 transition" href="/dashboard">Dashboard</Link>
      </div>
      
      {/* Profilbild und Logout-Button werden nach rechts verschoben */}
      <div className="flex items-center space-x-4 ml-4">
        {!session ? (
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded text-xl">Login</Link>
        ) : (
          <>
            <div className="flex items-center space-x-2 text-xl">
              <Link
  href={`/profile/${session.user?.id}`} // Wichtig: Stelle sicher, dass `id` im Session-Objekt enthalten ist!
  className="flex items-center space-x-2 hover:underline"
>
              <img 
                src={session.user?.image || '/images/default-avatar.png'}
                alt={session.user?.name || 'User'}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-xl">{session.user?.name}</span>
              </Link>
            </div>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

