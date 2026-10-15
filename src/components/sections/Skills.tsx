import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-surface-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Capabilities
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Technical Skills
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Core languages, mobile frameworks, backend architectures, and tooling applied in production codebases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-surface-border bg-surface p-5 space-y-4"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs font-mono px-2.5 py-1 rounded border border-surface-border bg-surface-hover/50 text-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
