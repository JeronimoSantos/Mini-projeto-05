import Link from "next/link";

export default function Nevagation() {
    return (
        <nav className="">
            <ul className="flex flex-row gap-2.5 text-2xl">
                <li className="hover:underline"><Link href="/inovacoes" target="_self" title="Inovações" className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">Inovações</Link></li>
                <li className="hover:underline"><Link href="/startups" target="_self" title="Startups" className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">Startups</Link></li>
                <li className="hover:underline"><Link href="/apoiadores" target="_self" title="Apoiadores" className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">Apoiadores</Link></li>
            </ul>
        </nav>
    )
};
