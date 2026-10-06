import { CtaButton } from "./CtaButton";

export function StickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-steel-300/20 bg-ink/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3">
        <p className="shrink-0 text-sm font-bold leading-tight text-white">
          8x de R$ 5,58
          <span className="block font-medium text-steel-300">ou R$ 37 à vista</span>
        </p>
        <CtaButton size="md" className="flex-1 !px-3 !py-3 text-sm">
          QUERO MEU ACESSO
        </CtaButton>
      </div>
    </div>
  );
}
