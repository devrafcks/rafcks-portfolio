"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import type { Project } from "@/data/types";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { StoreLink } from "@/components/ui/StoreLink";
import { fill } from "@/lib/i18n/format";
import { useI18n } from "@/lib/i18n/I18nProvider";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function focusable(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
    (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true",
  );
}

export function ProjectDialog({
  project,
  onClose,
  returnFocus,
}: {
  project: Project;
  onClose: () => void;
  returnFocus: HTMLElement | null;
}) {
  const { t } = useI18n();
  const titleId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const closingRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const touchRef = useRef<{ x: number; y: number } | null>(null);
  const [shown, setShown] = useState(false);
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const shot = project.images[index];

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const previousHtml = document.documentElement.style.overflow;
    const previousBody = document.body.style.overflow;
    const previousPad = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const locked = [...document.body.children].filter((node) => node !== root);
    locked.forEach((node) => node.setAttribute("inert", ""));
    closeRef.current?.focus();

    return () => {
      locked.forEach((node) => node.removeAttribute("inert"));
      document.documentElement.style.overflow = previousHtml;
      document.body.style.overflow = previousBody;
      document.body.style.paddingRight = previousPad;
      if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
    };
  }, [returnFocus]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.querySelector<HTMLElement>("[data-active='true']");
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
  }, [index]);

  function step(delta: number) {
    if (total < 2) return;
    setIndex((current) => (current + delta + total) % total);
  }

  function requestClose() {
    if (closingRef.current) return;
    closingRef.current = true;
    setShown(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timerRef.current = window.setTimeout(() => onCloseRef.current(), reduce ? 0 : 200);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const items = focusable(panel);
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const inside = active instanceof Node && panel.contains(active);
      if (event.shiftKey && (!inside || active === first)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (!inside || active === last)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  });

  function onTouchStart(event: React.TouchEvent) {
    const touch = event.changedTouches[0];
    touchRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function onTouchEnd(event: React.TouchEvent) {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  }

  return createPortal(
    <div ref={rootRef} className="fixed inset-0 z-[1100000] flex items-end justify-center sm:items-center">
      <div
        aria-hidden="true"
        onClick={requestClose}
        className={`absolute inset-0 bg-[#2b1e20]/70 transition-opacity duration-200 ${shown ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative z-10 flex h-[calc(100dvh-0.75rem)] w-full flex-col overflow-hidden rounded-t-[1.4rem] bg-paper text-ink shadow-[0_-24px_60px_rgba(43,30,32,0.28)] transition-[transform,opacity] duration-200 ease-out sm:h-auto sm:max-h-[min(92dvh,56rem)] sm:w-[min(90vw,75rem)] sm:rounded-[1.6rem] dark:bg-night dark:text-[#f6efe6] will-change-transform ${shown ? "translate-y-0 opacity-100" : "translate-y-full sm:translate-y-6 sm:opacity-0"}`}
      >
        <div className="relative flex shrink-0 items-center justify-end px-2 pt-[max(0.35rem,env(safe-area-inset-top))]">
          <span className="pointer-events-none absolute top-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-ink/15 sm:hidden dark:bg-white/20" aria-hidden="true" />
          <button
            ref={closeRef}
            type="button"
            onClick={requestClose}
            aria-label={t.dialog.close}
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 dark:text-white dark:hover:bg-white/10"
          >
            <IconX size={22} stroke={1.75} aria-hidden="true" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8">
          {shot && (
            <div data-gallery onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="relative">
              <DeviceMockup {...shot} wide />
              {total > 1 && (
                <>
                  <button
                    type="button"
                    aria-label={t.dialog.previous}
                    onClick={() => step(-1)}
                    className="absolute top-1/2 left-1 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/95 text-ink shadow-md sm:left-3 dark:bg-night/90 dark:text-white"
                  >
                    <IconChevronLeft size={22} stroke={1.75} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label={t.dialog.next}
                    onClick={() => step(1)}
                    className="absolute top-1/2 right-1 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/95 text-ink shadow-md sm:right-3 dark:bg-night/90 dark:text-white"
                  >
                    <IconChevronRight size={22} stroke={1.75} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          )}
          {total > 1 && (
            <>
              <p className="mt-3 text-center font-label text-xs font-extrabold tracking-[0.08em] text-ink/70 italic dark:text-white/70" aria-live="polite">
                {index + 1} / {total}
              </p>
              <div ref={stripRef} role="group" aria-label={t.dialog.thumbs} className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {project.images.map((image, imageIndex) => {
                  const active = imageIndex === index;
                  return (
                    <button
                      key={image.src}
                      type="button"
                      data-active={active ? "true" : "false"}
                      aria-current={active ? "true" : undefined}
                      aria-label={fill(t.dialog.show, { n: imageIndex + 1, total })}
                      onClick={() => setIndex(imageIndex)}
                      className={`relative h-11 w-16 shrink-0 overflow-hidden rounded-md ${active ? "ring-2 ring-ember ring-offset-2 ring-offset-paper dark:ring-offset-night" : "opacity-70"}`}
                    >
                      <Image src={image.src} alt="" width={96} height={64} sizes="64px" loading="lazy" className="h-full w-full object-cover" />
                    </button>
                  );
                })}
              </div>
            </>
          )}
          <h3 id={titleId} className="mt-5 font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] font-semibold tracking-[-0.03em]">
            {project.title}
          </h3>
          {project.notice && (
            <p role="note" className="mt-4 rounded-xl border border-ink/15 bg-sun/35 px-4 py-3 text-sm leading-relaxed text-ink dark:border-white/20 dark:bg-white/10 dark:text-white">
              {project.notice}
            </p>
          )}
          <p className="mt-3 leading-relaxed text-ink/85 dark:text-white/80">{project.summary}</p>
          {project.points.length > 0 && (
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          {project.stack.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.dialog.stack}>
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink/15 bg-cream px-3 py-1.5 font-label text-[0.68rem] font-extrabold tracking-[0.04em] text-ink uppercase dark:border-white/20 dark:bg-white/10 dark:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <StoreLink key={link.href} {...link} label={(t.links as Record<string, string>)[link.label] ?? link.label} />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
