import { CtaButton } from "./CtaButton";
import { Icon } from "./Icon";

function Blueprint() {
  const d = (n: number) => ({ style: { animationDelay: `${n}s` } });
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Desenho técnico de um portão com medidas"
      className="h-auto w-full"
      fill="none"
      stroke="#A9BCD3"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {/* moldura */}
      <rect className="draw" pathLength={1} x="50" y="30" width="300" height="190" rx="3" stroke="#E6EDF6" strokeWidth="4" {...d(0.2)} />
      {/* travessas */}
      <path className="draw" pathLength={1} d="M50 80H350M50 170H350" stroke="#7CB0FF" {...d(0.7)} />
      {/* barras verticais */}
      <path className="draw" pathLength={1} d="M110 80V170M170 80V170M230 80V170M290 80V170" stroke="#7CB0FF" {...d(1.0)} />
      {/* diagonal */}
      <path className="draw" pathLength={1} d="M50 220L350 30" stroke="#4F7DB8" strokeDasharray="1" {...d(1.3)} />
      {/* cotas */}
      <g stroke="#A9BCD3" strokeWidth="1.5">
        <path className="draw" pathLength={1} d="M50 245V265M350 245V265M50 255H350" {...d(1.7)} />
        <path className="draw" pathLength={1} d="M25 30H15M25 220H15M20 30V220" {...d(1.9)} />
      </g>
      <g fill="#E6EDF6" stroke="none" fontSize="14" fontWeight="700" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <text x="200" y="283" textAnchor="middle">3,00 m</text>
        <text transform="translate(8 125) rotate(-90)" textAnchor="middle">1,90 m</text>
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <header className="blueprint-grid relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,#14305e_0%,#050a14_60%)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-20">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-steel-300/25 bg-navy/70 px-4 py-2 text-sm font-semibold text-steel-100" style={{ animationDelay: "0s" }}>
            <Icon name="phone" className="h-4 w-4 text-spark" />
            Aplicativo para profissionais de serralheria
          </p>

          <h1 className="rise mt-6 text-[2.2rem] font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.1s" }}>
            Tenha <span className="metal-text">centenas de projetos</span> de serralheria na palma da sua mão
          </h1>

          <p className="rise mt-5 max-w-xl text-lg leading-relaxed text-steel-300" style={{ animationDelay: "0.2s" }}>
            Projetos, calculadoras e materiais para ajudar você a executar seus trabalhos com mais praticidade e segurança.
          </p>

          <div className="rise mt-8" style={{ animationDelay: "0.3s" }}>
            <div className="steel-panel relative max-w-md rounded-3xl p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-5xl font-black leading-none text-white sm:text-6xl">8x de R$ 5,58</span>
              </div>
              <p className="mt-2 text-xl font-bold text-steel-100">
                ou <span className="text-white">R$ 37 à vista</span>
              </p>
              <CtaButton size="lg" className="mt-5 w-full">
                QUERO ACESSAR O STUDIO DO SERRALHEIRO
              </CtaButton>
            </div>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "0.25s" }}>
          <div className="steel-panel relative rounded-3xl p-5 sm:p-7">
            <span className="rivet left-3 top-3" />
            <span className="rivet right-3 top-3" />
            <span className="rivet bottom-3 left-3" />
            <span className="rivet bottom-3 right-3" />
            <Blueprint />
            <p className="mt-2 text-center text-xs text-steel-400">Desenho de exemplo ilustrativo</p>
          </div>
          <div className="steel-panel absolute -bottom-6 -right-1 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-4">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-spark/20 text-spark">
              <Icon name="calculator" className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold leading-tight text-white">
              Cortes e orçamento
              <span className="block font-medium text-steel-300">calculados automaticamente</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
