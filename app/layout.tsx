import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Meu Primeiro Inglês Divertido | Ludipim",
  description: "PDF de 40 páginas com atividades ilustradas para apresentar cores, números, animais e as primeiras palavras em inglês às crianças de 6 a 9 anos.",
  openGraph: {
    title: "Meu Primeiro Inglês Divertido | Ludipim",
    description: "Aprender pode ser uma aventura! Conheça o PDF de 40 páginas, com atividades para imprimir e materiais de apoio.",
    type: "website",
    locale: "pt_BR",
    siteName: "Ludipim",
    ...(siteUrl ? { images: [{ url: "/images/ludipim-logo.webp", width: 1200, height: 400, alt: "Ludipim — Aprender pode ser uma aventura!" }] } : {}),
  },
  twitter: { card: siteUrl ? "summary_large_image" : "summary", title: "Meu Primeiro Inglês Divertido | Ludipim", description: "Um primeiro contato leve e divertido com o inglês." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
