//
import Inovacoes from "@/components/Inovacoes/Inovacoes";
import Startups from "@/components/Startups/Startups";
import ComoAjudar from "@/components/ComoAjudar/ComoAjudar";

//
export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bem-vindo ao Mini Projeto Sustentável</h1>
      
      <section>
        <h2>Inovações</h2>
        <Inovacoes />
      </section>

      <section>
        <h2>Startups</h2>
        <Startups />
      </section>

      <section>
        <h2>Como Ajudar</h2>
        <ComoAjudar />
      </section>
    </main>
  );
}
