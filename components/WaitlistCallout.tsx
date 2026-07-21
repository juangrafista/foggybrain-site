import Image from "next/image";
import EmailSignupForm from "@/components/EmailSignupForm";

export default function WaitlistCallout() {
  return (
    <aside className="rounded-3xl bg-blush px-7 py-10 text-center">
      <Image
        src="/app-icon.png"
        alt="The FoggyBrain app icon: a calm face resting under soft pink waves"
        width={56}
        height={56}
        className="mx-auto rounded-[14px] shadow-[0_14px_40px_rgba(213,82,126,0.35)]"
      />
      <p className="mt-4 text-[0.8rem] font-bold uppercase tracking-widest text-rose">
        Now in private beta
      </p>
      <h2 className="mt-3 text-xl">Curious what triggers your fog?</h2>
      <p className="mx-auto mt-2 max-w-md text-[0.98rem] text-soft">
        FoggyBrain helps you log symptoms in seconds and shows the patterns
        behind them. Free, private, no account. Join the list and get a
        link to test the app for free.
      </p>
      <div className="mt-5 flex justify-center">
        <EmailSignupForm />
      </div>
    </aside>
  );
}
