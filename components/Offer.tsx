import { CtaButton } from "./CtaButton";
import { Icon } from "./Icon";

const included = [
  "Projetos de automação de portões",
  "Projetos de serralheria de alumínio",
  "300 projetos de móveis de metalon",
  "Projetos de coberturas residenciais",
  "20 projetos de portões residenciais",
  "Projeto ensinando como fazer trailer",
  "Calculadora automática de cortes",
  "Calculadora automática de orçamento",
];

export function Offer() {
  return (
    <section id="oferta" className="blueprint-grid bg-navy px-5 py-16 sm:py-24" aria-labelledby="oferta-titulo">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[2rem] bg-gradient-to-b from-[#7cb0ff] via-spark to-[#1d5fe0] p-[3px] shadow-[0_0_80px_-10px_rgba(47,123,255,0.65)]">
          <div className="relative rounded-[calc(2rem-3px)] bg-gradient-to-b from-[#0f2447] to-ink px-6 py-10 text-center sm:px-12 sm:py-14">
            <span className="rivet left-4 top-4" />
            <span className="rivet right-4 top-4" />
            <span className="rivet bottom-4 left-4" />
            <span className="rivet bottom-4 right-4" />

            <h2 id="oferta-titulo" className="text-xl font-black tracking-wide text-steel-100 sm:text-2xl">
              ACESSO AO STUDIO DO SERRALHEIRO
            </h2>

            <p className="metal-text mt-6 text-6xl font-black leading-none sm:text-8xl">8x de R$ 5,58</p>
            <p className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">ou apenas R$ 37 à vista</p>

            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-1">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-steel-100 sm:text-lg">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-spark text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <CtaButton size="xl" className="mt-9 w-full">
              QUERO MEU ACESSO AGORA
            </CtaButton>

            <p className="mt-5 text-sm text-steel-300">
              Cada hora gasta procurando projeto ou refazendo conta é uma hora a menos de produção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
