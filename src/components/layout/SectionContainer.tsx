import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function SectionContainer({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24 scroll-mt-20", className)}
      {...props}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
