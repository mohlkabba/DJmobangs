import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  variant?: "warm" | "cool" | "deep";
  className?: string;
  caption?: string;
  index?: number;
  src?: string;
  alt?: string;
  objectPosition?: string;
  /** Hide the text overlay — for small tiles that provide their own caption. */
  plain?: boolean;
};

const variants = {
  warm: "from-[#3a1d0a] via-[#1a0e08] to-[#0a0a0a]",
  cool: "from-[#0c1a2e] via-[#0a0f1a] to-[#070707]",
  deep: "from-[#1a0d22] via-[#0c080f] to-[#050505]",
};

/**
 * PLACEHOLDER — replace with real DJ Mobangs photography.
 * Renders an atmospheric gradient block with a subtle radial light source
 * so the layout looks intentional even before assets arrive.
 */
export function PlaceholderImage({
  label,
  variant = "warm",
  className,
  caption,
  index,
  src,
  alt,
  objectPosition = "center",
  plain = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        variants[variant],
        className
      )}
    >
      {src && (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      )}
      {src && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10" />
      )}
      {/* radial light pool */}
      <div
        className={cn("absolute inset-0", src && "opacity-50 mix-blend-screen")}
        style={{
          background:
            "radial-gradient(60% 60% at 30% 40%, rgba(229,179,88,0.18) 0%, rgba(229,179,88,0) 60%)",
        }}
      />
      {/* faint grid */}
      <div
        className={cn("absolute inset-0", src ? "opacity-[0.04]" : "opacity-[0.07]")}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* caption */}
      {!plain && (
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between text-[10px] font-mono uppercase tracking-wide3 text-bone/60">
            <span>DJ_MOBANGS / {label.toUpperCase()}</span>
            {index !== undefined && (
              <span>
                {String(index).padStart(2, "0")} — IMG
              </span>
            )}
          </div>
          <div>
            <p className="display text-3xl md:text-4xl text-bone/95">{label}</p>
            {caption && (
              <p className="editorial-italic text-bone/55 mt-1">{caption}</p>
            )}
          </div>
        </div>
      )}
      {/* corner ticks */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/60" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/60" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/60" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/60" />
    </div>
  );
}
