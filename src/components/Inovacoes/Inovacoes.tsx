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
            const response = await fetch('https://mini-projeto-04.vercel.app/api/inovacoesSustentaveis');
            const data = await response.json();
            setInovacoes(data);
        };

        fetchInovacoes();
    }, []);

    return (
        <section>
            <h1>Inovações</h1>
            {inovacoes.map((inovacao, index) => (
                <InovacoesCard key={index} {...inovacao}/>
            ))}
        </section>
    );
}
