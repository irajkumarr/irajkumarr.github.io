"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Sparkles, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { CopyButton } from "../ui/CopyButton";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject || `Inquiry from ${name || "Portfolio Visitor"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatus("ready");
  };

  return (
    <SectionContainer id="contact" className="border-t border-surface-border/60">
      <SectionHeading
        eyebrow="Direct Communication"
        title="Get In Touch"
        description="Whether you have an engineering opportunity, a Flutter project to build, or want to discuss backend architectures, let's connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contacts & Social Cards */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="bg-surface/85 border-surface-border p-6 sm:p-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-bold text-lg text-foreground">
                  Contact Channels
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct channels to reach me for full-time opportunities, contracts, and software engineering consultations.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Email Card */}
              <div className="p-3.5 rounded-xl border border-surface-border bg-surface/60 space-y-2 hover:border-accent/40 transition-colors shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                    <span>Email Address</span>
                  </div>
                  <CopyButton text={PORTFOLIO_DATA.personal.email} label="Copy" />
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-sm font-semibold text-foreground hover:text-accent transition-colors block font-mono break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-3.5 rounded-xl border border-surface-border bg-surface/60 space-y-2 hover:border-accent/40 transition-colors shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    <span>Phone / WhatsApp</span>
                  </div>
                  <CopyButton text={PORTFOLIO_DATA.personal.phone} label="Copy" />
                </div>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-semibold text-foreground hover:text-accent transition-colors block font-mono"
                >
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded-xl border border-surface-border bg-surface/60 space-y-1 hover:border-accent/40 transition-colors shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Base Location</span>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {PORTFOLIO_DATA.personal.location}
                </p>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="pt-3 border-t border-surface-border/60">
              <span className="text-xs font-mono uppercase text-muted-foreground font-semibold block mb-3">
                Verified Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-surface-border bg-surface hover:bg-surface-hover hover:border-accent/40 text-xs font-mono text-foreground transition-all shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-accent" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-surface-border bg-surface hover:bg-surface-hover hover:border-accent/40 text-xs font-mono text-foreground transition-all shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-accent" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Interactive Message Composer Form */}
        <div className="lg:col-span-7">
          <Card className="bg-surface/85 border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs text-muted-foreground">
                  Composes a structured message and connects directly via email.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-foreground/80 font-medium"
                  >
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-surface-border bg-surface/90 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-foreground/80 font-medium"
                  >
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-surface-border bg-surface/90 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-foreground/80 font-medium"
                >
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Opportunity / Flutter App / Backend Consultation"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-border bg-surface/90 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-foreground/80 font-medium"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {message.length} characters
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Raj, I reviewed your Flutter and backend portfolio and would like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-border bg-surface/90 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-y"
                />
              </div>

              <Button type="submit" size="md" className="w-full sm:w-auto gap-2 shadow-glow/20">
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </Button>

              {status === "ready" && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2.5 animate-fade-in">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client has been prepared with your message!</span>
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
