import { Section } from "./Section";
import { experiences, interests } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <>
      <Section id="experience" eyebrow="05 — Pro" title="Expériences">
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((e) => (
            <div key={e.company} className="glass rounded-xl p-6 hover:border-primary/40 transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <Briefcase size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">{e.role}</h3>
                  <p className="text-xs text-muted-foreground">
                    {e.company} · {e.period}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {e.points.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary border border-border"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="interests" eyebrow="06 — Hors code" title="Centres d'intérêt">
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((i) => (
            <div
              key={i.label}
              className="glass rounded-2xl px-8 py-5 text-center hover:border-primary/50 hover:-translate-y-1 transition"
            >
              <p className="text-base font-medium">{i.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
