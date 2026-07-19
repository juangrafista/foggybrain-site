import Link from "next/link";
import FogWaves from "@/components/FogWaves";

export default function Footer() {
  return (
    <footer className="mt-24">
      <FogWaves />
      <div className="bg-gradient-to-b from-[#d5527e] to-[#a34e8e] text-mist">
        <div className="mx-auto w-full max-w-5xl px-6 pb-10 pt-4">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-fraunces)] text-xl font-semibold">
                FoggyBrain
              </p>
              <p className="mt-1 max-w-sm text-[0.95rem] text-mist/85">
                Track brain fog. Find your patterns. Feel clearer.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
              <Link href="/articles" className="text-mist/90 hover:text-mist">
                Articles
              </Link>
              <Link href="/story" className="text-mist/90 hover:text-mist">
                Our story
              </Link>
              <Link href="/support" className="text-mist/90 hover:text-mist">
                Support
              </Link>
              <Link href="/privacy" className="text-mist/90 hover:text-mist">
                Privacy
              </Link>
            </nav>
          </div>
          <p className="mt-8 text-[0.85rem] text-mist/70">
            Body text is set in Atkinson Hyperlegible, a typeface designed for
            maximum legibility — chosen on purpose for foggy days. FoggyBrain
            does not provide medical advice; always consult a healthcare
            provider for medical concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
