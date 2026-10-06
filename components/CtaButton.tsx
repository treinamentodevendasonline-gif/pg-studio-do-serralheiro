import type { ReactNode } from "react";
import { CHECKOUT_URL } from "@/lib/config";

type Props = {
  children: ReactNode;
  size?: "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  md: "px-6 py-4 text-base",
  lg: "px-7 py-5 text-base sm:text-lg",
  xl: "px-8 py-6 text-lg sm:text-xl",
};

export function CtaButton({ children, size = "lg", className = "" }: Props) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
