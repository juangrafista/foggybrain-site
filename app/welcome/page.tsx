import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppStoreButton from "@/components/AppStoreButton";

export const metadata: Metadata = {
  title: "You're in",
  description: "Download FoggyBrain on the App Store.",
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
        Thanks for confirming — you&apos;re on the list. FoggyBrain is now
        on the App Store, so you can download it straight away.
      </p>

      <AppStoreButton className="mt-8" />

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
