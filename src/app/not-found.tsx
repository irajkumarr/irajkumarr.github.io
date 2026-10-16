import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl font-bold font-display text-foreground mb-2">404</h1>
      <p className="text-muted-foreground text-sm font-mono mb-6">Page not found</p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-foreground text-background text-xs font-mono font-medium hover:bg-foreground/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
