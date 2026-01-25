// Caminhos de Importações 
import Header from "@/components/Header";
import Link from "next/link";

// Função principal da Pagina HomePage com os Estilos
export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-[url(/amazonia.webp)] bg-no-repeat bg-cover bg-center">
        <Header />

        <section className="bg-cyan-950 rounded-md border-black outline shadow-md w-5xl text-center p-3.5">
          <h1 className="text-8xl font-sans uppercase font-semibold text-blue-900 ">EcoTecnologia</h1>
          <h2 className="text-9xl font-sans uppercase font-semibold text-gray-900 ">é o agora</h2>
        </section>
      </main>
    </>
  );
};
