import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <section className="bg-gradient-to-b from-navy-700 to-ink px-5 py-16 text-center sm:py-24" aria-labelledby="final-titulo">
      <div className="mx-auto max-w-3xl">
        <h2 id="final-titulo" className="text-3xl font-black leading-tight text-white sm:text-5xl">
          Pare de perder tempo procurando projetos e fazendo cálculos manualmente.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-steel-300">
          Tenha o Studio do Serralheiro e leve seus projetos e ferramentas de cálculo com você.
        </p>
        <p className="mt-6 text-2xl font-black text-white">
          8x de R$ 5,58 <span className="font-bold text-steel-300">ou R$ 37 à vista</span>
        </p>
        <CtaButton size="xl" className="mt-8 w-full sm:w-auto">
          QUERO ACESSAR AGORA
        </CtaButton>
      </div>
    </section>
  );
}
