"use client";

import Image from "next/image";
import { ProductShowcase, ProductPreviewGallery } from "@/components/ProductMedia";
import { useState } from "react";
import { ArrowDown, ArrowRight, BookOpen, Check, ChevronDown, CircleHelp, FileDown, GraduationCap, Heart, Lightbulb, Menu, Printer, Sparkles, X } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/3erzio8_1247724";

const benefits = [
  { icon: BookOpen, title: "Primeiras palavras", text: "Um começo amigável com vocabulário básico em inglês.", color: "blue" },
  { icon: Sparkles, title: "Aprender fazendo", text: "Atividades variadas para observar, associar, escrever e colorir.", color: "pink" },
  { icon: Printer, title: "Pronto para imprimir", text: "PDF preparado em formato A4 para usar em casa ou na escola.", color: "yellow" },
  { icon: Heart, title: "Para acompanhar junto", text: "Uma proposta prática para pais, responsáveis e professores.", color: "green" },
  { icon: Lightbulb, title: "Temas do cotidiano", text: "Cores, números, animais e vocabulário inicial.", color: "blue" },
  { icon: Check, title: "Gabaritos incluídos", text: "Respostas para apoiar o acompanhamento das atividades.", color: "pink" },
];

const faqs = [
  { q: "O material é físico ou digital?", a: "É um material digital em PDF. Nenhum produto físico será enviado." },
  { q: "Posso imprimir as atividades?", a: "Sim. O arquivo foi preparado para impressão em papel A4." },
  { q: "Para qual idade o material é indicado?", a: "A proposta é indicada para crianças de 6 a 9 anos que estão começando a conhecer o inglês." },
  { q: "Preciso saber inglês para acompanhar a criança?", a: "Não é necessário ter conhecimento avançado. Um adulto pode acompanhar a criança e consultar os gabaritos incluídos." },
  { q: "Como recebo o material após a compra?", a: "A compra é realizada no checkout da Cakto. As instruções de acesso são apresentadas pela plataforma após a confirmação; consulte as informações do checkout." },
  { q: "O pagamento é único?", a: "Sim, é uma compra única. O produto custa R$ 14,90 e o checkout atualmente informa taxa de serviço de R$ 0,99, totalizando R$ 15,89 à vista. Confira o resumo final antes de pagar; parcelamento pode ter acréscimos." },
  { q: "Posso solicitar reembolso?", a: "Sim. Em compras pela internet, há direito legal de arrependimento em até 7 dias. A Cakto disponibiliza um portal para pedidos de reembolso; o acesso está no rodapé desta página. O contato do produtor também consta no e-mail de confirmação da compra." },
  { q: "Como entrar em contato com a Ludipim?", a: "Para dúvidas sobre o material, acesso à compra ou solicitações de atendimento, escreva para endonyparadela2007@gmail.com. O endereço também está disponível no rodapé." },
];

function BuyButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <a className={`button button-primary ${className}`} href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">{children}<ArrowRight size={18} aria-hidden="true" /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header"><div className="header-inner">
      <a className="brand" href="#inicio" aria-label="Ludipim — início"><Image src="/images/ludipim-logo.webp" alt="Ludipim — Aprender pode ser uma aventura!" width={1200} height={400} priority /></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
        <a href="#beneficios" onClick={closeMenu}>Benefícios</a><a href="#material" onClick={closeMenu}>O material</a><a href="#duvidas" onClick={closeMenu}>Dúvidas</a><BuyButton className="header-buy">Quero meu material</BuyButton>
      </nav>
    </div></header>

    <main>
      <section className="hero section-wrap" id="inicio"><div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-spark">✦</span> INGLÊS PARA PEQUENOS EXPLORADORES</div>
        <h1>O primeiro contato com o inglês pode ser <span>uma aventura divertida!</span></h1>
        <p className="hero-lede">Um PDF de 40 páginas com atividades ilustradas para apresentar cores, números, animais e as primeiras palavras em inglês às crianças.</p>
        <div className="hero-points"><span><Check/> 40 páginas</span><span><Check/> PDF digital</span><span><Check/> Pronto para imprimir</span></div>
        <div className="hero-actions"><BuyButton>Quero meu PDF — R$ 15,89 no total</BuyButton><a className="text-link" href="#material">Conheça o material <ArrowDown size={16}/></a></div>
        <p className="hero-note"><CircleHelp size={15}/> Indicado para crianças de 6 a 9 anos. Produto R$ 14,90 + taxa de serviço R$ 0,99 no checkout.</p>
      </div><div className="hero-visual"><ProductShowcase/><span className="visual-caption">Visualização do material educativo. A capa e as páginas oficiais fazem parte do pacote de imagens.</span></div></section>

      <div className="trust-strip"><div><span className="strip-icon"><FileDown/></span><span><b>Material digital</b><small>PDF para baixar</small></span></div><i/><div><span className="strip-icon yellow"><Printer/></span><span><b>Impressão A4</b><small>Use em casa ou na escola</small></span></div><i/><div><span className="strip-icon green"><Heart/></span><span><b>Aprendizado leve</b><small>Atividades para fazer junto</small></span></div></div>

      <section className="benefits section-wrap" id="beneficios"><div className="section-heading"><span className="eyebrow">UM BOM COMEÇO, PASSO A PASSO</span><h2>Aprender inglês também <span>pode ser divertido!</span></h2><p>Um material pensado para transformar o primeiro contato com o idioma em momentos simples de descoberta.</p></div><div className="benefit-grid">{benefits.map(({icon: Icon,title,text,color},i)=><article className="benefit-card" key={title}><div className={`benefit-icon ${color}`}><Icon size={22}/></div><span className="card-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="material-section" id="material"><div className="section-wrap material-inner"><div className="material-copy"><span className="eyebrow">UM CADERNO CHEIO DE DESCOBERTAS</span><h2>Pequenas atividades.<br/><span>Grandes descobertas.</span></h2><p>O Meu Primeiro Inglês Divertido reúne propostas variadas para a criança observar, relacionar, escrever e colorir enquanto conhece palavras em inglês.</p><ul className="check-list"><li><Check/> Cores e números</li><li><Check/> Animais e vocabulário básico</li><li><Check/> Exercícios de associação, escrita e pintura</li><li><Check/> Gabaritos para acompanhar</li></ul><BuyButton>Quero conhecer o PDF</BuyButton></div><div className="material-media"><ProductPreviewGallery/></div></div></section>

      <section className="steps-section section-wrap"><div className="section-heading"><span className="eyebrow">SIMPLES DE COMEÇAR</span><h2>Da compra ao primeiro <span>hello!</span></h2><p>Uma jornada digital em três passos claros.</p></div><div className="steps-grid"><article><span className="step-no">01</span><div className="step-illustration blue-step"><BookOpen/></div><h3>Conheça o material</h3><p>Veja as informações e atividades incluídas no PDF.</p></article><article><span className="step-no">02</span><div className="step-illustration yellow-step"><Heart/></div><h3>Finalize a compra</h3><p>Conclua o pagamento com segurança pelo checkout da Cakto.</p></article><article><span className="step-no">03</span><div className="step-illustration green-step"><FileDown/></div><h3>Acesse o conteúdo</h3><p>Após a confirmação, siga as instruções de acesso da plataforma.</p></article></div></section>

      <section className="audience-section"><div className="section-wrap audience-inner"><div><span className="eyebrow">FEITO PARA COMPARTILHAR</span><h2>Uma aventura para <span>aprender junto.</span></h2><p>O material pode ser usado como apoio educativo por famílias e educadores.</p></div><div className="audience-list"><div><span className="audience-icon pink"><Heart/></span><span><b>Pais e responsáveis</b><small>Para criar momentos de aprendizagem em casa.</small></span></div><div><span className="audience-icon blue"><GraduationCap/></span><span><b>Professores</b><small>Como material complementar para atividades.</small></span></div><div><span className="audience-icon yellow"><Sparkles/></span><span><b>Crianças de 6 a 9 anos</b><small>Que estão começando a conhecer o inglês.</small></span></div><p className="educational-note">Este material é um apoio educativo e não substitui o ensino formal.</p></div></div></section>

      <section className="offer-section section-wrap" id="oferta"><div className="offer-art"><ProductShowcase compact/></div><div className="offer-card"><span className="offer-kicker">SUA PRÓXIMA DESCOBERTA COMEÇA AQUI</span><h2>Meu Primeiro<br/><span>Inglês Divertido</span></h2><p>Um material digital para explorar as primeiras palavras em inglês brincando.</p><ul className="offer-includes"><li><Check/> 40 páginas no total</li><li><Check/> PDF pronto para imprimir em A4</li><li><Check/> Gabaritos incluídos</li><li><Check/> Acesso digital pela Cakto</li></ul><div className="price-line"><span>Pagamento único — total à vista</span><b>R$ 15,89</b></div><p className="price-breakdown">Produto: R$ 14,90 + taxa de serviço do checkout: R$ 0,99.</p><BuyButton>Garantir meu material</BuyButton><small className="price-footnote">Total informado no checkout atualmente. Confirme o resumo do pedido antes de pagar; parcelamento pode ter acréscimos.</small></div></section>

      <section className="faq-section section-wrap" id="duvidas"><div className="faq-intro"><span className="eyebrow">PODEMOS AJUDAR?</span><h2>Dúvidas <span>frequentes</span></h2><p>Separamos algumas respostas para você conhecer melhor o material.</p></div><div className="faq-list">{faqs.map(({q,a},i)=><div className={`faq-item ${openFaq===i?"active":""}`} key={q}><h3><button aria-expanded={openFaq===i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{q}<ChevronDown size={19} aria-hidden="true"/></button></h3><div className="faq-answer" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={openFaq!==i}><p>{a}</p></div></div>)}</div></section>

      <section className="final-cta"><div className="final-decor decor-left">✦</div><div className="final-decor decor-right">✦</div><div className="final-cta-inner"><span className="eyebrow">UMA AVENTURA ESPERA POR VOCÊ</span><h2>Uma nova aventura de aprendizado <span>começa aqui!</span></h2><p>Conheça o material e dê o primeiro passo no inglês de um jeito leve.</p><BuyButton>Quero começar agora — R$ 15,89</BuyButton></div></section>
    </main>

    <footer className="site-footer"><div className="footer-main"><a href="#inicio" className="footer-brand"><Image src="/images/ludipim-logo.webp" alt="Ludipim — Aprender pode ser uma aventura!" width={1200} height={400}/></a><p>Aprender pode ser uma aventura!<br/><span>Material educativo digital para crianças.</span></p><div className="footer-links"><a href="#beneficios">Benefícios</a><a href="#material">O material</a><a href="#duvidas">Dúvidas</a><a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Checkout Cakto</a><a href="https://reembolso.cakto.com.br/" target="_blank" rel="noopener noreferrer">Solicitar reembolso</a><a href="mailto:endonyparadela2007@gmail.com">Falar com o suporte</a><a href="/politica-de-privacidade">Privacidade</a><a href="/termos-de-compra">Termos de compra</a><a href="/politica-de-reembolso">Política de reembolso</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ludipim. Todos os direitos reservados.</span><span>Atendimento Ludipim: <a className="support-email" href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>. Leia nossa Política de Privacidade, Termos de Compra e Política de Reembolso. Dados cadastrais do fornecedor em confirmação.</span></div></footer>
  </>;
}
