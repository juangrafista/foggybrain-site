const styles: Record<string, { label: string; ring: string }> = {
  tip: { label: "Worth trying", ring: "border-[#ee7e9b]" },
  info: { label: "Good to know", ring: "border-[#b9a7d8]" },
  warning: { label: "Take care", ring: "border-[#e8756a]" },
};

export default function Callout({
  type = "info",
  children,
}: {
  type?: "tip" | "info" | "warning";
  children: React.ReactNode;
}) {
  const s = styles[type] ?? styles.info;
  return (
    <aside className={`my-8 rounded-2xl border-l-4 ${s.ring} bg-blush px-5 py-4`}>
      <p className="mb-1 text-[0.8rem] font-bold uppercase tracking-wide text-soft">
        {s.label}
      </p>
      <div className="text-[0.98rem] [&>p]:mb-0">{children}</div>
    </aside>
  );
}
