import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "secondary" | "success";
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
    default: "bg-surface border-surface-border text-foreground/85 hover:border-foreground/20",
    outline: "bg-transparent border-surface-border text-muted-foreground hover:text-foreground",
    accent: "bg-accent/10 border-accent/30 text-accent font-medium",
    secondary: "bg-muted/50 border-transparent text-muted-foreground",
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs tracking-wide",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border font-mono transition-colors duration-150",
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
