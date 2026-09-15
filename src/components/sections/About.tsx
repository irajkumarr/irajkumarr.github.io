import { CheckCircle2, GraduationCap, MapPin, Briefcase } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export function About() {
  return (
    <SectionContainer id="about" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Background & Focus"
        title="About Me"
        description="A look into my engineering philosophy, background, and core focus areas."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Narrative */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-xl font-semibold text-foreground tracking-tight">
            {PORTFOLIO_DATA.about.title}
          </h3>

          <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <div className="flex items-center gap-3 p-3 rounded-lg border border-surface-border bg-surface/50">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <div className="text-xs">
                <p className="text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">{PORTFOLIO_DATA.personal.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg border border-surface-border bg-surface/50">
              <GraduationCap className="w-4 h-4 text-accent shrink-0" />
              <div className="text-xs">
                <p className="text-muted-foreground">Education</p>
                <p className="font-semibold text-foreground">B.Sc. CSIT (TU)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg border border-surface-border bg-surface/50">
              <Briefcase className="w-4 h-4 text-accent shrink-0" />
              <div className="text-xs">
                <p className="text-muted-foreground">Industry Experience</p>
                <p className="font-semibold text-foreground">Supreme IT Solutions</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg border border-surface-border bg-surface/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
              <div className="text-xs">
                <p className="text-muted-foreground">Primary Focus</p>
                <p className="font-semibold text-foreground">Flutter & Backend APIs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Strengths Card */}
        <div className="lg:col-span-5">
          <Card className="border-accent/20 bg-surface/80">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                Technical Strengths
              </h4>
            </div>

            <ul className="space-y-3">
              {PORTFOLIO_DATA.about.technicalStrengths.map((strength, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
