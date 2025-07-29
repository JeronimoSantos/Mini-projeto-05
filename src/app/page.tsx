//
import Navegacao from "@/components/Navegacao";
import Link from "next/link";

//
export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-teal-500">
          <header className="flex flex-row justify-between items-center p-6 ">
            <Link href="/" target="_self" title="Página Principal"><h1 className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">TecSustentável</h1></Link>
            
            <nav>
              <Navegacao />
            </nav>
          </header>

          <section>

          </section>
      </main>
    </>
  );
}
