import { CtaButton } from "./CtaButton";
import { Icon } from "./Icon";

const cutRows = [
  ["Montante", "2", "1,80 m"],
  ["Travessa", "3", "2,94 m"],
  ["Barra", "12", "1,50 m"],
];

const budgetRows = [
  ["Materiais", "Itens do projeto"],
  ["Serviço", "Seu trabalho"],
  ["Total", "Orçamento pronto"],
];

export function Calculators() {
  return (
    <section className="bg-ink px-5 py-16 sm:py-24" aria-labelledby="calculadoras-titulo">
      <div className="mx-auto max-w-6xl">
        <h2 id="calculadoras-titulo" className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
          Duas calculadoras que trabalham por você
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-steel-300">
          Chega de caderno, calculadora de bolso e conta refeita. Você informa o que precisa e o aplicativo faz o cálculo.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="steel-panel rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-spark text-white">
                <Icon name="cuts" className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-black text-white">Calculadora automática de cortes</h3>
            </div>
            <p className="mt-4 leading-relaxed text-steel-300">
              Em vez de calcular peça por peça na mão, deixe a calculadora organizar os cortes para você. Menos erro de conta, menos retrabalho e mais controle do material na hora de cortar.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-steel-300/20 bg-ink/60">
              <table className="w-full text-left text-sm sm:text-base">
                <caption className="sr-only">Exemplo ilustrativo de lista de cortes</caption>
                <thead className="bg-white/5 text-steel-300">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Peça</th>
                    <th className="px-4 py-3 font-semibold">Qtd.</th>
                    <th className="px-4 py-3 font-semibold">Corte</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {cutRows.map((r) => (
                    <tr key={r[0]} className="border-t border-steel-300/10">
                      <td className="px-4 py-3 font-bold">{r[0]}</td>
                      <td className="px-4 py-3">{r[1]}</td>
                      <td className="px-4 py-3 font-bold text-spark">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-steel-400">Exemplo ilustrativo.</p>
          </article>

          <article className="steel-panel rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-spark text-white">
                <Icon name="clipboard" className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-black text-white">Calculadora automática de orçamento</h3>
            </div>
            <p className="mt-4 leading-relaxed text-steel-300">
              Monte o orçamento do serviço de forma organizada, sem depender de contas soltas. Você ganha clareza para passar o valor ao cliente com mais segurança.
            </p>
            <ul className="mt-6 divide-y divide-steel-300/10 overflow-hidden rounded-2xl border border-steel-300/20 bg-ink/60">
              {budgetRows.map((r) => (
                <li key={r[0]} className="flex items-center justify-between gap-4 px-4 py-3.5">
                  <span className="font-bold text-white">{r[0]}</span>
                  <span className="text-sm text-steel-300 sm:text-base">{r[1]}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-steel-400">Exemplo ilustrativo.</p>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton size="lg" className="w-full sm:w-auto">
            QUERO AS CALCULADORAS E OS PROJETOS
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
