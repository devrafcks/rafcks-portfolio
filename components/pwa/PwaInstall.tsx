"use client";

import { IconShare2, IconX } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "pwa-install-dismissed";
const SESSION_KEY = "pwa-install-dismissed-session";
const COOLDOWN_MS = 14 * 24 * 60 * 60 * 1000;

function isDismissed() {
  try {
    if (sessionStorage.getItem(SESSION_KEY) === "1") return true;
    const raw = localStorage.getItem(DISMISS_KEY);
    if (!raw) return false;
    const at = raw === "1" ? Date.now() : Number(raw);
    return Number.isFinite(at) && Date.now() - at < COOLDOWN_MS;
  } catch {
    return false;
  }
}

function rememberDismiss() {
  const now = String(Date.now());
  try {
    localStorage.setItem(DISMISS_KEY, now);
  } catch {
    /* storage indisponível */
  }
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* storage indisponível */
  }
}

function isStandalone() {
  const nav = navigator as Navigator & { standalone?: boolean };
  return window.matchMedia("(display-mode: standalone)").matches || Boolean(nav.standalone);
}

function isIos() {
  const ua = window.navigator.userAgent;
  const iPhone = /iPhone|iPad|iPod/i.test(ua);
  const iPadOs = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return iPhone || iPadOs;
}

export function PwaInstall() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [visible, setVisible] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    if (isStandalone() || isDismissed()) {
      dismissedRef.current = isDismissed();
      return;
    }

    const onPrompt = (event: Event) => {
      if (dismissedRef.current || isDismissed()) return;
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    if (isIos()) {
      setIos(true);
      setVisible(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const hadController = Boolean(navigator.serviceWorker.controller);
    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    let refreshing = false;
    const onChange = () => {
      if (!hadController || refreshing) return;
      refreshing = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onChange);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const color = root.classList.contains("dark") ? "#1E1416" : "#FFBC00";
      document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute("content", color));
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  function dismiss(event: React.SyntheticEvent) {
    event.preventDefault();
    event.stopPropagation();
    dismissedRef.current = true;
    rememberDismiss();
    setPromptEvent(null);
    setVisible(false);
  }

  async function install() {
    if (!promptEvent) return;
    await promptEvent.prompt();
    const choice = await promptEvent.userChoice;
    if (choice.outcome === "accepted") {
      dismissedRef.current = true;
      rememberDismiss();
      setVisible(false);
    }
    setPromptEvent(null);
  }

  if (!visible) return null;

  return (
    <div className="pointer-events-auto fixed inset-x-3 bottom-28 z-[1200000] mx-auto flex max-w-md items-start gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-lg sm:bottom-6 sm:left-auto sm:right-4">
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold">Instalar app</p>
        {ios ? (
          <p className="mt-1 text-sm leading-snug text-white/80">
            Toque em Compartilhar
            <IconShare2 size={16} stroke={1.75} aria-hidden="true" className="mx-1 inline-block align-[-2px]" />
            e depois em Adicionar à Tela de Início.
          </p>
        ) : (
          <p className="mt-1 text-sm leading-snug text-white/80">Abra o portfólio como um app, com ícone na tela inicial.</p>
        )}
      </div>
      {!ios && promptEvent && (
        <button type="button" onClick={install} className="shrink-0 rounded-full bg-sun px-3 py-2 font-label text-xs font-extrabold uppercase tracking-[0.05em] text-ink italic">
          Instalar
        </button>
      )}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dispensar instalação"
        className="pwa-dismiss pointer-events-auto relative z-10 inline-flex size-11 min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full"
      >
        <IconX size={18} stroke={1.75} aria-hidden="true" />
      </button>
    </div>
  );
}
