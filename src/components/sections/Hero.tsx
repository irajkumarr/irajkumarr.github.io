import Image from "next/image";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-10 md:gap-12">
          {/* Narrative & Details */}
          <div className="space-y-6 max-w-2xl flex-1">
            {/* Status & Location */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-surface-border bg-surface text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Available for opportunities</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Raj Kumar Timalsina
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-foreground/80 tracking-tight">
                Full-Stack &amp; Flutter Developer
              </p>
            </div>

            {/* Concise Narrative */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
              Building production-ready cross-platform mobile applications in Flutter and scalable real-time backend systems with Spring Boot, Node.js, Redis, and Clean Architecture. Completing B.Sc. CSIT at Tribhuvan University.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-mono text-xs font-semibold hover:bg-foreground/90 transition-colors"
              >
                <span>Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Raj_Kumar_Timalsina_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border bg-surface hover:bg-surface-hover text-foreground font-mono text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-3 pl-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Authentic Portrait Image */}
          <div className="shrink-0 self-start md:self-center">
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border border-surface-border bg-surface shadow-sm">
              <Image
                src="/avatar-opt.webp"
                alt="Raj Kumar Timalsina"
                width={208}
                height={208}
                priority
                className="w-full h-full object-cover object-top scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
