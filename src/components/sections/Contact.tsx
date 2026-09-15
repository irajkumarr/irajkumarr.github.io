"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Check } from "lucide-react";
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
      subject || `Message from ${name || "Portfolio Visitor"}`
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
        eyebrow="Get In Touch"
        title="Let's Connect"
        description="Whether you have an opportunity, a project to build, or want to discuss Flutter and backend engineering, my inbox is open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="bg-surface/80 border-surface-border p-6 space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">
                Contact Details
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct channels to reach me for professional inquiries and collaborations.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-3 rounded-lg border border-surface-border bg-surface/50 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                    <span>Email Address</span>
                  </div>
                  <CopyButton text={PORTFOLIO_DATA.personal.email} label="Copy" />
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors block font-mono break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>

              {/* Phone */}
              <div className="p-3 rounded-lg border border-surface-border bg-surface/50 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>Phone Number</span>
                </div>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors block font-mono"
                >
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>

              {/* Location */}
              <div className="p-3 rounded-lg border border-surface-border bg-surface/50 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {PORTFOLIO_DATA.personal.location}
                </p>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-2 border-t border-surface-border/60">
              <span className="text-xs font-mono uppercase text-muted-foreground font-semibold block mb-3">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-surface-border bg-surface hover:bg-surface-hover text-xs font-mono text-foreground transition-colors"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-surface-border bg-surface hover:bg-surface-hover text-xs font-mono text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <Card className="bg-surface/80 border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-accent/10 text-accent">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-muted-foreground">
                  Fills and launches your default email client with formatted message.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-foreground/80"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-foreground/80"
                  >
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-foreground/80"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Opportunity / Collaboration / Flutter Project"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-foreground/80"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Raj, I came across your portfolio and wanted to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-y"
                />
              </div>

              <Button type="submit" size="md" className="w-full sm:w-auto gap-2">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>

              {status === "ready" && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email composer has been opened with the message details.</span>
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
