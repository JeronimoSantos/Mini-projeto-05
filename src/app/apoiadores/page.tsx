//
'use client';

//
import { useEffect, useState } from "react";
import ComoAjudarCard, { ComoAjudarCardProps } from "./ComoAjudarCard";
import Navegacao from "@/components/Navegacao";
import Link from "next/link";

//
export default function ComoAjudar() {
    const [comoajudar, setComoAjudar] = useState<ComoAjudarCardProps[]>([]);

    useEffect(() => {
        // Simulando uma chamada de API para buscar ações de como ajudar
        const fetchComoAjudar = async () => {
            try {
                const response = await fetch('https://mini-projeto-04.vercel.app/api/apoio');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setComoAjudar(data);
            } catch (error) {
                console.error('Error fetching como ajudar:', error);
            }
        };

// Chamada da função para buscar ações de como ajudar
        fetchComoAjudar();
    }, []);

// Renderizando a lista de ações de como ajudar
    return (
        <main>
            <header className="flex flex-row justify-between items-center p-6 ">
                <Link href="/" target="_self" title="Página Principal"><h1 className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">TecSustentável</h1></Link>
                
                <nav>
                    <Navegacao />
                </nav>
            </header>

            <section>
                {comoajudar.map((acao, index) => (
                    <ComoAjudarCard key={index} {...acao}/>
                ))}
            </section>
        </main>
    );
}
