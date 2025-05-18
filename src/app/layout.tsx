'use client'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { usePathname } from 'next/navigation'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const isHome = pathname === '/'
  return (
    <html lang="de">
      <head>
        <title>DevConnect</title>
        <meta name="description" content="Developer project sharing platform" />
      </head>
      <body className={inter.className}>
      <SessionProvider>
      <Navbar />
      
      {isHome ? (
            children
          ) : (
            <main className="max-w-5xl mx-auto px-4 flex flex-col py-8">
              {children}
            </main>
          )}
          <Footer></Footer>
        </SessionProvider>
        
      </body>
    </html>
  )
}
