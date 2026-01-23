//
'use client';

//
import { useEffect, useState } from "react";
import StartupsCard, { StartupsCardProps } from "@/app/startups/StartupsCard";
import Header from "@/components/Header";


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
            <Header />
            <section>
                <h1>Startups</h1>
                {startups.map((startup, index) => (
                    <StartupsCard key={index} {...startup} />
                ))}
            </section>
        </main>
    );
}
