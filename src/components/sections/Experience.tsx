import { Briefcase, Calendar, MapPin, Building2, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function Experience() {
  return (
    <SectionContainer id="experience" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Career Journey"
        title="Work Experience"
        description="Professional engineering experience building client-facing software applications."
      />

      <div className="relative pl-6 sm:pl-8 border-l border-surface-border/80 space-y-12">
        {PORTFOLIO_DATA.experience.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-accent group-hover:scale-125 transition-transform" />

            <Card hoverEffect className="relative bg-surface/70">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-surface-border/60">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg sm:text-xl text-foreground">
                      {exp.role}
                    </span>
                    <Badge variant="accent" size="sm">
                      {exp.workType}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1.5 text-foreground font-medium">
                      <Building2 className="w-3.5 h-3.5 text-accent" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-surface/80 border border-surface-border px-2.5 py-1 rounded-md self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="py-4 space-y-2.5">
                <ul className="space-y-2">
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

              {/* Technologies */}
              <div className="pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mr-1">
                  Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
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
