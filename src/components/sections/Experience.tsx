import { Calendar, MapPin, Building2, Check, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function Experience() {
  return (
    <SectionContainer id="experience" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Work History"
        title="Professional Experience"
        description="Engineering client-facing software applications with production-level reliability and strict quality standards."
      />

      <div className="relative pl-6 sm:pl-8 border-l-2 border-surface-border/80 space-y-12 max-w-4xl">
        {PORTFOLIO_DATA.experience.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 group-hover:bg-accent/20 transition-all duration-300 shadow-2xs" />

            <Card hoverEffect className="relative bg-surface/80 border-surface-border p-6 sm:p-7 space-y-5">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-border/60">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-bold text-lg sm:text-xl text-foreground tracking-tight">
                      {exp.role}
                    </h3>
                    <Badge variant="accent" size="sm">
                      {exp.workType}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-accent" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-foreground/90 bg-surface/90 border border-surface-border px-3 py-1.5 rounded-lg self-start sm:self-auto shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities & Impact */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold block">
                  Key Responsibilities & Deliverables:
                </span>
                <ul className="space-y-2.5">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mr-1 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-accent" />
                  Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="tech" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
