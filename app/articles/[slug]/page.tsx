import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/components/Callout";
import EmailSignupForm from "@/components/EmailSignupForm";
import { getAdjacentArticles, getAllArticles, getArticle } from "@/lib/articles";

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
  const { meta } = article;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/articles/${meta.slug}`,
    },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: `/articles/${meta.slug}`,
      publishedTime: meta.date,
      images: meta.image ? [meta.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.image ? [meta.image] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const { meta } = article;
  const { prev, next } = getAdjacentArticles(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: meta.image ? [`https://foggybrain.app${meta.image}`] : undefined,
    datePublished: meta.date,
    dateModified: meta.date,
    author: { "@type": "Organization", name: "FoggyBrain" },
    publisher: {
      "@type": "Organization",
      name: "FoggyBrain",
      logo: {
        "@type": "ImageObject",
        url: "https://foggybrain.app/app-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://foggybrain.app/articles/${meta.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://foggybrain.app" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: "https://foggybrain.app/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: `https://foggybrain.app/articles/${meta.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <p className="text-[0.8rem] font-bold uppercase tracking-wide text-rose">
        {meta.category} · {meta.readMinutes} min read
      </p>
      <h1 className="mt-3 text-4xl">{meta.title}</h1>
      <p className="mt-4 text-lg text-soft">{meta.description}</p>
      {meta.image && (
        <div className="relative mt-8 aspect-[1200/630] w-full overflow-hidden rounded-3xl bg-blush">
          <Image
            src={meta.image}
            alt={meta.title}
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

      {(prev || next) && (
        <nav
          aria-label="More articles"
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {prev && (
            <Link
              href={`/articles/${prev.slug}`}
              className="group rounded-3xl border border-line bg-white/70 p-6 no-underline transition-shadow hover:shadow-[0_10px_30px_rgba(42,33,64,0.08)]"
            >
              <p className="flex items-center gap-1 text-[0.8rem] font-bold uppercase tracking-wide text-rose">
                <span aria-hidden="true">←</span> Previous
              </p>
              <h2 className="mt-2 text-lg text-ink transition-colors group-hover:text-rose">
                {prev.title}
              </h2>
            </Link>
          )}
          {next && (
            <Link
              href={`/articles/${next.slug}`}
              className="group rounded-3xl border border-line bg-white/70 p-6 text-right no-underline transition-shadow hover:shadow-[0_10px_30px_rgba(42,33,64,0.08)] sm:col-start-2"
            >
              <p className="flex items-center justify-end gap-1 text-[0.8rem] font-bold uppercase tracking-wide text-rose">
                Next <span aria-hidden="true">→</span>
              </p>
              <h2 className="mt-2 text-lg text-ink transition-colors group-hover:text-rose">
                {next.title}
              </h2>
            </Link>
          )}
        </nav>
      )}

      <p className="mt-10 text-[0.85rem] text-soft">
        This article is for information only and is not medical advice. If your
        brain fog is severe or persistent, please talk to a healthcare
        provider. <Link href="/articles">More articles</Link>
      </p>
    </article>
  );
}
