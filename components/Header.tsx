"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/articles", label: "Articles" },
  { href: "/story", label: "Our story" },
  { href: "/support", label: "Support" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mx-auto w-full max-w-5xl px-6 py-5">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/app-icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[10px]"
            priority
          />
          <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-ink">
            FoggyBrain
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-[0.95rem] sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-soft hover:text-ink transition-colors no-underline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="rounded-full bg-ink px-4 py-1.5 text-mist no-underline hover:bg-rose transition-colors"
          >
            Join the beta
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink sm:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M4 4l14 14M18 4L4 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 5h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 11h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-20 mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-line bg-mist p-4 shadow-lg sm:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-ink no-underline hover:bg-blush transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-ink px-4 py-2.5 text-center text-mist no-underline hover:bg-rose transition-colors"
          >
            Join the beta
          </Link>
        </nav>
      )}
    </header>
  );
}
