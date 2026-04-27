import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  number?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  number,
  className,
}: Props) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {number && (
          <span className="text-xs font-mono text-gold tracking-wide2">
            {number}
          </span>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      </div>
      <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-bone/70 max-w-xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
