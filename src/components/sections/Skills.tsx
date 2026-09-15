import { Code2, Server, Database, Wrench, ShieldCheck } from "lucide-react";
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
        eyebrow="Technical Arsenal"
        title="Skills & Technologies"
        description="Core programming languages, application frameworks, databases, and architectural patterns used across production systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skillCategories.map((group, idx) => {
          const isFullSpan = idx === PORTFOLIO_DATA.skillCategories.length - 1;

          return (
            <Card
              key={group.category}
              className={`bg-surface/70 border-surface-border flex flex-col justify-between ${
                isFullSpan ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-surface-border/60">
                  <div className="p-1.5 rounded-md bg-accent/10">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-surface-border bg-surface hover:border-accent/40 text-xs font-mono text-foreground/90 transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="font-medium">{skill.name}</span>
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
