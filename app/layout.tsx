import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CHECKOUT_URL, FAQ_ITEMS, PRICE, PRODUCT_NAME, SITE_URL } from "@/lib/config";

const title = "Studio do Serralheiro | Projetos e calculadoras para serralheiros";
const description =
  "Aplicativo com 300 projetos de móveis de metalon, 20 projetos de portões, automação, alumínio, coberturas, trailer e calculadoras automáticas de cortes e orçamento. 8x de R$ 5,58 ou R$ 37 à vista.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: PRODUCT_NAME,
  keywords: [
    "serralheria",
    "projetos de serralheria",
    "projetos de metalon",
    "projetos de portões",
    "automação de portões",
    "calculadora de cortes",
    "calculadora de orçamento",
    "serralheiro",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: PRODUCT_NAME,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050a14",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    description,
    brand: { "@type": "Brand", name: PRODUCT_NAME },
    offers: {
      "@type": "Offer",
      url: CHECKOUT_URL,
      priceCurrency: "BRL",
      price: PRICE.cashNumber,
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
