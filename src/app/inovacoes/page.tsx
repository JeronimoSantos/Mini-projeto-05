//
'use client';

//
import { useEffect, useState } from "react";
import InovacoesCard, { InovacoesCardProps } from "./InovacoesCard";
import Navegacao from "@/components/Navegacao";
import Link from "next/link";

//
export default function Inovacoes() {
    const [inovacoes, setInovacoes] = useState<InovacoesCardProps[]>([]);

    useEffect(() => {
// Simulando uma chamada de API para buscar inovações
        const fetchInovacoes = async () => {
            try {
                const response = await fetch('https://mini-projeto-04.vercel.app/api/inovacoesSustentaveis');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setInovacoes(data);
            } catch (error) {
                console.error('Error fetching inovações:', error);
            }
        };

// Chamada da função para buscar inovações
        fetchInovacoes();
    }, []);

// Renderizando a lista de inovações
    return (
        <main className="min-h-screen bg-blue-900">
            <header className="flex flex-row justify-between items-center p-6 ">
                <Link href="/" target="_self" title="Página Principal"><h1 className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">TecSustentável</h1></Link>
                
                <nav>
                    <Navegacao />
                </nav>
            </header>

            <section className="">
                {inovacoes.map((inovacao, index) => (
                    <InovacoesCard key={index} {...inovacao}/>
                ))}
            </section>
        </main>
    );
}
