"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticlesGrid({ articles }: { articles: ArticleMeta[] }) {
  const categories = useMemo(
    () => Array.from(new Set(articles.map((a) => a.category))),
    [articles]
  );
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-4 py-1.5 text-[0.9rem] transition-colors ${
              active === c
                ? "border-ink bg-ink text-mist"
                : "border-line bg-white/70 text-soft hover:border-rose hover:text-rose"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="group flex flex-col rounded-3xl border border-line bg-white/70 p-6 no-underline transition-shadow hover:shadow-[0_10px_30px_rgba(42,33,64,0.08)]"
          >
            {a.image && (
              <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl bg-blush">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 24rem, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <p className="mt-4 text-[0.8rem] font-bold uppercase tracking-wide text-rose">
              {a.category} · {a.readMinutes} min read
            </p>
            <h2 className="mt-2 text-2xl text-ink transition-colors group-hover:text-rose">
              {a.title}
            </h2>
            <p className="mt-2 text-soft">{a.description}</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-soft">No articles in this category yet.</p>
      )}
    </>
  );
}
