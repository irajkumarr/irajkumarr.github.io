"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
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

      const sections = ["top", "projects", "experience", "skills", "contact"];
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
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-colors duration-200",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-surface-border py-2.5"
          : "bg-transparent border-b border-transparent py-4"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo / Brand */}
          <Link
            href="#top"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <span className="font-mono text-sm font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
              rajkumar.me
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs font-mono uppercase tracking-wider transition-colors",
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume + Socials + Theme + Mobile Button */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Raj_Kumar_Timalsina_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <div className="hidden sm:flex items-center gap-2 border-l border-surface-border pl-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <ThemeToggle className="rounded-lg h-8 w-8" />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg border border-surface-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-background px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-2 text-sm font-mono transition-colors",
                  activeSection === item.id
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-surface-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Raj_Kumar_Timalsina_Resume.pdf"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-foreground hover:underline"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
