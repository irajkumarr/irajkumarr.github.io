import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function Education() {
  return (
    <SectionContainer id="education" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Academic Foundation"
        title="Education"
        description="Formal computer science education and university studies."
      />

      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <Card key={idx} hoverEffect className="bg-surface/70 border-surface-border p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-foreground/80">
                      {edu.institution} • <span className="text-accent">{edu.affiliation}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {edu.period}
                  </span>
                </div>
              </div>

              <Badge variant="accent" size="sm" className="self-start sm:self-auto">
                {edu.status}
              </Badge>
            </div>

            <div className="mt-4 pt-4 border-t border-surface-border/60 text-xs text-muted-foreground flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>
                Focus on Data Structures, Database Systems, Object-Oriented Analysis, Network Protocols & Operating Systems.
              </span>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
