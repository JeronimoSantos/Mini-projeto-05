//
'use client';

//
import { useEffect, useState } from "react";
import StartupsCard, { StartupsCardProps } from "@/app/startups/StartupsCard";
import Navegacao from "@/components/Navegacao";
import Link from "next/link";


// 
export default function Startups() {
    const [startups, setStartups] = useState<StartupsCardProps[]>([]);

    // 
    useEffect(() => {
// Simulando uma chamada de API para buscar startups ecológicas
        const fetchStartups = async () => {
            try {
                const response = await fetch('https://mini-projeto-04.vercel.app/api/startupsEcologicas');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStartups(data);
            } catch (error) {
                console.error('Error fetching startups:', error);
            }
        };

// Chamada da função para buscar startups
        fetchStartups();
    }, []);
    
// Renderizando a lista de startups
    return (
        <main>
            <header className="flex flex-row justify-between items-center p-6 ">
                <Link href="/" target="_self" title="Página Principal"><h1 className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-transparent bg-clip-text">TecSustentável</h1></Link>
                
                <nav>
                    <Navegacao />
                </nav>
            </header>

            <section>
                <h1>Startups</h1>
                {startups.map((startup, index) => (
                    <StartupsCard key={index} {...startup} />
                ))}
            </section>
        </main>
    );
}
