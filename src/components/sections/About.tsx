import {
  CheckCircle2,
  GraduationCap,
  MapPin,
  Briefcase,
  Sparkles,
  Terminal,
  Shield,
  Layers,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export function About() {
  return (
    <SectionContainer id="about" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Engineering Philosophy"
        title="About & Background"
        description="A look into my engineering principles, domain specializations, and academic foundation."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-snug">
              {PORTFOLIO_DATA.about.title}
            </h3>

            <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Quick Identity Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-surface-border bg-surface/70 shadow-2xs hover:border-accent/40 transition-colors">
              <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground font-mono">Location</p>
                <p className="font-semibold text-foreground text-sm">
                  {PORTFOLIO_DATA.personal.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-surface-border bg-surface/70 shadow-2xs hover:border-accent/40 transition-colors">
              <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground font-mono">Education</p>
                <p className="font-semibold text-foreground text-sm">
                  B.Sc. CSIT (Tribhuvan Univ.)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-surface-border bg-surface/70 shadow-2xs hover:border-accent/40 transition-colors">
              <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground font-mono">Industry Experience</p>
                <p className="font-semibold text-foreground text-sm">
                  DevanaSoft &bull; Supreme IT
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-surface-border bg-surface/70 shadow-2xs hover:border-accent/40 transition-colors">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground font-mono">
                  Specialization
                </p>
                <p className="font-semibold text-foreground text-sm">
                  Flutter & REST Backends
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Core Architectural Strengths Bento */}
        <div className="lg:col-span-5 space-y-4">
          <Card
            glow
            className="bg-surface/85 border-surface-border p-6 space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-surface-border/60">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-accent/10 text-accent">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Core Engineering Strengths
                </h4>
              </div>
              {/* <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                Verified
              </span> */}
            </div>

            <ul className="space-y-3">
              {PORTFOLIO_DATA.about.technicalStrengths.map((strength, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-foreground/85 leading-snug group"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-accent" /> Clean Code &
                Patterns
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent" /> High Performance
              </span>
            </div>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
