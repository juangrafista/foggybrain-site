"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Habit = {
  n: string;
  title: string;
  body: string;
  image: string;
};

export default function HabitsShowcase({ habits }: { habits: Habit[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const open = (i: number) => {
    setClosing(false);
    setOpenIndex(i);
  };

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpenIndex((i) => {
        if (i !== null) triggerRefs.current[i]?.focus();
        return null;
      });
      setClosing(false);
    }, 180);
  }, []);

  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + habits.length) % habits.length));
  }, [habits.length]);

  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % habits.length));
  }, [habits.length]);

  useEffect(() => {
    if (openIndex === null) return;
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        {habits.map((s, i) => (
          <div key={s.n} className="text-center sm:text-left">
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => open(i)}
              aria-label={`View larger screenshot: ${s.title}`}
              className="relative mx-auto block aspect-[323/700] w-40 cursor-zoom-in overflow-hidden rounded-[1.6rem] border-2 border-mist/20 shadow-[0_20px_45px_rgba(15,10,30,0.45)] transition-transform duration-300 hover:scale-[1.04] focus-visible:scale-[1.04] sm:mx-0"
            >
              <Image
                src={s.image}
                alt={`Screenshot of the FoggyBrain app: ${s.title}`}
                fill
                sizes="10rem"
                className="object-cover"
              />
            </button>
            <p className="mt-6 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-mist/40">
              {s.n}
            </p>
            <h3 className="mt-1 text-xl">{s.title}</h3>
            <p className="mt-2 text-[0.98rem] text-mist/85">{s.body}</p>
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${habits[openIndex].title} screenshot`}
          onClick={close}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-6 backdrop-blur-md lightbox-backdrop ${closing ? "lightbox-backdrop-out" : ""}`}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-mist/10 text-mist backdrop-blur transition-colors hover:bg-mist/20 sm:right-8 sm:top-8"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {habits.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-mist/10 text-mist backdrop-blur transition-colors hover:bg-mist/20 sm:left-8"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M12 4l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <figure
            key={openIndex}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (delta > 50) prev();
              else if (delta < -50) next();
              touchStartX.current = null;
            }}
            className={`lightbox-content flex flex-col items-center ${closing ? "lightbox-content-out" : ""}`}
          >
            <div className="relative aspect-[323/700] h-[68vh] max-h-[68vh] max-w-[85vw]">
              <Image
                src={habits[openIndex].image}
                alt={`Screenshot of the FoggyBrain app: ${habits[openIndex].title}`}
                fill
                sizes="85vw"
                priority
                className="rounded-xl border-2 border-mist/20 object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              />
            </div>
            <figcaption className="mt-5 text-center text-[0.98rem] text-mist/90">
              {habits[openIndex].title}
            </figcaption>
          </figure>

          {habits.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-mist/10 text-mist backdrop-blur transition-colors hover:bg-mist/20 sm:right-8"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M8 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {habits.length > 1 && (
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {habits.map((h, i) => (
                <button
                  key={h.n}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex(i);
                  }}
                  aria-label={`Go to screenshot ${i + 1}`}
                  aria-current={i === openIndex}
                  className={`h-1.5 rounded-full transition-all ${
                    i === openIndex ? "w-6 bg-mist" : "w-1.5 bg-mist/40 hover:bg-mist/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
