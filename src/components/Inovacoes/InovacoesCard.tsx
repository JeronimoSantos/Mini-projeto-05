//
export interface InovacoesCardProps {
    nome: string;
    descricao: string;
    beneficio: string;
}

//
export default function InovacoesCard({ nome, descricao, beneficio}: InovacoesCardProps) {
    return (
        <section style={{}}>
            <h2>{nome}</h2>
            <p><strong>Descrição:</strong>{descricao}</p>
            <p><strong>Benefício:</strong>{beneficio}</p>
        </section>
    )
}
