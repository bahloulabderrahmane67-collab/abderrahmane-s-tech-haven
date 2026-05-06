import { Section } from "./Section";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Réalisations" title="Projets">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative glass rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono text-xs text-primary">{p.tag}</span>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-secondary border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
