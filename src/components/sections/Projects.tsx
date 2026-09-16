"use client";

import { useState } from "react";
import { ExternalLink, Layers, Sparkles, CheckCircle2, ArrowRight, Smartphone, Server, Database, Shield } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "flutter" | "fullstack">("all");

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === "flutter") return project.technologies.includes("Flutter");
    if (activeFilter === "fullstack") return project.badge?.toLowerCase().includes("full stack") || project.featured;
    return true;
  });

  return (
    <SectionContainer id="projects" className="border-t border-surface-border/60">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Production Engineering"
          title="Featured Projects"
          description="Cross-platform mobile applications and REST backend services architected with Clean Architecture, state isolation, and real-time cloud capabilities."
          className="mb-0"
        />

        {/* Project Category Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-surface-border self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFilter === "all"
                ? "bg-foreground text-background font-medium shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({PORTFOLIO_DATA.projects.length})
          </button>
          <button
            onClick={() => setActiveFilter("flutter")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFilter === "flutter"
                ? "bg-foreground text-background font-medium shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Mobile & Flutter
          </button>
          <button
            onClick={() => setActiveFilter("fullstack")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFilter === "fullstack"
                ? "bg-foreground text-background font-medium shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Full-Stack
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map((project, index) => {
          const isPrimary = project.id === "e-learning-platform";

          return (
            <Card
              key={project.id}
              hoverEffect
              glow={isPrimary}
              className={`relative overflow-hidden bg-surface/85 border-surface-border transition-all duration-300 ${
                isPrimary ? "lg:p-8 border-accent/40 shadow-card" : "p-6 sm:p-7"
              }`}
            >
              <div className="flex flex-col space-y-6">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <Badge variant={isPrimary ? "accent" : "default"} size="sm">
                          {isPrimary && <Sparkles className="w-3 h-3 mr-1 text-accent" />}
                          {project.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm sm:text-base font-medium text-foreground/85">
                      {project.tagline}
                    </p>
                  </div>

                  {/* External Links CTA */}
                  <div className="flex items-center gap-2.5 self-start sm:self-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                      >
                        <Button variant="secondary" size="sm" className="gap-1.5 font-mono">
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
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
                          <span>Live Demo</span>
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem Solved Callout Box */}
                <div className="p-4 rounded-xl bg-surface-hover/70 border border-surface-border/90 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-accent font-mono uppercase tracking-wider text-[11px] mb-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Problem & Solution Context</span>
                  </div>
                  <p className="text-foreground/85 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Features & Architecture Deliverables */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    Key Features & Technical Implementations:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-surface-border/60">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-muted-foreground mr-1 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-accent" />
                      Tech:
                    </span>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="tech" size="sm">
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
