import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-surface-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Career &amp; Education
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Experience &amp; Background
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Engineering client-facing software applications and formal computer science university studies.
          </p>
        </div>

        <div className="space-y-8">
          {/* Work Experience */}
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-surface-border bg-surface p-6 sm:p-7 space-y-4 hover:border-foreground/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-surface-border">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base sm:text-lg text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      &bull; {exp.company}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground pt-0.5">
                    {exp.location} ({exp.workType})
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground sm:text-right">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed list-disc list-inside">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="pl-1">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded border border-surface-border bg-surface-hover/50 text-foreground/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Academic Background */}
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-surface-border bg-surface p-6 sm:p-7 space-y-3 hover:border-foreground/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-surface-border">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground pt-0.5">
                    {edu.institution} &bull; {edu.affiliation} ({edu.location})
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground sm:text-right">
                  {edu.period} ({edu.status})
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed font-sans">
                Core coursework in Data Structures &amp; Algorithms, Relational &amp; Distributed Database Systems, Software Engineering, Network Architecture, and Operating Systems.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
