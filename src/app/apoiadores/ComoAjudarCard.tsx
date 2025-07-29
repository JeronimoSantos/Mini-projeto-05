import Link from "next/link";

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
            <Link href={plataforma} target="_blank" title={plataforma}><strong>Plataforma:</strong>{plataforma}</Link>
        </section>
    )
}
