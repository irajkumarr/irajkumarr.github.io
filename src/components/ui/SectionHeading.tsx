import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-2",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent font-medium">
          <span className="h-px w-4 bg-accent/60 inline-block" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
