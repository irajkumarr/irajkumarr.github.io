import { ArrowRight, Download, Mail, Smartphone, Server, Layers } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-6">
          {/* Availability / Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-surface/70 backdrop-blur-xs text-xs font-mono text-muted-foreground animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-foreground/90 font-medium">
              {PORTFOLIO_DATA.personal.availability}
            </span>
          </div>

          {/* Headline & Title */}
          <div className="space-y-3 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-accent">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>

            <p className="text-lg sm:text-2xl font-medium text-foreground/80 tracking-tight">
              {PORTFOLIO_DATA.personal.headline}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl pt-2">
              {PORTFOLIO_DATA.personal.bio}
            </p>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl pt-2">
            <div className="flex items-center gap-3 p-3 rounded-lg border border-surface-border/70 bg-surface/40">
              <div className="p-2 rounded-md bg-accent/10 text-accent">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Flutter Mobile</p>
                <p className="text-[11px] font-mono text-muted-foreground">BLoC • Riverpod • Clean Arch</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg border border-surface-border/70 bg-surface/40">
              <div className="p-2 rounded-md bg-accent/10 text-accent">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Backend Systems</p>
                <p className="text-[11px] font-mono text-muted-foreground">Node.js • Express • Nest.js</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg border border-surface-border/70 bg-surface/40">
              <div className="p-2 rounded-md bg-accent/10 text-accent">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Data & Cloud</p>
                <p className="text-[11px] font-mono text-muted-foreground">MongoDB • PostgreSQL • FCM</p>
              </div>
            </div>
          </div>

          {/* CTAs and Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects">
              <Button size="lg" className="group">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <a href={PORTFOLIO_DATA.personal.resumeUrl} download>
              <Button variant="secondary" size="lg">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </a>

            <div className="h-6 w-px bg-surface-border hidden sm:block mx-1" />

            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="outline" size="icon" title="GitHub">
                  <Github className="w-4 h-4" />
                </Button>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="outline" size="icon" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </a>

              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} aria-label="Email">
                <Button variant="outline" size="icon" title="Email">
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
