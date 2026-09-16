"use client";

import { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Smartphone,
  Server,
  Layers,
  Terminal,
  Code2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"flutter" | "backend" | "architecture">("flutter");

  return (
    <section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio, Pillars, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability / Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-surface/80 backdrop-blur-sm text-xs font-mono text-muted-foreground shadow-2xs hover:border-accent/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-foreground/90 font-medium">
                {PORTFOLIO_DATA.personal.availability}
              </span>
            </div>

            {/* Headline & Title */}
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                <span className="h-px w-5 bg-accent inline-block" />
                <span>Mobile & Backend Engineer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-accent">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-foreground/85 tracking-tight pt-1">
                {PORTFOLIO_DATA.personal.headline}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            {/* Quick Metrics & Pillars Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xl pt-1">
              <div className="flex flex-col p-3 rounded-xl border border-surface-border bg-surface/60 backdrop-blur-xs">
                <span className="text-xs font-mono text-accent font-semibold flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5" /> Flutter
                </span>
                <span className="text-xs font-medium text-foreground mt-1">Cross-Platform</span>
                <span className="text-[10px] text-muted-foreground font-mono">BLoC • Riverpod</span>
              </div>

              <div className="flex flex-col p-3 rounded-xl border border-surface-border bg-surface/60 backdrop-blur-xs">
                <span className="text-xs font-mono text-accent font-semibold flex items-center gap-1">
                  <Server className="w-3.5 h-3.5" /> Backend
                </span>
                <span className="text-xs font-medium text-foreground mt-1">REST APIs</span>
                <span className="text-[10px] text-muted-foreground font-mono">Node • Express</span>
              </div>

              <div className="flex flex-col p-3 rounded-xl border border-surface-border bg-surface/60 backdrop-blur-xs">
                <span className="text-xs font-mono text-accent font-semibold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" /> Standards
                </span>
                <span className="text-xs font-medium text-foreground mt-1">Clean Arch</span>
                <span className="text-[10px] text-muted-foreground font-mono">B.Sc. CSIT (TU)</span>
              </div>
            </div>

            {/* CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a href="#projects">
                <Button size="lg" className="group shadow-glow/30">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href={PORTFOLIO_DATA.personal.resumeUrl} download="Raj_Kumar_Timalsina_Resume.pdf">
                <Button variant="secondary" size="lg">
                  <Download className="w-4 h-4 text-accent" />
                  <span>Download Resume</span>
                </Button>
              </a>

              <div className="h-6 w-px bg-surface-border hidden sm:block mx-1" />

              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Button variant="outline" size="icon" title="GitHub Profile">
                    <Github className="w-4 h-4" />
                  </Button>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button variant="outline" size="icon" title="LinkedIn Profile">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>

                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} aria-label="Email">
                  <Button variant="outline" size="icon" title="Send Email">
                    <Mail className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Code & Architecture Terminal Window */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-surface-border bg-surface/90 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent/40">
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-surface-hover/80 border-b border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-accent" />
                    rajkumar@workspace
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Ready
                </div>
              </div>

              {/* IDE Code Tabs */}
              <div className="flex items-center border-b border-surface-border bg-surface/50 px-2 pt-2 gap-1 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab("flutter")}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === "flutter"
                      ? "bg-surface text-accent font-medium border-t-2 border-accent shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-hover/50"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>auth_bloc.dart</span>
                </button>

                <button
                  onClick={() => setActiveTab("backend")}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === "backend"
                      ? "bg-surface text-accent font-medium border-t-2 border-accent shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-hover/50"
                  }`}
                >
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span>api_server.ts</span>
                </button>

                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === "architecture"
                      ? "bg-surface text-accent font-medium border-t-2 border-accent shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-hover/50"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>clean_arch.yaml</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto min-h-[260px] bg-background/50">
                {activeTab === "flutter" && (
                  <div className="space-y-1 text-muted-foreground">
                    <p className="text-foreground/90">
                      <span className="text-sky-500">class</span>{" "}
                      <span className="text-amber-400">AuthBloc</span>{" "}
                      <span className="text-sky-500">extends</span>{" "}
                      <span className="text-emerald-400">Bloc&lt;AuthEvent, AuthState&gt;</span> &#123;
                    </p>
                    <p className="pl-4 text-foreground/80">
                      <span className="text-sky-500">final</span> AuthRepository _authRepo;
                    </p>
                    <p className="pl-4 pt-1 text-muted-foreground/70">
                      <span className="text-purple-400">// Clean Architecture Event Handler</span>
                    </p>
                    <p className="pl-4 text-foreground/80">
                      on&lt;<span className="text-amber-300">LoginSubmitted</span>&gt;((event, emit) <span className="text-sky-500">async</span> &#123;
                    </p>
                    <p className="pl-8 text-foreground/80">
                      emit(<span className="text-amber-400">AuthLoading</span>());
                    </p>
                    <p className="pl-8 text-foreground/80">
                      <span className="text-sky-500">final</span> result = <span className="text-sky-500">await</span> _authRepo.authenticate(event.credentials);
                    </p>
                    <p className="pl-8 text-foreground/80">
                      result.fold(
                    </p>
                    <p className="pl-12 text-foreground/80">
                      (failure) =&gt; emit(<span className="text-rose-400">AuthFailure</span>(failure.message)),
                    </p>
                    <p className="pl-12 text-foreground/80">
                      (user) =&gt; emit(<span className="text-emerald-400">AuthSuccess</span>(user: user)),
                    </p>
                    <p className="pl-8 text-foreground/80">&#41;;</p>
                    <p className="pl-4 text-foreground/80">&#125;);</p>
                    <p className="text-foreground/90">&#125;</p>
                  </div>
                )}

                {activeTab === "backend" && (
                  <div className="space-y-1 text-muted-foreground">
                    <p className="text-purple-400">// Node.js & Express JWT Protected Pipeline</p>
                    <p className="text-foreground/90">
                      <span className="text-sky-500">router</span>.post(<span className="text-emerald-300">&apos;/api/v1/courses/enroll&apos;</span>,
                    </p>
                    <p className="pl-4 text-foreground/80">
                      verifyJwtSession,
                    </p>
                    <p className="pl-4 text-foreground/80">
                      <span className="text-sky-500">async</span> (req: AuthenticatedRequest, res: Response) =&gt; &#123;
                    </p>
                    <p className="pl-8 text-foreground/80">
                      <span className="text-sky-500">const</span> &#123; courseId, paymentToken &#125; = req.body;
                    </p>
                    <p className="pl-8 text-foreground/80">
                      <span className="text-sky-500">const</span> enrollment = <span className="text-sky-500">await</span> courseService.processStripeCheckout(&#123;
                    </p>
                    <p className="pl-12 text-muted-foreground">
                      userId: req.user.id, courseId, paymentToken
                    </p>
                    <p className="pl-8 text-foreground/80">&#125;);</p>
                    <p className="pl-8 text-foreground/80">
                      <span className="text-sky-500">await</span> fcmNotification.dispatch(enrollment.receipt);
                    </p>
                    <p className="pl-8 text-foreground/80">
                      <span className="text-sky-500">return</span> res.status(200).json(&#123; success: <span className="text-amber-400">true</span>, enrollment &#125;);
                    </p>
                    <p className="pl-4 text-foreground/80">&#125;
                    </p>
                    <p className="text-foreground/90">&#41;;</p>
                  </div>
                )}

                {activeTab === "architecture" && (
                  <div className="space-y-1 text-muted-foreground">
                    <p className="text-purple-400"># Clean Architecture Layer Isolation</p>
                    <p className="text-foreground/90"><span className="text-sky-400">layers</span>:</p>
                    <p className="pl-4 text-foreground/80"><span className="text-amber-400">presentation</span>: Flutter UI, BLoC / Riverpod State</p>
                    <p className="pl-4 text-foreground/80"><span className="text-amber-400">domain</span>: Use Cases, Entities, Contract Repositories</p>
                    <p className="pl-4 text-foreground/80"><span className="text-amber-400">data</span>: REST Dio Models, Remote / Local Data Sources</p>
                    <p className="pl-4 text-foreground/80"><span className="text-amber-400">backend</span>: Node.js, Express, MongoDB Indexing</p>
                    <p className="pt-2 text-foreground/90"><span className="text-sky-400">testing</span>: Unit, Integration, Mockito</p>
                    <p className="text-foreground/90"><span className="text-sky-400">pipeline</span>: GitHub Actions &bull; Fastlane release build</p>
                  </div>
                )}
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="px-4 py-2.5 bg-surface-hover/90 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Clean Architecture
                  </span>
                  <span>UTF-8</span>
                </div>
                <div className="text-accent font-medium">
                  {PORTFOLIO_DATA.personal.yearsOfExperience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
