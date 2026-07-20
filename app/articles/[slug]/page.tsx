import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/components/Callout";
import EmailSignupForm from "@/components/EmailSignupForm";
import { getAllArticles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.meta.title, description: article.meta.description };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-14">
      <p className="text-[0.8rem] font-bold uppercase tracking-wide text-rose">
        {article.meta.category} · {article.meta.readMinutes} min read
      </p>
      <h1 className="mt-3 text-4xl">{article.meta.title}</h1>
      <p className="mt-4 text-lg text-soft">{article.meta.description}</p>
      {article.meta.image && (
        <div className="relative mt-8 aspect-[1200/630] w-full overflow-hidden rounded-3xl bg-blush">
          <Image
            src={article.meta.image}
            alt=""
            fill
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}
      <hr className="my-8 border-line" />
      <div className="prose-fog">
        <MDXRemote source={article.content} components={{ Callout }} />
      </div>

      <aside className="mt-14 rounded-3xl bg-blush px-7 py-10 text-center">
        <p className="text-[0.8rem] font-bold uppercase tracking-widest text-rose">
          Now in private beta
        </p>
        <h2 className="mt-3 text-xl">Curious what triggers your fog?</h2>
        <p className="mx-auto mt-2 max-w-md text-[0.98rem] text-soft">
          FoggyBrain helps you log symptoms in seconds and shows the patterns
          behind them. Free, private, no account. Join the list and
          we&apos;ll email you when a spot opens up.
        </p>
        <div className="mt-5 flex justify-center">
          <EmailSignupForm />
        </div>
      </aside>

      <p className="mt-10 text-[0.85rem] text-soft">
        This article is for information only and is not medical advice. If your
        brain fog is severe or persistent, please talk to a healthcare
        provider. <Link href="/articles">More articles</Link>
      </p>
    </article>
  );
}
