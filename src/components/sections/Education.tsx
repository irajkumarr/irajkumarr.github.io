import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from "lucide-react";
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
        title="Education & Degree"
        description="Formal computer science and information technology university coursework at Tribhuvan University."
      />

      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <Card key={idx} hoverEffect className="bg-surface/80 border-surface-border p-6 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-foreground tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-foreground/85 pt-0.5">
                      {edu.institution} &bull; <span className="text-accent font-semibold">{edu.affiliation}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-muted-foreground font-mono pl-1">
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
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {edu.status}
              </Badge>
            </div>

            <div className="pt-4 border-t border-surface-border/60 text-xs sm:text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed">
              <BookOpen className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>
                Rigorous focus on Core Computer Science Fundamentals: Data Structures & Algorithms, Relational & Distributed Databases, Object-Oriented Analysis, Network Protocols, and Operating Systems.
              </span>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
