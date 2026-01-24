import Link from "next/link";

//
export interface StartupsCardProps {
    nome: string;
    atuacao: string;
    site: string;
};

// Este componente exibe informações sobre startups, incluindo seu nome, área de operação e site.
export default function StartupsCard({ nome, atuacao, site }: StartupsCardProps) {
    return (
        <section className="flex flex-col flex-wrap text-center gap-3 bg-blue-950 p-1.5 rounded-2xl m-auto mb-2.5 w-2xl">
            <h2 className="text-amber-900 text-3xl font-serif text-center">{nome}</h2>
            <p className="text-center"><strong>Atuação:</strong>{atuacao}</p>
            <Link href={site} target="_blank" title={site} className="hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 rounded-2xl w-fit mx-auto p-1"><strong>Site:</strong>{site}</Link>
        </section>
    );
};
