// app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
      <><div className="fixed inset-0 -z-10 bg-animated-gradient" /><main className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="w-1/2 h-64 -z-9 absolute top-64 -right-1/4 opacity-50 animate-spin-slow filter blur-[120px]"><div className="relative"><div className="rounded-full h-60 w-full bg-blue-600"></div><div className="absolute bottom-24 -left-24 rounded-full h-60 w-full bg-blue-700"></div><div className="absolute top-24 left-24 rounded-full h-60 w-full bg-purple-600"></div></div></div>
          <div className="w-1/2 h-64 absolute -z-9 top-64 -left-1/4 opacity-50 animate-spin-slow filter blur-[120px]"><div className="relative"><div className="rounded-full h-60 w-full bg-purple-800"></div><div className="absolute bottom-24 -left-24 rounded-full h-60 w-full bg-red-800"></div><div className="absolute top-24 left-24 rounded-full h-60 w-full bg-purple-600"></div></div></div>
          <span className="text-sm bg-purple-800 px-3 py-1 rounded-full font-medium mb-6 inline-block">
            🚀 Neues Projekt? Jetzt hochladen!
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            DevConnect – Wo Entwickler sich treffen
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Finde spannende Projekte, lade deine eigenen hoch und connecte dich mit Gleichgesinnten oder Unternehmen, die nach Talenten wie dir suchen.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            Starte jetzt
          </button>
        </div>
      </section>

      {/* Developer Showcase */}
      <section className="bg-[#111827] py-20 px-6 rounded-t-xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Entwickler bauen echte Dinge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Beispiel-Projektkarten */}
            <div className="bg-[#1f2937] p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📝 TaskHub</h3>
              <p className="text-gray-400 mt-2">Ein All-in-One Taskmanager mit Kanban-Board und Echtzeit-Collaboration.</p>
              <span className="text-sm mt-4 inline-block text-green-400">Tech: Next.js, Firebase</span>
            </div>
            <div className="bg-[#1f2937] p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">🤖 AI Helper</h3>
              <p className="text-gray-400 mt-2">Ein smarter Chatbot, der Entwicklern bei der Codeanalyse hilft.</p>
              <span className="text-sm mt-4 inline-block text-blue-400">Tech: GPT-4, Langchain</span>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </section>

      {/* Firmen Logos */}
      <section className="py-16 bg-[#0f172a] text-center">
        <div className="mt-28 mb-28">
          <div className="container px-4 md:px-6 mx-auto pb-16 flex flex-col items-center relative">
            <div className="text-theme-neutral-500 mb-8 text-center"><h3 className="text-xl">Unterstützt von Firmen weltweit:</h3></div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-0.5 w-full rounded-xl overflow-hidden">
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/Meta-Logo.png" alt="Meta" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/aws-white.png" alt="AWS" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/apple-white.png" alt="apple" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/google-white.png" alt="google" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/vercel-white.webp" alt="vercel" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/stripe-white.png" alt="stripe" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/docker-white.png" alt="docker" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-center bg-theme-neutral-600 bg-opacity-20 relative">
                <div className="relative w-[120px] h-[40px]">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0">
                    <img src="/images/nvidia-white.png" alt="docker" className="opacity-40 absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-center m-auto p-0 border-[none] inset-0" sizes="100vw" />
                  </span>
                </div>
              </div>

              {/* More logos */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-[#111827] to-[#0f0c29] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Was Entwickler sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <p className="text-gray-300">„Dank DevConnect habe ich nicht nur Inspiration gefunden, sondern auch einen Co-Founder!“</p>
              <h4 className="mt-4 font-semibold">– Lina, Fullstack Developer</h4>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <p className="text-gray-300">„Ich wurde von einem Startup entdeckt, nachdem sie mein Projekt auf DevConnect gesehen haben.“</p>
              <h4 className="mt-4 font-semibold">– Jakob, AI Engineer</h4>
            </div>
            {/* Weitere Testimonials */}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center py-12 bg-[#0f0c29] rounded-b-xl">
        <h3 className="text-xl font-semibold mb-4">Bereit, dein nächstes Projekt zu teilen?</h3>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
          Projekt hochladen
        </button>
      </footer>
    </main></>
    
  );
}


