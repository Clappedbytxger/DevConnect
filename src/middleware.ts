// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Diese Middleware kann für Authentifizierung oder andere logische Operationen genutzt werden
export function middleware(req: NextRequest) {
  // Beispiel: Überprüfen, ob der User eingeloggt ist
  const token = req.cookies.get('next-auth.session-token')
  
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))
  }

  return NextResponse.next() // Normal weiterfahren
}

export const config = {
  matcher: ['/dashboard', '/projects/upload'], // Hier kannst du Routen angeben, auf die die Middleware angewendet wird
}




