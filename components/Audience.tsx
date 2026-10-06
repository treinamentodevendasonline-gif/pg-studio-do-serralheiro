import { CtaButton } from "./CtaButton";

const materials = ["Metalon", "Alumínio", "Portões", "Coberturas", "Automação", "Trailers"];

export function Audience() {
  return (
    <section className="bg-white px-5 py-16 text-ink sm:py-24" aria-labelledby="publico-titulo">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 id="publico-titulo" className="text-3xl font-black leading-tight sm:text-4xl">
            Feito para quem trabalha com serralheria
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
            <p>
              Se você é serralheiro, fabricante ou profissional que vive de metalon, alumínio, portões e coberturas, sabe como é: cliente pedindo ideia, orçamento para fechar e conta para fazer, tudo ao mesmo tempo.
            </p>
            <p>
              O Studio do Serralheiro foi criado para esse dia a dia. Você abre o aplicativo, encontra o projeto, usa a calculadora de cortes, monta o orçamento e segue para a produção, tudo pelo celular.
            </p>
            <p className="font-bold text-ink">
              Menos tempo perdido procurando referência. Mais tempo fabricando e fechando serviço.
            </p>
          </div>
          <CtaButton size="lg" className="mt-8 w-full sm:w-auto">
            QUERO ACESSAR O STUDIO DO SERRALHEIRO
          </CtaButton>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-navy to-ink p-6 shadow-2xl sm:p-8">
          <p className="text-xl font-extrabold text-white">Para quem trabalha com</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {materials.map((m) => (
              <li
                key={m}
                className="rounded-full border border-steel-300/30 bg-white/10 px-5 py-2.5 text-base font-bold text-steel-100"
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-steel-300">
            Serralheiros, fabricantes e profissionais autônomos que querem ter projetos e ferramentas de cálculo sempre no bolso.
          </p>
        </div>
      </div>
    </section>
  );
}
