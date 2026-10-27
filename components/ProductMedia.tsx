"use client";

import Image from "next/image";
import { useState } from "react";
import { BookOpen, ImageOff, Sparkles } from "lucide-react";

type IllustrationProps = { compact?: boolean; className?: string };

const MEDIA = {
  product: "/images/ludipim-produto-hero.webp",
  samples: [
    { file: "/images/ludipim-cores.webp", title: "Cores", english: "Let's Learn Colors!", description: "Descobrir cores e suas primeiras palavras" },
    { file: "/images/ludipim-numeros.webp", title: "Números", english: "Let's Learn Numbers!", description: "Conhecer números em inglês" },
    { file: "/images/ludipim-animais.webp", title: "Animais", english: "Let's Learn Animals!", description: "Aprender os nomes de animais" },
  ],
};

function PreviewImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  const [unavailable, setUnavailable] = useState(false);
  if (unavailable) {
    return <div className="ludipim-media-fallback" role="img" aria-label={`Imagem oficial ainda não enviada: ${alt}`}>
      <ImageOff size={27} aria-hidden="true" />
      <span>Prévia oficial em preparação</span>
    </div>;
  }
  return <Image
    src={src}
    alt={alt}
    width={900}
    height={1200}
    sizes={sizes}
    priority={priority}
    className="ludipim-media-image"
    onError={() => setUnavailable(true)}
  />;
}

export function ProductShowcase({ compact = false, className = "" }: IllustrationProps) {
  const [unavailable, setUnavailable] = useState(false);
  return <div className={`ludipim-product-showcase ${compact ? "is-compact" : ""} ${className}`}>
    <span className="ludipim-sparkle ludipim-sparkle-one" aria-hidden="true">✦</span>
    <span className="ludipim-sparkle ludipim-sparkle-two" aria-hidden="true">✦</span>
    {unavailable ? (
      <div className="ludipim-hero-fallback" role="img" aria-label="Arte oficial do material educativo a ser adicionada">
        <div className="ludipim-fallback-book"><BookOpen size={56} aria-hidden="true"/><strong>Meu Primeiro<br/>Inglês Divertido</strong><small>40 páginas • PDF A4</small></div>
        <div className="ludipim-fallback-pill"><Sparkles size={16} aria-hidden="true"/> Material educativo digital</div>
      </div>
    ) : (
      <Image
        src={compact ? "/images/ludipim-capa.webp" : MEDIA.product}
        alt={compact ? "Capa oficial do Meu Primeiro Inglês Divertido" : "Capa real do Meu Primeiro Inglês Divertido acompanhada de páginas de cores, números e animais do PDF"}
        width={compact ? 900 : 1450}
        height={compact ? 1274 : 1190}
        sizes={compact ? "(max-width: 680px) 94vw, 510px" : "(max-width: 680px) 96vw, (max-width: 1100px) 46vw, 600px"}
        quality={86}
        priority={!compact}
        className="ludipim-showcase-image"
        onError={() => setUnavailable(true)}
      />
    )}
  </div>;
}

export function ProductPreviewGallery() {
  return <div className="ludipim-gallery-wrap">
    <div className="ludipim-product-gallery" aria-label="Páginas de exemplo do material educativo">
      {MEDIA.samples.map((sample, index) =>
        <figure className="ludipim-gallery-card" key={sample.title}>
          <div className="ludipim-gallery-frame">
            <PreviewImage
              src={sample.file}
              alt={`Página real de atividade: ${sample.english}`}
              sizes="(max-width: 680px) 68vw, (max-width: 1100px) 18vw, 200px"
              priority={false}
            />
          </div>
          <figcaption><strong>{sample.title}</strong><small>{sample.description}</small></figcaption>
          <span className="ludipim-gallery-index" aria-hidden="true">0{index + 1}</span>
        </figure>
      )}
    </div>
    <p className="ludipim-gallery-hint">Prévia de três atividades do material. Deslize para ver mais no celular.</p>
  </div>;
}
