"use client";

import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-surface-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Selected Work
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            A selection of production-grade mobile applications and backend services built with Flutter and Node/NestJS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-surface-border bg-surface p-6 sm:p-7 hover:border-foreground/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground pt-1">
                      {project.badge || "Project"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        aria-label={`${project.title} Source Code`}
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        aria-label={`${project.title} Live Preview`}
                        title="Live Preview"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed font-sans">
                  {project.tagline}
                </p>

                {project.problemSolved && (
                  <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-surface-border pl-3">
                    {project.problemSolved}
                  </p>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded border border-surface-border bg-surface-hover/50 text-foreground/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
