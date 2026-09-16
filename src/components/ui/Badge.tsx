import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "secondary" | "success" | "tech";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-surface border-surface-border text-foreground/85 hover:border-foreground/30 shadow-2xs",
    outline: "bg-transparent border-surface-border/80 text-muted-foreground hover:text-foreground",
    accent: "bg-accent/10 border-accent/30 text-accent font-medium shadow-2xs",
    secondary: "bg-muted/60 border-surface-border/50 text-muted-foreground hover:text-foreground",
    success: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400",
    tech: "bg-surface/90 border-surface-border hover:border-accent/50 text-foreground/90 font-mono tracking-tight",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px] tracking-wide",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border font-mono transition-all duration-150 select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
