import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Shield,
  Smartphone,
  Server,
  Database,
  Check,
} from "lucide-react";
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
        description="Review my verified career trajectory, technical qualifications, and downloadable PDF resume."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Quick Highlights / Download CTA Card */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <Card
            glow
            className="bg-surface/85 border-surface-border p-6 sm:p-7 flex flex-col justify-between h-full space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Raj Kumar Timalsina
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Software Developer Resume &bull; Updated 2026
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Contains verified documentation of professional engineering at
                Supreme IT Solutions, full-stack cross-platform apps (Learnify,
                Job Portal, Food Delivery), university academics (B.Sc. CSIT),
                and technical competencies.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-foreground/85 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Standard ATS-Friendly PDF Format</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-foreground/85 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Compatible with recruiting tools & all devices</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-foreground/85 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Full contact & verified project repositories</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-surface-border/60">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Raj_Kumar_Timalsina_Resume.pdf"
                className="flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  className="w-full gap-2 shadow-glow/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </Button>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="secondary" size="md" className="w-full gap-2">
                  <ExternalLink className="w-4 h-4 text-accent" />
                  <span>Preview Tab</span>
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Structured Resume Snapshot Card */}
        <div className="lg:col-span-7">
          <Card className="bg-surface/70 border-surface-border p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-surface-border/60">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-accent" />
                Verified Snapshot Overview
              </span>
              <Badge variant="accent" size="sm">
                Latest Credentials
              </Badge>
            </div>

            <div className="space-y-5">
              {/* Experience Summary */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground">
                      Flutter Developer Intern
                    </span>
                    <span className="text-xs font-mono text-emerald-500 font-medium">
                      Aug 2026 – Present
                    </span>
                  </div>
                  <p className="text-xs text-accent font-mono font-medium">
                    DevanaSoft Pvt. Ltd. &bull; Gatthaghar (Onsite)
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                    Developing production cross-platform mobile features in
                    Flutter with responsive state isolation and REST API
                    integrations.
                  </p>
                </div>

                <div className="pt-2.5 border-t border-surface-border/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground/90">
                      Flutter Developer Intern
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      Dec 2025 – Apr 2026
                    </span>
                  </div>
                  <p className="text-xs text-accent/80 font-mono font-medium">
                    Supreme IT Solutions &bull; Remote
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                    Engineered cross-platform mobile features with Clean
                    Architecture & BLoC/Cubit for 3+ client applications.
                  </p>
                </div>
              </div>

              {/* Projects Summary */}
              <div className="pt-4 border-t border-surface-border/60 space-y-2.5">
                <span className="text-xs font-mono uppercase text-muted-foreground font-semibold block">
                  Core Engineering Projects
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl border border-surface-border bg-surface text-xs shadow-2xs">
                    <p className="font-semibold text-foreground">
                      Learnify E-Learning
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                      Flutter &bull; NodeJS &bull; Stripe
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-surface-border bg-surface text-xs shadow-2xs">
                    <p className="font-semibold text-foreground">
                      Rojgari Job Platform
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                      Flutter &bull; Express &bull; JWT
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-surface-border bg-surface text-xs shadow-2xs">
                    <p className="font-semibold text-foreground">
                      Chulesi Food Delivery
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                      Flutter &bull; Express &bull; FCM
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Summary */}
              <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-muted-foreground font-semibold block">
                    University Degree
                  </span>
                  <p className="text-xs font-semibold text-foreground">
                    B.Sc. CSIT &bull; Tribhuvan University (Birendra Campus)
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
