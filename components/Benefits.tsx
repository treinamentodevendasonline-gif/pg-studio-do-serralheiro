import { Icon, type IconName } from "./Icon";

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "clock", title: "Economize tempo", text: "Menos tempo procurando projeto e refazendo conta. Mais tempo na bancada." },
  { icon: "folder", title: "Tenha projetos à mão", text: "Seus projetos de portões, móveis, coberturas e mais, sempre por perto." },
  { icon: "calculator", title: "Faça cálculos com mais praticidade", text: "As calculadoras automáticas fazem as contas por você." },
  { icon: "clipboard", title: "Organize seus orçamentos", text: "Monte seus orçamentos de forma mais clara e consistente." },
  { icon: "phone", title: "Consulte projetos pelo celular", text: "Abra o aplicativo na oficina, na obra ou na casa do cliente." },
  { icon: "layers", title: "Várias ideias de fabricação em um único lugar", text: "Portões, alumínio, metalon, coberturas e trailer reunidos no mesmo aplicativo." },
];

export function Benefits() {
  return (
    <section className="blueprint-grid bg-navy px-5 py-16 sm:py-24" aria-labelledby="beneficios-titulo">
      <div className="mx-auto max-w-6xl">
        <h2 id="beneficios-titulo" className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">
          Menos improviso, mais trabalho bem feito
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li key={b.title} className="flex gap-4 border-t border-steel-300/20 pt-5">
              <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-navy">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-white">{b.title}</h3>
                <p className="mt-1 leading-relaxed text-steel-300">{b.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
