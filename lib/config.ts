export const CHECKOUT_URL = "https://pay.cakto.com.br/34am44h_1178210";

export const PRODUCT_NAME = "Studio do Serralheiro";

export const PRICE = {
  installments: "8x de R$ 5,58",
  cash: "R$ 37 à vista",
  cashNumber: "37.00",
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const FAQ_ITEMS = [
  {
    q: "O que é o Studio do Serralheiro?",
    a: "É um aplicativo para profissionais de serralheria que reúne projetos, cálculos e materiais para facilitar a execução dos trabalhos.",
  },
  {
    q: "O que está incluído?",
    a: "Projetos de automação de portões, projetos de serralheria de alumínio, 300 projetos de móveis feitos de metalon, projetos para fazer coberturas residenciais, 20 projetos de portões residenciais, um projeto que ensina como fazer um trailer, a calculadora automática de cortes e a calculadora automática de orçamento.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O Studio do Serralheiro foi pensado para você consultar projetos e usar as calculadoras direto pelo celular.",
  },
  {
    q: "O aplicativo possui calculadora de cortes?",
    a: "Sim. O aplicativo traz uma calculadora automática de cortes para você não depender de contas feitas peça por peça.",
  },
  {
    q: "Possui calculadora de orçamento?",
    a: "Sim. O aplicativo traz uma calculadora automática de orçamento para ajudar você a organizar seus orçamentos.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Ao clicar em qualquer botão de compra, você abre a página de pagamento. Conclua a compra por lá e siga as orientações exibidas após o pagamento para acessar o aplicativo.",
  },
  {
    q: "Qual o valor?",
    a: "O Studio do Serralheiro custa 8x de R$ 5,58 ou R$ 37 à vista.",
  },
];
