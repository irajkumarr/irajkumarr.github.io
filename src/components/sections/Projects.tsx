import { ExternalLink, Layers, Sparkles, CheckCircle } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function Projects() {
  return (
    <SectionContainer id="projects" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Featured Engineering"
        title="Projects & Architectures"
        description="Full-stack mobile applications and backends architected with Clean Architecture, state management, and real-time cloud services."
      />

      <div className="grid grid-cols-1 gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => {
          const isPrimary = index === 0;

          return (
            <Card
              key={project.id}
              hoverEffect
              className={`relative overflow-hidden bg-surface/70 border-surface-border transition-all ${
                isPrimary ? "lg:p-8 border-accent/30" : "p-6"
              }`}
            >
              <div className="flex flex-col space-y-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <Badge variant={isPrimary ? "accent" : "default"} size="sm">
                          {isPrimary && <Sparkles className="w-3 h-3 mr-1" />}
                          {project.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm sm:text-base font-medium text-foreground/80">
                      {project.tagline}
                    </p>
                  </div>

                  {/* External links */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                      >
                        <Button variant="secondary" size="sm" className="gap-1.5 font-mono">
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Preview`}
                      >
                        <Button variant="primary" size="sm" className="gap-1.5 font-mono">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live</span>
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem Solved Callout */}
                <div className="p-3.5 rounded-lg bg-surface-border/40 border border-surface-border/80 text-xs sm:text-sm">
                  <span className="font-semibold text-accent font-mono uppercase tracking-wider text-[11px] block mb-1">
                    Problem & Solution:
                  </span>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    Key Features & Technical Implementations:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {project.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-foreground/75 leading-relaxed"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2 border-t border-surface-border/60">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-muted-foreground mr-1.5 flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      Tech:
                    </span>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
