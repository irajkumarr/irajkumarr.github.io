"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Maximize2, Minimize2, Copy, Check, CornerDownLeft, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isBooted, setIsBooted] = useState(false);
  const defaultBootLines = [
    "Initializing Raj Kumar Timalsina Developer Terminal v1.0.4...",
    "Mounted systems: Flutter BLoC, Node.js REST, MongoDB, Clean Architecture...",
    "Ready. Type 'help' to display available portfolio commands.",
  ];

  const [bootLines, setBootLines] = useState<string[]>(defaultBootLines);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedHint, setCopiedHint] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input whenever modal is open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, bootLines, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDownGlobal = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDownGlobal);
    return () => window.removeEventListener("keydown", handleKeyDownGlobal);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommandExecution = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    const cleanCmd = trimmed.toLowerCase();

    if (!cleanCmd) return;

    // Add to navigation history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Predefined safe client-side command map
    let output: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        output = (
          <div className="space-y-2 py-1 text-xs">
            <p className="text-foreground/90 font-semibold">Available portfolio commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-mono text-muted-foreground">
              <div><span className="text-accent font-semibold">about</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Engineering philosophy & bio</div>
              <div><span className="text-accent font-semibold">whoami</span> &nbsp;&nbsp;&nbsp;&nbsp;- Short professional introduction</div>
              <div><span className="text-accent font-semibold">skills</span> &nbsp;&nbsp;&nbsp;&nbsp;- Technical stack & architectures</div>
              <div><span className="text-accent font-semibold">projects</span> &nbsp;&nbsp;- Production applications with URLs</div>
              <div><span className="text-accent font-semibold">experience</span> - Work history & achievements</div>
              <div><span className="text-accent font-semibold">education</span> &nbsp;- Academic degrees & university</div>
              <div><span className="text-accent font-semibold">contact</span> &nbsp;&nbsp;&nbsp;- Email, phone, and direct channels</div>
              <div><span className="text-accent font-semibold">social</span> &nbsp;&nbsp;&nbsp;&nbsp;- GitHub, LinkedIn, and links</div>
              <div><span className="text-accent font-semibold">resume</span> &nbsp;&nbsp;&nbsp;&nbsp;- View/download PDF resume</div>
              <div><span className="text-accent font-semibold">github</span> &nbsp;&nbsp;&nbsp;&nbsp;- Open GitHub profile in new tab</div>
              <div><span className="text-accent font-semibold">linkedin</span> &nbsp;&nbsp;- Open LinkedIn profile in new tab</div>
              <div><span className="text-accent font-semibold">neofetch</span> &nbsp;&nbsp;- Developer ASCII profile spec</div>
              <div><span className="text-accent font-semibold">date</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Display current date & time</div>
              <div><span className="text-accent font-semibold">pwd</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print virtual working directory</div>
              <div><span className="text-accent font-semibold">ls</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List virtual portfolio sections</div>
              <div><span className="text-accent font-semibold">exit</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Close the terminal modal</div>
              <div><span className="text-accent font-semibold">clear / cls</span> - Clear terminal screen</div>
            </div>
            <p className="text-[11px] text-muted-foreground/70 pt-1">
              Tip: Use <kbd className="px-1.5 py-0.5 rounded bg-surface-border text-foreground font-mono">↑</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-surface-border text-foreground font-mono">↓</kbd> arrows to navigate command history.
            </p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-2 py-1 text-xs leading-relaxed text-foreground/85">
            <p className="font-bold text-sm text-foreground">{PORTFOLIO_DATA.personal.name} — {PORTFOLIO_DATA.personal.headline}</p>
            <p className="text-muted-foreground">{PORTFOLIO_DATA.personal.bio}</p>
            <div className="pt-1">
              <span className="text-accent font-mono font-semibold">Primary Focus Areas:</span>
              <ul className="list-disc list-inside text-muted-foreground pt-1 space-y-0.5">
                {PORTFOLIO_DATA.about.technicalStrengths.slice(0, 4).map((str, idx) => (
                  <li key={idx}>{str}</li>
                ))}
              </ul>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1.5 py-1 text-xs font-mono">
            <p className="text-foreground font-bold text-sm">{PORTFOLIO_DATA.personal.name}</p>
            <p className="text-accent">{PORTFOLIO_DATA.personal.headline}</p>
            <p className="text-muted-foreground">{PORTFOLIO_DATA.personal.subheadline}</p>
            <p className="text-foreground/80 pt-1">
              📍 Location: <span className="text-foreground font-medium">{PORTFOLIO_DATA.personal.location}</span>
            </p>
            <p className="text-foreground/80">
              🎓 Education: <span className="text-foreground font-medium">{PORTFOLIO_DATA.education[0]?.degree} ({PORTFOLIO_DATA.education[0]?.affiliation})</span>
            </p>
            <p className="text-emerald-500 font-semibold pt-0.5">
              ● {PORTFOLIO_DATA.personal.availability}
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-3 py-1 text-xs font-mono">
            <p className="text-foreground/90 font-semibold">Technical Arsenal & Core Stack:</p>
            <div className="space-y-2 text-muted-foreground">
              {PORTFOLIO_DATA.skillCategories.map((cat) => (
                <div key={cat.category} className="border-l-2 border-accent/40 pl-3">
                  <span className="text-foreground font-semibold text-xs block mb-0.5">{cat.category}</span>
                  <span className="text-muted-foreground text-[11px] leading-relaxed">
                    {cat.skills.map((s) => `${s.name}${s.level ? ` (${s.level})` : ""}`).join(" • ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-3 py-1 text-xs font-mono">
            <p className="text-foreground/90 font-semibold">Featured Production & Academic Projects:</p>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.map((proj, idx) => (
                <div key={proj.id} className="p-2.5 rounded-lg border border-surface-border bg-surface/50 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-accent font-bold">[{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}] {proj.title}</span>
                    <div className="flex items-center gap-1.5">
                                            {proj.badge && (
                        <span className="text-[10px] text-muted-foreground bg-surface-border/60 px-1.5 py-0.2 rounded">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                  </div>
                 
                  <p className="text-muted-foreground text-[11px]">{proj.tagline}</p>
                  <p className="text-foreground/80 text-[11px]">
                    <span className="text-muted-foreground">Stack:</span> {proj.technologies.join(", ")}
                  </p>
                  <div className="flex items-center gap-3 pt-1 text-[11px]">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:underline inline-flex items-center gap-1"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 py-1 text-xs font-mono">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between">
                  <span className="text-foreground font-bold">{exp.role}</span>
                  <span className="text-accent text-[11px]">{exp.period}</span>
                </div>
                <p className="text-muted-foreground text-[11px]">{exp.company} • {exp.location} ({exp.workType})</p>
                <ul className="list-disc list-inside text-muted-foreground text-[11px] space-y-1 pt-1">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <p className="text-[11px] text-muted-foreground/80 pt-1">
                  Stack: {exp.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-1.5 py-1 text-xs font-mono">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-foreground font-bold">{edu.degree}</p>
                <p className="text-accent">{edu.institution} • {edu.affiliation}</p>
                <p className="text-muted-foreground text-[11px]">{edu.location} | {edu.period} | Status: {edu.status}</p>
                <p className="text-muted-foreground/80 text-[11px] pt-1">
                  Focus: Data Structures & Algorithms, Distributed Systems, Database Architectures & Clean Code.
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1.5 py-1 text-xs font-mono">
            <p className="text-foreground/90 font-semibold">Direct Communication Channels:</p>
            <p className="text-muted-foreground">
              Email &nbsp;&nbsp;&nbsp;: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-accent hover:underline">{PORTFOLIO_DATA.personal.email}</a>
            </p>
            <p className="text-muted-foreground">
              Phone &nbsp;&nbsp;&nbsp;: <a href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, "")}`} className="text-accent hover:underline">{PORTFOLIO_DATA.personal.phone}</a>
            </p>
            <p className="text-muted-foreground">
              Location: {PORTFOLIO_DATA.personal.location}
            </p>
            <p className="text-muted-foreground">
              Website : <a href={PORTFOLIO_DATA.personal.domain} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{PORTFOLIO_DATA.personal.domain}</a>
            </p>
          </div>
        );
        break;

      case "social":
        output = (
          <div className="space-y-1.5 py-1 text-xs font-mono">
            <p className="text-foreground/90 font-semibold">Social & Professional Links:</p>
            {PORTFOLIO_DATA.socialLinks.map((s) => (
              <p key={s.name} className="text-muted-foreground">
                <span className="text-accent font-medium w-20 inline-block">{s.name}</span> →{" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent hover:underline"
                >
                  {s.url}
                </a>
              </p>
            ))}
          </div>
        );
        break;

      case "github":
        if (typeof window !== "undefined") {
          window.open(PORTFOLIO_DATA.personal.github, "_blank", "noopener,noreferrer");
        }
        output = (
          <div className="text-xs font-mono text-emerald-500 py-1">
            Opening GitHub profile ({PORTFOLIO_DATA.personal.github}) in a new tab...
          </div>
        );
        break;

      case "linkedin":
        if (typeof window !== "undefined") {
          window.open(PORTFOLIO_DATA.personal.linkedin, "_blank", "noopener,noreferrer");
        }
        output = (
          <div className="text-xs font-mono text-emerald-500 py-1">
            Opening LinkedIn profile ({PORTFOLIO_DATA.personal.linkedin}) in a new tab...
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="space-y-2 py-1 text-xs font-mono">
            <p className="text-foreground">Official Resume Document (PDF):</p>
            <p className="text-muted-foreground">
              File: <span className="text-accent">Raj_Kumar_Timalsina_Resume.pdf</span> (ATS-Compatible)
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Raj_Kumar_Timalsina_Resume.pdf"
                className="px-2.5 py-1 rounded bg-accent/20 border border-accent/40 text-accent hover:bg-accent/30 transition-colors"
              >
                Download PDF
              </a>
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-surface border border-surface-border text-foreground hover:bg-surface-hover transition-colors"
              >
                Preview in Tab ↗
              </a>
            </div>
          </div>
        );
        break;

      case "neofetch":
        output = (
          <div className="py-2 flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs font-mono">
            <pre className="text-accent leading-none select-none font-bold text-[10px] sm:text-xs">
{`   ██████╗ ████████╗
   ██╔══██╗╚══██╔══╝
   ██████╔╝   ██║   
   ██╔══██╗   ██║   
   ██║  ██║   ██║   
   ╚═╝  ╚═╝   ╚═╝   `}
            </pre>
            <div className="space-y-1 text-muted-foreground text-[11px] sm:text-xs">
              <p className="text-foreground font-bold">{PORTFOLIO_DATA.personal.name}</p>
              <p className="text-muted-foreground/60">---------------------------------</p>
              <p><span className="text-accent">OS</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Developer Workspace</p>
              <p><span className="text-accent">Role</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Full-Stack & Flutter Developer</p>
              <p><span className="text-accent">Host</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: rajkumartimalsina.me</p>
              <p><span className="text-accent">Architecture</span> : Clean Architecture / BLoC / REST</p>
              <p><span className="text-accent">Language</span> &nbsp;&nbsp;&nbsp;&nbsp;: Dart, TypeScript, JavaScript</p>
              <p><span className="text-accent">Location</span> &nbsp;&nbsp;&nbsp;&nbsp;: {PORTFOLIO_DATA.personal.location}</p>
              <p><span className="text-accent">Projects</span> &nbsp;&nbsp;&nbsp;&nbsp;: {PORTFOLIO_DATA.projects.length} Production Implementations</p>
              <p><span className="text-accent">Uptime</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {PORTFOLIO_DATA.personal.yearsOfExperience}</p>
              <p><span className="text-accent">Status</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {PORTFOLIO_DATA.personal.availability}</p>
            </div>
          </div>
        );
        break;

      case "date":
        output = (
          <div className="text-xs font-mono text-muted-foreground py-1">
            Current system time: <span className="text-foreground font-semibold">{new Date().toString()}</span>
          </div>
        );
        break;

      case "pwd":
        output = (
          <div className="text-xs font-mono text-accent py-1">
            C:\Users\visitor\portfolio\rajkumartimalsina
          </div>
        );
        break;

      case "ls":
        output = (
          <div className="py-1 text-xs font-mono text-muted-foreground space-y-1">
            <p className="text-foreground/80 font-semibold">Virtual Directory Index:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-accent">
              <span>📁 about/</span>
              <span>📁 skills/</span>
              <span>📁 projects/</span>
              <span>📁 experience/</span>
              <span>📁 education/</span>
              <span>📁 contact/</span>
              <span className="text-foreground">📄 resume.pdf</span>
              <span className="text-foreground">📄 portfolio.config</span>
            </div>
          </div>
        );
        break;

      case "exit":
      case "quit":
        onClose();
        return;

      case "clear":
      case "cls":
        setHistory([]);
        return;

      default:
        output = (
          <div className="space-y-1 text-xs font-mono py-1">
            <p className="text-rose-400">
              &apos;{trimmed}&apos; is not recognized as a portfolio command.
            </p>
            <p className="text-muted-foreground">
              Type <span className="text-accent font-semibold">&apos;help&apos;</span> to view all available commands.
            </p>
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        command: trimmed,
        output,
        timestamp: now,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Ctrl + L to clear
    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setHistory([]);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      handleCommandExecution(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  const copyRecentHistory = async () => {
    const textToCopy = history.map((h) => `C:\\Users\\visitor> ${h.command}`).join("\n");
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedHint(true);
      setTimeout(() => setCopiedHint(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Terminal Shell Window Modal */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          focusInput();
        }}
        className={`w-full rounded-2xl border border-surface-border bg-surface text-foreground shadow-2xl overflow-hidden transition-all duration-300 font-mono flex flex-col ${
          isExpanded ? "max-w-5xl h-[85vh]" : "max-w-3xl h-[560px] max-h-[85vh]"
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-surface-hover border-b border-surface-border flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-md bg-accent/15 text-accent">
              <TerminalIcon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-foreground/90 tracking-tight">
              Raj Kumar Timalsina — Developer Terminal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                copyRecentHistory();
              }}
              title="Copy terminal command log"
              className="p-1.5 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
            >
              {copiedHint ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              title={isExpanded ? "Restore window size" : "Expand window size"}
              className="p-1.5 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-1.5 pl-2 border-l border-surface-border">
              <button
                type="button"
                onClick={onClose}
                className="w-4 h-4 rounded-full bg-rose-500/80 hover:bg-rose-500 inline-flex items-center justify-center text-[10px] text-white transition-colors"
                title="Close (ESC)"
              >
                <X className="w-2.5 h-2.5" />
              </button>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" title="Minimize" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 inline-block transition-colors"
                title="Maximize"
              />
            </div>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-3 font-mono text-xs sm:text-sm bg-background/50">
          {/* Boot Sequence Lines */}
          <div className="space-y-1 text-muted-foreground/80 border-b border-surface-border/40 pb-3">
            {bootLines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-500">✔</span>
                <span>{line}</span>
              </div>
            ))}
          </div>

          {/* Executed Command History */}
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <span className="text-accent font-bold">C:\Users\visitor&gt;</span>
                <span>{item.command}</span>
                <span className="text-[10px] text-muted-foreground/50 ml-auto font-normal">{item.timestamp}</span>
              </div>
              <div className="pl-4 sm:pl-6">{item.output}</div>
            </div>
          ))}

          {/* Active Command Input Line */}
          <div className="flex items-center gap-2 pt-2 border-t border-surface-border/30">
            <span className="text-accent font-bold shrink-0">C:\Users\visitor&gt;</span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoFocus
                aria-label="Terminal command input"
                placeholder="type 'help', 'skills', 'projects', 'neofetch'..."
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none font-mono text-xs sm:text-sm caret-accent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                handleCommandExecution(inputVal);
                setInputVal("");
              }}
              className="text-muted-foreground hover:text-accent p-1 transition-colors"
              title="Execute command (Enter)"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="px-4 py-2 bg-surface-hover border-t border-surface-border flex flex-wrap items-center justify-between text-[11px] text-muted-foreground select-none shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Online
            </span>
            <span className="hidden sm:inline">Press ESC or type &apos;exit&apos; to close</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">UTF-8</span>
            <span className="text-accent font-mono">100% Client-Side Safe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
