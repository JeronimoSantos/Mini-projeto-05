//
'use client';

// Caminhos de Importações 
import { useEffect, useState } from "react";
import ComoAjudarCard, { ComoAjudarCardProps } from "./ComoAjudarCard";
import Header from "@/components/Header";

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
            <Header />
            <section>
                {comoajudar.map((acao, index) => (
                    <ComoAjudarCard key={index} {...acao}/>
                ))}
            </section>
        </main>
    );
}
