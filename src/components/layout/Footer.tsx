import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface/30 backdrop-blur-xs py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-surface-border/60">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sm tracking-wider text-foreground">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-accent/10 text-accent font-mono">
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
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>© {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>rajkumartimalsina.me</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
