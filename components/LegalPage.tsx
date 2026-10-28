import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LegalPage.module.css";

type LegalPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/" aria-label="Voltar à página inicial Ludipim" className={styles.logo}>
          <Image src="/images/ludipim-logo.webp" alt="Ludipim" width={180} height={60} />
        </Link>
        <Link href="/" className={styles.back}>Voltar ao site</Link>
      </header>
      <main className={styles.main}>
        <nav className={styles.breadcrumb} aria-label="Caminho de navegação"><Link href="/">Início</Link> / Informações legais</nav>
        <h1>{title}</h1>
        <p className={styles.updated}>Última atualização: 27 de outubro de 2026</p>
        <p className={styles.intro}>{intro}</p>
        <article className={styles.content}>{children}</article>
        <div className={styles.support}>
          <strong>Ficou com alguma dúvida?</strong>
          <p>Fale com o atendimento da Ludipim: <a href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>.</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Início</Link>
        <Link href="/politica-de-privacidade">Privacidade</Link>
        <Link href="/termos-de-compra">Termos de compra</Link>
        <Link href="/politica-de-reembolso">Reembolso</Link>
      </footer>
    </div>
  );
}
