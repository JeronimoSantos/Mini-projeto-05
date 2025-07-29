//
export interface InovacoesCardProps {
    nome: string;
    descricao: string;
    beneficio: string;
}

//
export default function InovacoesCard({ nome, descricao, beneficio}: InovacoesCardProps) {
    return (
        <main className="flex items-center justify-between mt-9 ml-2.5 mr-2.5 p-20 rounded-md bg-slate-800 ">
            <section>
                <h2 className="">{nome}</h2>
            </section>
            <section className="flex flex-col gap-2 items-baseline justify-center text-center ">
                <p className=""><strong>Descrição:</strong>{descricao}</p>
                <p className=""><strong>Benefício:</strong>{beneficio}</p>
            </section>
        </main>
    )
}
