import Image from "next/image";
import Link from "next/link";
import FogWaves from "@/components/FogWaves";
import { getAllArticles } from "@/lib/articles";

const APP_STORE_URL = "https://apps.apple.com/app/foggybrain";

export default function Home() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto w-full max-w-5xl px-6 pb-10 pt-14 sm:pt-20 text-center">
          <Image
            src="/app-icon.png"
            alt="The FoggyBrain app icon: a calm face resting under soft pink waves"
            width={96}
            height={96}
            className="mx-auto rounded-[22px] shadow-[0_14px_40px_rgba(213,82,126,0.35)]"
            priority
          />
          <h1 className="mx-auto mt-8 max-w-2xl text-4xl sm:text-5xl">
            Some days are <span className="fog-word">foggy</span>.
            <br />
            Find out why.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-soft">
            FoggyBrain is a gentle iPhone app that connects your brain fog to
            sleep, stress, food, and weather — and shows you what actually
            helps.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={APP_STORE_URL}
              className="rounded-full bg-ink px-7 py-3 text-lg text-mist no-underline shadow-sm transition-colors hover:bg-rose"
            >
              Download on the App Store
            </a>
            <p className="text-[0.9rem] text-soft">
              Free to use. No account. Your data stays yours.
            </p>
          </div>
        </div>
        <FogWaves />
      </section>

      {/* How it works — a real sequence, so numbers are earned */}
      <section className="bg-gradient-to-b from-[#d5527e] to-[#c2497f] text-mist">
        <div className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="text-3xl">Three small habits. One clearer head.</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {[
              {
                n: "1",
                title: "Log in two taps",
                body: "Rate your fog when you think of it — from the app, a widget, or your Lock Screen. It takes seconds, on purpose.",
              },
              {
                n: "2",
                title: "Let patterns emerge",
                body: "FoggyBrain quietly lines your ratings up against sleep, stress, sugar, exercise, cycle, and even the weather.",
              },
              {
                n: "3",
                title: "See what helps",
                body: "After a couple of weeks, your triggers stop being a mystery. Bring the report to your doctor, or just to yourself.",
              },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-[family-name:var(--font-fraunces)] text-5xl font-semibold text-mist/40">
                  {s.n}
                </p>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="mt-2 text-[0.98rem] text-mist/85">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.85rem] font-bold uppercase tracking-widest text-rose">
            Why this app exists
          </p>
          <h2 className="mt-3 text-3xl">Built by someone who lived in the fog</h2>
          <p className="mt-5 text-lg text-soft">
            FoggyBrain wasn&apos;t designed in a boardroom. It was built during
            a long COVID recovery, by someone who needed it — and couldn&apos;t
            find it.
          </p>
          <Link
            href="/story"
            className="mt-6 inline-block text-rose underline decoration-[#f7a8b8] decoration-2 hover:decoration-rose"
          >
            Read our story
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl">Understand your fog</h2>
          <Link
            href="/articles"
            className="shrink-0 text-rose underline decoration-[#f7a8b8] decoration-2 hover:decoration-rose"
          >
            All articles
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group rounded-3xl border border-line bg-white/70 p-6 no-underline transition-shadow hover:shadow-[0_10px_30px_rgba(42,33,64,0.08)]"
            >
              <p className="text-[0.8rem] font-bold uppercase tracking-wide text-rose">
                {a.category}
              </p>
              <h3 className="mt-2 text-xl text-ink group-hover:text-rose transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 text-[0.95rem] text-soft">{a.description}</p>
              <p className="mt-4 text-[0.85rem] text-soft">
                {a.readMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Privacy strip */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-blush px-8 py-10 text-center">
          <h2 className="text-2xl">Private by design</h2>
          <p className="mx-auto mt-3 max-w-xl text-soft">
            No account. No ads. No trackers. Your data lives on your iPhone and
            in your own iCloud — never on our servers, because we don&apos;t
            have any. Even the AI insights run entirely on your device.
          </p>
          <Link
            href="/privacy"
            className="mt-4 inline-block text-rose underline decoration-[#f7a8b8] decoration-2 hover:decoration-rose"
          >
            Read the privacy policy
          </Link>
        </div>
      </section>
    </>
  );
}
