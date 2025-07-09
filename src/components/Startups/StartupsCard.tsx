//
export interface StartupsCardProps {
    nome: string;
    atuacao: string;
    site: string;
}

// Este componente exibe informações sobre startups, incluindo seu nome, área de operação e site.
export default function StartupsCard({ nome, atuacao, site }: StartupsCardProps) {
    return (
        <section>
            <h2>{nome}</h2>
            <p><strong>Atuação:</strong>{atuacao}</p>
            <a><strong>Site:</strong>{site}</a>
        </section>
    )
}
