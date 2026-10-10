import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for the FoggyBrain iOS app.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections: { h: string; body: string[] }[] = [
  {
    h: "The short version",
    body: [
      "Your data belongs to you and stays with you. FoggyBrain has no accounts, no analytics, no ads, and no third-party trackers. We never see your data — it lives on your device and, if you have iCloud enabled, in your personal private iCloud storage that only you can access.",
    ],
  },
  {
    h: "What the app stores",
    body: [
      "Your entries — brain fog ratings, lifestyle factors (sleep, hydration, exercise, stress, and any custom factors you create), notes, and lifestyle-change experiments you track. Your settings — preferences such as which data types to sync and reminder times.",
      "This data is stored in the app's database on your device. If your device has iCloud enabled, it syncs to your private iCloud database so it stays available across your devices and restores with your Apple account. This private database is encrypted and accessible only to you — the developer has no access to it and no server of our own.",
    ],
  },
  {
    h: "Apple Health",
    body: [
      "Connecting Apple Health is optional and access is read-only — FoggyBrain never writes anything to Health. If you connect it, the app reads daily summaries of the types you approve (such as sleep, steps, heart rate variability, resting heart rate, mindful minutes, water, caffeine, blood pressure, and menstrual cycle) to correlate them with your brain fog on your device.",
      "Health data is never transmitted to the developer or to any third party, and is never stored in iCloud. You can revoke access at any time in iOS Settings → Privacy & Security → Health.",
    ],
  },
  {
    h: "Location & weather",
    body: [
      "If you enable weather tracking, FoggyBrain requests your approximate (city-level) location and uses it only to fetch local weather from the Apple Weather service. Your location is used in the moment and never stored. Only the resulting weather values (air pressure and daily high temperature) are saved alongside your entries. You can turn this off at any time in the app's settings.",
    ],
  },
  {
    h: "On-device AI",
    body: [
      "AI summaries are generated with Apple Intelligence entirely on your device. Your data is not sent to any cloud AI service.",
    ],
  },
  {
    h: "Purchases",
    body: [
      "Purchases are processed by Apple through the App Store. We never see your payment details. The app stores only whether Pro is unlocked.",
    ],
  },
  {
    h: "Notifications",
    body: [
      "Reminders are scheduled locally on your device. No notification data leaves your device.",
    ],
  },
  {
    h: "This website",
    body: [
      "foggybrain.app is a static website. It sets no cookies and collects no personal data, with two exceptions. First, we use Vercel Web Analytics to see aggregate traffic (like which pages get visited and roughly how many people are viewing them) — it's cookieless and doesn't track you individually or across other sites; see vercel.com/legal/privacy-policy for details. Second, if you joined the beta waitlist, the email address you entered was collected and stored by our email provider, Kit, solely to send you updates about FoggyBrain — see kit.com/privacy for details, and you can unsubscribe at any time via the link in any email we send.",
    ],
  },
  {
    h: "Export & deletion",
    body: [
      "You can export your data (CSV or PDF report) at any time — exports go only where you choose to send them. To delete your data, delete your entries in the app or delete the app itself; iCloud-synced data can be removed via iOS Settings → your name → iCloud → Manage Account Storage.",
    ],
  },
  {
    h: "Not medical advice",
    body: [
      "FoggyBrain is a personal tracking tool. It does not provide medical advice, diagnosis, or treatment. Always consult a healthcare provider for medical concerns.",
    ],
  },
  {
    h: "Changes & contact",
    body: [
      "If this policy changes, the updated version will be posted here with a new effective date. Questions? Email juangrafista@icloud.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-14">
      <h1 className="text-4xl">Privacy policy</h1>
      <p className="mt-3 text-soft">Effective July 19, 2026</p>
      <div className="prose-fog mt-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
