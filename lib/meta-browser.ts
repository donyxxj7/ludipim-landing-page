import type { MetaTransport } from "./meta-consent";

type PixelQueue = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: PixelQueue;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window { fbq?: PixelQueue; _fbq?: PixelQueue }
}

/** Adapted from the base code supplied by Meta for dataset 1112474941151817. */
export function createBrowserTransport(): MetaTransport {
  let loading: Promise<void> | null = null;

  return {
    load() {
      if (loading) return loading;
      loading = new Promise<void>((resolve, reject) => {
        // An unexpected third-party installation cannot provide a second pixel here.
        if (window.fbq) {
          reject(new Error("Unexpected existing Meta installation"));
          return;
        }
        const queue = function (...args: unknown[]) {
          if (queue.callMethod) queue.callMethod(...args);
          else queue.queue.push(args);
        } as PixelQueue;
        queue.queue = [];
        queue.push = queue;
        queue.loaded = true;
        queue.version = "2.0";
        window.fbq = queue;
        window._fbq = queue;
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://connect.facebook.net/en_US/fbevents.js";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Meta script unavailable"));
        document.head.appendChild(script);
      });
      return loading;
    },
    command(...args) { window.fbq?.(...args); },
    clearCookies() {
      // Delete only Meta cookies accessible to this host; never touch checkout cookies.
      for (const name of ["_fbp", "_fbc"]) {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${window.location.hostname}; SameSite=Lax`;
      }
    },
  };
}
