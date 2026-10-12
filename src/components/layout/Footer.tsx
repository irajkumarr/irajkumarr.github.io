import { ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>
            &copy; {currentYear} {PORTFOLIO_DATA.personal.name}
          </p>

          <div className="flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
