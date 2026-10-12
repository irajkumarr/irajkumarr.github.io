import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-surface-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Contact &amp; Inquiries
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Available for full-time engineering roles, contract opportunities, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct channels */}
          <div className="rounded-xl border border-surface-border bg-surface p-6 sm:p-7 space-y-5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Direct Channels
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-sm font-semibold text-foreground hover:underline break-all"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-foreground hover:underline"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social and quick links */}
          <div className="rounded-xl border border-surface-border bg-surface p-6 sm:p-7 space-y-5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Profiles &amp; Documents
            </h3>

            <div className="space-y-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-surface-border hover:bg-surface-hover/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium text-foreground">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-surface-border hover:bg-surface-hover/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium text-foreground">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Raj_Kumar_Timalsina_Resume.pdf"
                className="flex items-center justify-between p-3 rounded-lg border border-surface-border hover:bg-surface-hover/50 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">Download Resume (PDF)</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
