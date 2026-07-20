import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readMinutes: number;
  date: string;
  image?: string;
};

export function getAllArticles(): ArticleMeta[] {
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(articlesDir, f), "utf8"));
      return { slug, ...(data as Omit<ArticleMeta, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string) {
  const file = path.join(articlesDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { meta: { slug, ...(data as Omit<ArticleMeta, "slug">) }, content };
}

export function getAdjacentArticles(slug: string) {
  const articles = getAllArticles();
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = articles[(index - 1 + articles.length) % articles.length];
  const next = articles[(index + 1) % articles.length];
  return { prev, next };
}
