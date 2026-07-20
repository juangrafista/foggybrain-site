import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Help and frequently asked questions for the FoggyBrain app.",
  alternates: {
    canonical: "/support",
  },
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Do I need an account to use FoggyBrain?",
    a: "No. FoggyBrain requires no account and no sign-up. Your data is stored privately on your device and in your own iCloud.",
  },
  {
    q: "Where is my data stored?",
    a: (
      <>
        Your entries are stored on your device and, if iCloud is enabled,
        synced to your private iCloud database that only you can access — we
        have no access and no server. Apple Health access, if you enable it, is
        read-only and optional. See the{" "}
        <Link href="/privacy">privacy policy</Link> for details.
      </>
    ),
  },
  {
    q: "How do I connect Apple Health?",
    a: "You can connect during onboarding, or later in Settings → Health. If you previously denied access, re-enable it in iOS Settings → Privacy & Security → Health → FoggyBrain.",
  },
  {
    q: "Why don't I see AI insights?",
    a: "On-device AI summaries require Apple Intelligence to be enabled in your device Settings, on a supported device. The feature hides automatically when it isn't available.",
  },
  {
    q: "What does FoggyBrain Pro include?",
    a: "Pro unlocks on-device AI insights, the full advanced charts with Apple Health and weather correlations, unlimited custom factors, intervention tracking, and data export (doctor-ready PDF and CSV).",
  },
  {
    q: "How much does Pro cost?",
    a: "You can subscribe monthly or yearly — the yearly plan includes a 7-day free trial — or make a single one-time purchase that unlocks Pro forever. Subscriptions renew automatically and can be cancelled anytime in your Apple ID settings. If you bought Pro as a one-time purchase in an earlier version, you keep everything, forever, at no extra cost.",
  },
  {
    q: "How do I restore my purchase?",
    a: "Go to Settings within the app and tap “Restore Purchases.” Purchases are tied to your Apple ID.",
  },
  {
    q: "What happens if I delete the app?",
    a: "Everything you logged yourself — entries, custom factors, notes, lifestyle changes — is stored in your private iCloud and comes back automatically when you reinstall. Apple Health and weather charts rebuild themselves from Apple Health within a day of reconnecting; only weather history and health summaries older than about three months are not rebuilt. If you want a permanent copy first, export your data (CSV or PDF) from the Charts tab before deleting.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-14">
      <h1 className="text-4xl">Support</h1>
      <p className="mt-4 max-w-xl text-lg text-soft">
        We&apos;re happy to help with any question, bug, or feedback.
      </p>
      <a
        href="mailto:juangrafista@icloud.com?subject=FoggyBrain%20Support"
        className="mt-5 inline-block rounded-full bg-ink px-6 py-2.5 text-mist no-underline transition-colors hover:bg-rose"
      >
        Email us
      </a>

      <h2 className="mt-14 text-2xl">Frequently asked questions</h2>
      <div className="mt-6 flex flex-col gap-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-line bg-white/70 px-5 py-4"
          >
            <summary className="cursor-pointer list-none font-bold marker:content-none">
              {f.q}
            </summary>
            <div className="mt-2 text-[0.98rem] text-soft">{f.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
