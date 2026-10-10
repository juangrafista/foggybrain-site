import { APP_STORE_URL } from "@/lib/appStore";

export default function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-block rounded-full bg-ink px-7 py-3 text-lg text-mist no-underline shadow-sm transition-colors hover:bg-rose ${className}`}
    >
      Download on the App Store
    </a>
  );
}
