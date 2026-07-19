/*
  The signature device: three translucent fog layers drifting at different
  tempos, lifted straight from the wave bands of the app icon. Rendered wider
  than the viewport so the drift animation never exposes an edge.
*/
export default function FogWaves({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative h-28 w-full overflow-hidden sm:h-36 ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        className="wave-drift-1 absolute bottom-0 left-[-5%] h-full w-[115%]"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0,90 C180,40 360,130 600,95 C840,60 1020,120 1200,80 L1200,160 L0,160 Z"
          fill="#f7a8b8"
          opacity="0.45"
        />
      </svg>
      <svg
        className="wave-drift-2 absolute bottom-0 left-[-5%] h-full w-[115%]"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0,110 C240,70 420,140 660,105 C900,72 1080,135 1200,100 L1200,160 L0,160 Z"
          fill="#ee7e9b"
          opacity="0.55"
        />
      </svg>
      <svg
        className="wave-drift-3 absolute bottom-0 left-[-5%] h-full w-[115%]"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0,130 C200,100 440,150 680,122 C920,96 1100,145 1200,120 L1200,160 L0,160 Z"
          fill="#d5527e"
        />
      </svg>
    </div>
  );
}
