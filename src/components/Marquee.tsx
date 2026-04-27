import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: "normal" | "slow";
  divider?: string;
};

export function Marquee({
  items,
  className,
  speed = "normal",
  divider = "✺",
}: MarqueeProps) {
  const animation = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden="true">
      <div className={cn("flex whitespace-nowrap", animation)}>
        {Array.from({ length: 2 }).map((_, dup) => (
          <div
            key={dup}
            className="flex shrink-0 items-center gap-10 pr-10"
          >
            {items.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="text-gold">{divider}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
