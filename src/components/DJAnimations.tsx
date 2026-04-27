import { cn } from "@/lib/utils";

/* ─────────── Spinning turntable with tonearm + pulse ring ─────────── */
export function Turntable({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square select-none", className)} aria-hidden>
      {/* outer pulse rings */}
      <span className="absolute inset-0 rounded-full border border-gold/30 animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full border border-gold/20 animate-pulse-ring [animation-delay:0.8s]" />
      <span className="absolute inset-0 rounded-full border border-gold/15 animate-pulse-ring [animation-delay:1.6s]" />

      {/* platter base */}
      <div className="absolute inset-[6%] rounded-full bg-ink-700 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),inset_0_0_60px_rgba(0,0,0,0.6)]" />

      {/* spinning vinyl */}
      <div className="absolute inset-[10%] rounded-full overflow-hidden animate-spin-vinyl">
        {/* grooves */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              repeating-radial-gradient(circle at center,
                #0a0a0a 0px,
                #0a0a0a 2px,
                #1a1a1a 2px,
                #1a1a1a 3px),
              radial-gradient(circle at 35% 35%, rgba(229,179,88,0.15), transparent 50%)`,
          }}
        />
        {/* center label */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] h-[34%] rounded-full bg-gold flex items-center justify-center"
          style={{
            boxShadow: "0 0 30px rgba(229,179,88,0.4)",
          }}
        >
          <div className="w-[14%] h-[14%] rounded-full bg-ink" />
          <span className="absolute font-mono text-[8px] sm:text-[10px] text-ink/80 tracking-wide3 -rotate-12 top-2">
            33⅓ RPM
          </span>
          <span className="absolute font-mono text-[8px] sm:text-[10px] text-ink/80 tracking-wide3 rotate-12 bottom-2">
            MOBANGS
          </span>
        </div>
      </div>

      {/* tonearm — pivots from upper-right */}
      <div
        className="absolute top-[8%] right-[6%] w-[55%] h-[3%] origin-right animate-tonearm"
        style={{ transformOrigin: "100% 50%" }}
      >
        {/* arm */}
        <div className="absolute inset-y-0 left-[12%] right-0 bg-bone/80" />
        {/* pivot */}
        <div className="absolute -right-1 -top-1.5 w-4 h-4 rounded-full bg-gold border-2 border-ink shadow-[0_0_12px_rgba(229,179,88,0.6)]" />
        {/* counterweight */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-ink-500 border border-bone/40" />
        {/* headshell + needle */}
        <div className="absolute -left-1 -top-2 w-4 h-5 bg-bone/90 rounded-sm">
          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-px h-1.5 bg-gold" />
        </div>
      </div>

      {/* corner BPM readout */}
      <div className="absolute -bottom-2 left-2 font-mono text-[10px] text-gold/80 tracking-wide2">
        128.0 BPM
      </div>
    </div>
  );
}

/* ─────────── Animated equalizer bars ─────────── */
export function Equalizer({
  bars = 18,
  className,
}: {
  bars?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-end gap-[3px] h-12 sm:h-14",
        className
      )}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        // pseudo-random but deterministic delays/durations
        const delay = ((i * 73) % 900) - 450;
        const dur = 700 + ((i * 137) % 700);
        const heightPct = 40 + ((i * 53) % 60);
        return (
          <span
            key={i}
            className="block w-[6px] sm:w-[7px] origin-bottom bg-gradient-to-t from-gold-deep via-gold to-gold-light animate-eq"
            style={{
              height: `${heightPct}%`,
              animationDelay: `${delay}ms`,
              animationDuration: `${dur}ms`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─────────── Looping waveform line ─────────── */
export function Waveform({ className }: { className?: string }) {
  // Build a sine-wave-ish path tiled twice for seamless loop
  const points: string[] = [];
  const w = 1200;
  const h = 60;
  const segs = 80;
  for (let i = 0; i <= segs; i++) {
    const x = (i / segs) * w;
    const y =
      h / 2 +
      Math.sin(i * 0.6) * 18 +
      Math.sin(i * 1.7) * 8 +
      Math.sin(i * 0.27) * 6;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const path = `M ${points.join(" L ")}`;

  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden>
      <div className="flex w-[200%] animate-wave">
        {[0, 1].map((k) => (
          <svg
            key={k}
            viewBox={`0 0 ${w} ${h}`}
            preserveAspectRatio="none"
            className="w-1/2 h-full shrink-0"
          >
            <defs>
              <linearGradient id={`wave-grad-${k}`} x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(229,179,88,0)" />
                <stop offset="20%" stopColor="rgba(229,179,88,0.9)" />
                <stop offset="80%" stopColor="rgba(229,179,88,0.9)" />
                <stop offset="100%" stopColor="rgba(229,179,88,0)" />
              </linearGradient>
            </defs>
            <path
              d={path}
              fill="none"
              stroke={`url(#wave-grad-${k})`}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d={path}
              fill="none"
              stroke="rgba(245,241,232,0.2)"
              strokeWidth="0.5"
              transform="translate(0,3)"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
