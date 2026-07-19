import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles about brain fog",
  description:
    "Plain-language, evidence-based articles on brain fog: what causes it, and how sleep, food, movement, and stress shape mental clarity.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-14">
      <h1 className="text-4xl">Understand your fog</h1>
      <p className="mt-4 max-w-xl text-lg text-soft">
        Short, evidence-based reads — written in plain language, because foggy
        days deserve gentle writing.
      </p>
      <div className="mt-10 flex flex-col gap-5">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="group rounded-3xl border border-line bg-white/70 p-6 no-underline transition-shadow hover:shadow-[0_10px_30px_rgba(42,33,64,0.08)]"
          >
            <p className="text-[0.8rem] font-bold uppercase tracking-wide text-rose">
              {a.category} · {a.readMinutes} min read
            </p>
            <h2 className="mt-2 text-2xl text-ink transition-colors group-hover:text-rose">
              {a.title}
            </h2>
            <p className="mt-2 text-soft">{a.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
