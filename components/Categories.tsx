import { CtaButton } from "./CtaButton";
import { Icon, type IconName } from "./Icon";

type Item = {
  icon: IconName;
  title: string;
  text: string;
  big?: string;
  wide?: boolean;
};

const items: Item[] = [
  {
    icon: "furniture",
    title: "300 móveis de metalon",
    text: "300 projetos de móveis feitos de metalon para você consultar e produzir.",
    big: "300",
    wide: true,
  },
  {
    icon: "gate",
    title: "20 projetos de portões",
    text: "20 projetos de portões residenciais para ter à mão na hora de fabricar.",
    big: "20",
    wide: true,
  },
  { icon: "gate-auto", title: "Automação de portões", text: "Projetos de automação de portões." },
  { icon: "aluminum", title: "Serralheria de alumínio", text: "Projetos de serralheria de alumínio." },
  { icon: "roof", title: "Coberturas residenciais", text: "Projetos para fazer coberturas residenciais." },
  { icon: "trailer", title: "Projeto de trailer", text: "Um projeto que ensina como fazer um trailer." },
  { icon: "cuts", title: "Calculadora de cortes", text: "Calculadora automática de cortes." },
  { icon: "clipboard", title: "Calculadora de orçamento", text: "Calculadora automática de orçamento." },
];

export function Categories() {
  return (
    <section id="conteudo" className="bg-ink px-5 py-16 sm:py-24" aria-labelledby="conteudo-titulo">
      <div className="mx-auto max-w-6xl">
        <h2 id="conteudo-titulo" className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">
          Tudo o que você precisa em um só aplicativo
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-steel-300">
          Projetos para fabricar e ferramentas para calcular, reunidos no seu celular.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.title}
              className={`steel-panel rounded-3xl p-6 ${item.wide ? "sm:col-span-1 lg:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-spark/15 text-spark">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                {item.big && (
                  <span className="metal-text text-6xl font-black leading-none sm:text-7xl" aria-hidden="true">
                    {item.big}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-white">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-steel-300">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <CtaButton size="lg" className="w-full sm:w-auto">
            QUERO ACESSAR O STUDIO DO SERRALHEIRO
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
