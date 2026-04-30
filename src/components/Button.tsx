import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ComponentProps, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(229,179,88,0.5)]",
  ghost: "text-bone hover:text-gold",
  outline:
    "border border-bone/30 text-bone hover:border-gold hover:text-gold hover:bg-gold/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm md:text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  variant = "primary",
  size = "lg",
  href,
  children,
  className,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          <span>{children}</span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            â†’
          </span>
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </button>
  );
}
