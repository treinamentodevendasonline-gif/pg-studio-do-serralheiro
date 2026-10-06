import { FAQ_ITEMS } from "@/lib/config";

export function Faq() {
  return (
    <section id="faq" className="bg-ink px-5 py-16 sm:py-24" aria-labelledby="faq-titulo">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-titulo" className="text-3xl font-black leading-tight text-white sm:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="steel-panel group rounded-2xl">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-bold text-white">
                {item.q}
                <span
                  aria-hidden="true"
                  className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-spark/20 text-2xl leading-none text-spark transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-steel-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
