import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='my-8'>
    <footer className="bg-[#130f18] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Spalte 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Entdecken</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/projects">Projekte</Link></li>
            <li><Link href="/ideas">Ideen</Link></li>
            <li><Link href="/community">Community</Link></li>
            <li><Link href="/resources">Ressourcen</Link></li>
          </ul>
        </div>

        {/* Spalte 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Plattform</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/collaboration">Zusammenarbeit</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Spalte 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Unternehmen</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about">Über uns</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
            <li><Link href="/legal">Impressum</Link></li>
          </ul>
        </div>

        {/* Spalte 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Rechtliches</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/privacy">Datenschutz</Link></li>
            <li><Link href="/terms">AGB</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-lg mb-2">Bleib auf dem Laufenden</h3>
          <p className="text-sm text-gray-400 mb-4">
            Erhalte Updates zu neuen Features und Community-Projekten.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Deine E-Mail"
              className="flex-1 px-4 py-2 bg-[#2b2536] text-white rounded-md outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-2 rounded-md font-semibold text-white text-sm hover:opacity-90 transition"
            >
              Abonnieren
            </button>
          </form>
        </div>
      </div>

      {/* Untere Zeile */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="DevConnect Logo" width={28} height={28} />
          <span>© 2025 DevConnect. Alle Rechte vorbehalten.</span>
        </div>
        <div className="mt-4 sm:mt-0">
          <span className="text-xs">Powered by Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
    </div>
  )
}
