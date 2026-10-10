import type { Metadata } from "next";
import AppCallout from "@/components/AppCallout";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "FoggyBrain was built during a long COVID recovery, by someone who needed it and couldn't find it.",
  alternates: {
    canonical: "/story",
  },
};

export default function StoryPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-14">
      <p className="text-[0.85rem] font-bold uppercase tracking-widest text-rose">
        Our story
      </p>
      <h1 className="mt-3 text-4xl">Built by someone who lived in the fog</h1>

      <div className="prose-fog mt-8">
        <p>
          A few years ago, my wife and I both got COVID. We recovered — mostly.
          What stayed behind was harder to explain: the days when reading a
          paragraph took three tries, when words went missing mid-sentence,
          when thinking felt like wading through something thick and grey.
        </p>
        <p>
          If you&apos;ve lived with brain fog, you know the strangest part
          isn&apos;t the fog itself. It&apos;s the unpredictability. Some days
          are nearly clear. Some days are lost. And nobody — not us, not our
          doctors — could say why.
        </p>
        <p>
          So I started writing things down. Sleep. Stress. What we ate. The
          weather, even, because we suspected the pressure headaches
          weren&apos;t a coincidence. Slowly, patterns appeared that no single
          bad day could show us: my fog followed short sleep by two days, not
          one. Hers tracked the barometer.
        </p>
        <p>
          Those notebooks became a spreadsheet, the spreadsheet became an app,
          and the app became FoggyBrain — the tool we wished someone had handed
          us at the start. It doesn&apos;t promise to fix you, because nothing
          honest can promise that. It helps you see your own patterns, gently,
          so the fog stops being a mystery and starts being information.
        </p>
        <p>
          FoggyBrain is built with the constraints of foggy days in mind:
          logging takes two taps, the charts do the remembering for you, and
          there&apos;s a report you can hand to your doctor when describing it
          all feels like too much. And because health data is nobody&apos;s
          business but yours, everything stays on your device and in your own
          iCloud — there are no servers, no accounts, and no trackers.
        </p>
        <p>
          If you&apos;re in the fog right now: it can get better, and you
          aren&apos;t imagining it. I hope this helps you find your way
          through, even a little.
        </p>
        <p>— Juan</p>
      </div>

      <div className="mt-12">
        <AppCallout />
      </div>
    </article>
  );
}
