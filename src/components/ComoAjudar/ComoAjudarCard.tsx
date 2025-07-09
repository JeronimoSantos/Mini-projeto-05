//
export interface ComoAjudarCardProps {
    acao: string;
    plataforma: string
}

//
export default function ComoAjudarCard({ acao, plataforma }: ComoAjudarCardProps) {
    return (
        <section>
            <p><strong>Ação:</strong>{acao}</p>
            <p><strong>Plataforma:</strong>{plataforma}</p>
        </section>
    )
}
