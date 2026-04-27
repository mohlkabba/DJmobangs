import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function PageHeader({ index, eyebrow, title, description, className }: Props) {
  return (
    <header
      className={cn(
        "relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden border-b border-bone/10",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 20%, rgba(229,179,88,0.12) 0%, rgba(229,179,88,0) 60%)",
        }}
      />
      <div className="container-px mx-auto max-w-[1500px]">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-mono text-gold tracking-wide2">
                {index}
              </span>
              <span className="hairline flex-1 max-w-[120px]" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 className="display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-balance animate-fade-up">
              {title}
            </h1>
          </div>
          {description && (
            <div className="col-span-12 lg:col-span-4 lg:pl-6 animate-fade-up delay-200">
              <p className="text-bone/70 leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
