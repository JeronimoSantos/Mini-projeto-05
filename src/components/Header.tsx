import Link from "next/link";
import Navegacao from "@/components/Navegacao";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center p-6 border-b border-b-emerald-900 mb-20 bg-blue-400 shadow-xl">
            <Link href="/" target="_self" title="Página Principal"><h1 className="text-4xl bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">TecSustentável</h1></Link>
          <nav>
              <Navegacao />
          </nav>
        </header>
    );
};