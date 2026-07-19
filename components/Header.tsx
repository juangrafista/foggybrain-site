import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/articles", label: "Articles" },
  { href: "/story", label: "Our story" },
  { href: "/support", label: "Support" },
];

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-5xl px-6 py-5 flex items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image
          src="/app-icon.png"
          alt=""
          width={36}
          height={36}
          className="rounded-[10px]"
          priority
        />
        <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-ink">
          FoggyBrain
        </span>
      </Link>
      <nav className="flex items-center gap-5 text-[0.95rem]">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-soft hover:text-ink transition-colors no-underline"
          >
            {l.label}
          </Link>
        ))}
        <a
          href="https://apps.apple.com/app/foggybrain"
          className="rounded-full bg-ink px-4 py-1.5 text-mist no-underline hover:bg-rose transition-colors"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
