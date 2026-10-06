import type { ReactNode } from "react";

export type IconName =
  | "gate-auto"
  | "aluminum"
  | "furniture"
  | "roof"
  | "gate"
  | "trailer"
  | "cuts"
  | "calculator"
  | "clock"
  | "folder"
  | "phone"
  | "layers"
  | "clipboard"
  | "check";

const paths: Record<IconName, ReactNode> = {
  "gate-auto": (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
  aluminum: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 3v18M3 12h18" />
    </>
  ),
  furniture: <path d="M3 8h18M5 8v12M19 8v12M8 8v5h8V8" />,
  roof: <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-5h4v5" />,
  gate: <path d="M3 4v16M21 4v16M3 8h18M3 16h18M8 8v8M12 8v8M16 8v8" />,
  trailer: (
    <>
      <path d="M2 7h14v9H2zM16 11h4l2 3v2h-6" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  cuts: <path d="M3 17L17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2" />,
  calculator: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  folder: <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
    </>
  ),
  check: <path d="M5 12l5 5L20 7" />,
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
