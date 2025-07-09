//
'use client';

//
import { useEffect, useState } from "react";
import InovacoesCard, { InovacoesCardProps } from "./InovacoesCard";

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
        <section>
            <h1>Inovações</h1>
            {inovacoes.map((inovacao, index) => (
                <InovacoesCard key={index} {...inovacao}/>
            ))}
        </section>
    );
}
