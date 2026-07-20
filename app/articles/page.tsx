import type { Metadata } from "next";
import ArticlesGrid from "@/components/ArticlesGrid";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles about brain fog",
  description:
    "Plain-language, evidence-based articles on brain fog: what causes it, and how sleep, food, movement, and stress shape mental clarity.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <h1 className="text-4xl">Understand your fog</h1>
      <p className="mt-4 max-w-xl text-lg text-soft">
        Short, evidence-based reads — written in plain language, because foggy
        days deserve gentle writing.
      </p>
      <ArticlesGrid articles={articles} />
    </div>
  );
}
