"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createBrowserTransport } from "@/lib/meta-browser";
import { canTrack, CONSENT_KEY, createMetaConsent, readConsent, serializeConsent, type ConsentChoice } from "@/lib/meta-consent";
import styles from "./MarketingConsent.module.css";

const config = {
  enabled: process.env.NEXT_PUBLIC_META_TRACKING_ENABLED === "true",
  privacyReady: process.env.NEXT_PUBLIC_META_PRIVACY_READY === "true",
  pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

export function MarketingConsent() {
  const controller = useRef<ReturnType<typeof createMetaConsent> | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!canTrack(config)) return;
    controller.current ??= createMetaConsent(config, createBrowserTransport());
    const active = controller.current;
    let choice: ConsentChoice | null = null;
    try { choice = readConsent(localStorage.getItem(CONSENT_KEY)); } catch { /* fail closed */ }
    setReady(true);
    setOpen(choice === null);
    void active.apply(choice).catch(() => setError(true));

    function onStorage(event: StorageEvent) {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      // Withdrawals in another tab apply here too; grants require a local choice/reload.
      if (readConsent(event.newValue) !== "accepted") {
        active.revoke();
        setOpen(true);
      }
    }
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      active.revoke();
    };
  }, []);

  function choose(choice: ConsentChoice) {
    setError(false);
    try {
      localStorage.setItem(CONSENT_KEY, serializeConsent(choice));
    } catch {
      controller.current?.revoke();
      setError(true);
      return;
    }
    setOpen(false);
    void controller.current?.apply(choice).catch(() => setError(true));
  }

  if (!ready) return null;
  return <>
    <button type="button" className={styles.preferences} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="marketing-preferences">Preferências de cookies</button>
    {open ? <section className={styles.panel} id="marketing-preferences" aria-labelledby="marketing-title">
      <h2 id="marketing-title">Sua escolha de privacidade</h2>
      <p>Você permite cookies de publicidade da Meta para medir visitas e interesse neste material? Eles só são ativados com sua permissão. Você pode recusar e continuar comprando normalmente.</p>
      <p>Você pode mudar sua escolha em “Preferências de cookies”. <Link href="/politica-de-privacidade">Leia a Política de Privacidade</Link>.</p>
      <div className={styles.actions}>
        <button type="button" onClick={() => choose("rejected")}>Recusar publicidade</button>
        <button type="button" onClick={() => choose("accepted")}>Aceitar publicidade</button>
      </div>
    </section> : null}
    {error ? <p className={styles.error} role="status">Não foi possível ativar a medição de publicidade. Você pode continuar usando o site e comprando.</p> : null}
  </>;
}
