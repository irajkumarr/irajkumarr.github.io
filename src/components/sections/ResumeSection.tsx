import { FileText, Download, ExternalLink, CheckCircle, Smartphone, Server, Database, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function ResumeSection() {
  return (
    <SectionContainer id="resume" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Curriculum Vitae"
        title="Resume & Credentials"
        description="Download an official copy of my resume or preview the structured summary below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Quick Highlights / Download CTA Card */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <Card className="bg-surface/80 border-surface-border p-6 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Raj Kumar Timalsina
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Resume • Updated 2026
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Contains detailed professional experience as a Flutter Developer Intern at Supreme IT Solutions, projects (E-Learning Platform, Job Portal, Food Delivery), university education at TU, and verified technical competencies.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-foreground/80 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Format: PDF Document</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground/80 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Compatible with ATS & standard viewers</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-surface-border/60">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Raj_Kumar_Timalsina_Resume.pdf"
                className="flex-1"
              >
                <Button variant="primary" size="md" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </Button>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="secondary" size="md" className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF</span>
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Structured Resume Snapshot Card */}
        <div className="lg:col-span-7">
          <Card className="bg-surface/50 border-surface-border p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-surface-border/60">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Resume Overview
              </span>
              {/* <Badge variant="accent" size="sm">
                Verified Information
              </Badge> */}
            </div>

            <div className="space-y-4">
              {/* Experience summary */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    Flutter Developer Intern
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    Dec 2025 – Apr 2026
                  </span>
                </div>
                <p className="text-xs text-accent font-medium">Supreme IT Solutions • Kathmandu (Remote)</p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                  Built cross-platform Flutter features with Clean Architecture and BLoC/Cubit for 3+ client applications. Implemented JWT authentication and Dio REST APIs.
                </p>
              </div>

              {/* Projects summary */}
              <div className="pt-3 border-t border-surface-border/60 space-y-2">
                <span className="text-xs font-mono uppercase text-muted-foreground font-semibold block">
                  Core Projects
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-lg border border-surface-border bg-surface text-xs">
                    <p className="font-semibold text-foreground">E-Learning</p>
                    <p className="text-[11px] text-muted-foreground font-mono">Flutter • Node • Stripe</p>
                  </div>
                  <div className="p-2.5 rounded-lg border border-surface-border bg-surface text-xs">
                    <p className="font-semibold text-foreground">Job Portal</p>
                    <p className="text-[11px] text-muted-foreground font-mono">Flutter • MongoDB</p>
                  </div>
                  <div className="p-2.5 rounded-lg border border-surface-border bg-surface text-xs">
                    <p className="font-semibold text-foreground">Food Delivery</p>
                    <p className="text-[11px] text-muted-foreground font-mono">Flutter • Firebase</p>
                  </div>
                </div>
              </div>

              {/* Education summary */}
              <div className="pt-3 border-t border-surface-border/60 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-muted-foreground font-semibold block">
                    Education
                  </span>
                  <p className="text-xs font-semibold text-foreground">
                    B.Sc. CSIT • Tribhuvan University
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  2022 – Present
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
