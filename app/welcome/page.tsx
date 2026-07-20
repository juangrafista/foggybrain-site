import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/kWXVb9ST";

export const metadata: Metadata = {
  title: "You're in",
  description: "Join the FoggyBrain TestFlight beta.",
  alternates: {
    canonical: "/welcome",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function WelcomePage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 text-center">
      <Image
        src="/app-icon.png"
        alt="The FoggyBrain app icon: a calm face resting under soft pink waves"
        width={80}
        height={80}
        className="mx-auto rounded-[18px] shadow-[0_14px_40px_rgba(213,82,126,0.35)]"
        priority
      />
      <p className="mt-6 text-[0.85rem] font-bold uppercase tracking-widest text-rose">
        Email confirmed
      </p>
      <h1 className="mt-3 text-4xl">You&apos;re in</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-soft">
        Thanks for confirming — you&apos;re on the list. Tap below to join the
        FoggyBrain beta on TestFlight.
      </p>

      <a
        href={TESTFLIGHT_URL}
        className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-lg text-mist no-underline shadow-sm transition-colors hover:bg-rose"
      >
        Join the TestFlight beta
      </a>

      <div className="mx-auto mt-12 max-w-md rounded-3xl bg-blush px-7 py-8 text-left">
        <h2 className="text-lg">First time with TestFlight?</h2>
        <p className="mt-2 text-[0.98rem] text-soft">
          TestFlight is Apple&apos;s official app for beta testing. If you
          don&apos;t have it installed yet, the link above will prompt you to
          install it from the App Store first — that&apos;s expected, just
          follow the steps. Once TestFlight is installed, it&apos;ll take you
          straight to FoggyBrain.
        </p>
      </div>

      <p className="mx-auto mt-8 max-w-md text-[0.9rem] text-soft">
        Free to use. No account. Your data stays on your device — see the{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>

      <Link
        href="/"
        className="mt-10 inline-block text-rose underline decoration-[#f7a8b8] decoration-2 hover:decoration-rose"
      >
        Back to FoggyBrain
      </Link>
    </div>
  );
}
