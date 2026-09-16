import { Code2, Server, Database, Wrench, ShieldCheck, Terminal, Cpu, GitBranch } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-accent" />;
      case "Frameworks & Libraries":
        return <Server className="w-4 h-4 text-accent" />;
      case "Databases & Cloud":
        return <Database className="w-4 h-4 text-accent" />;
      case "Development Tools & CI/CD":
        return <Wrench className="w-4 h-4 text-accent" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <SectionContainer id="skills" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Technical Matrix"
        title="Skills & Technologies"
        description="Core programming languages, mobile and backend frameworks, cloud databases, and architectural standards."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skillCategories.map((group, idx) => {
          const isFullSpan = idx === PORTFOLIO_DATA.skillCategories.length - 1;

          return (
            <Card
              key={group.category}
              hoverEffect
              className={`bg-surface/80 border-surface-border flex flex-col justify-between p-6 transition-all duration-300 ${
                isFullSpan ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-surface-border/60">
                  <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-foreground">
                      {group.category}
                    </h3>
                    <p className="text-[11px] font-mono text-muted-foreground">
                      {group.skills.length} competencies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Pills Matrix */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-border bg-surface/90 hover:border-accent/50 hover:bg-surface-hover text-xs font-mono text-foreground/90 transition-all duration-200 shadow-2xs group"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                      <span className="font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-muted-foreground/80 bg-surface-border/50 px-1.5 py-0.5 rounded ml-0.5">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
