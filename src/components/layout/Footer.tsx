import { Mail, ArrowUp, Terminal, Heart, Code2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface/40 backdrop-blur-sm py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-surface-border/60">
          <div className="space-y-2.5 max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="font-mono font-bold text-sm tracking-wider text-foreground">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono font-medium">
                B.Sc. CSIT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Full-Stack & Flutter Developer building cross-platform mobile apps, Clean Architecture systems, and scalable REST backends.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors p-2 rounded-lg border border-surface-border bg-surface/60"
            >
              <Github className="w-4 h-4 text-accent" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors p-2 rounded-lg border border-surface-border bg-surface/60"
            >
              <Linkedin className="w-4 h-4 text-accent" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors p-2 rounded-lg border border-surface-border bg-surface/60"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p className="flex items-center gap-1.5">
            <span>&copy; {currentYear} {PORTFOLIO_DATA.personal.name}. Crafted with Clean Architecture.</span>
          </p>

          <div className="flex items-center gap-5">
            <span className="text-foreground/70">rajkumartimalsina.me</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors px-2.5 py-1 rounded-lg border border-surface-border/80 bg-surface/60 shadow-2xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
