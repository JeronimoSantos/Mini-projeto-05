//
import Navegacao from "@/components/Navegacao";
import Link from "next/link";

//
export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-teal-500">
          <header className="flex flex-row justify-between items-center p-6 mb-20 bg-amber-400 ">
            <Link href="/" target="_self" title="Página Principal"><h1 className="text-4xl bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">TecSustentável</h1></Link>
            
            <nav>
              <Navegacao />
            </nav>
          </header>

          <section className="bg-cyan-950 rounded-md border-black outline shadow-md w-5xl text-center p-3.5">
            <h1 className="text-8xl font-sans uppercase font-semibold text-blue-900 ">EcoTecnologia</h1>
            <h2 className="text-9xl font-sans uppercase font-semibold text-gray-900 ">é o agora</h2>
          </section>
      </main>
    </>
  );
}
