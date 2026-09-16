"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ThemeToggle } from "../ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "top",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "resume",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Resume", href: "#resume", id: "resume" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-surface-border/80 shadow-xs py-2"
          : "bg-transparent border-b border-transparent py-4",
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Brand */}
          <Link
            href="#top"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
          >
            <div className="w-9 h-9 rounded-xl bg-surface/90 border border-surface-border group-hover:border-accent/60 flex items-center justify-center font-mono font-bold text-xs tracking-wider text-foreground shadow-2xs group-hover:shadow-glow/20 transition-all duration-300">
              <span className="text-accent">&lt;</span>
              <span>RT</span>
              <span className="text-accent">/&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-foreground group-hover:text-accent transition-colors">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground -mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                Flutter & Backend
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Floating Dock */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/75 border border-surface-border/80 rounded-full px-2.5 py-1 backdrop-blur-md shadow-subtle">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200",
                    isActive
                      ? "bg-foreground text-background font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-hover/80",
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Socials + Theme + Mobile Button */}
          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-xl border border-surface-border bg-surface/80 hover:bg-surface-hover hover:border-accent/40 text-foreground/80 hover:text-foreground transition-all duration-200"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-xl border border-surface-border bg-surface/80 hover:bg-surface-hover hover:border-accent/40 text-foreground/80 hover:text-foreground transition-all duration-200"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <ThemeToggle className="rounded-xl" />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border border-surface-border bg-surface/90 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-accent" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border/90 bg-background/95 backdrop-blur-xl px-5 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between",
                  activeSection === item.id
                    ? "bg-surface border border-accent/30 text-accent font-semibold"
                    : "text-muted-foreground hover:bg-surface/60 hover:text-foreground",
                )}
              >
                <span>{item.name}</span>
                {activeSection === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-surface-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-surface-border bg-surface text-foreground"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-surface-border bg-surface text-foreground"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Raj_Kumar_Timalsina_Resume.pdf"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
