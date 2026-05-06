import { Section } from "./Section";
import { formation } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Formation() {
  return (
    <Section id="formation" eyebrow="04 — Parcours" title="Formation">
      <div className="relative pl-6 border-l border-border space-y-8">
        {formation.map((f, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary glow flex items-center justify-center">
              <GraduationCap size={9} className="text-primary-foreground" />
            </span>
            <div className="glass rounded-lg p-5">
              <p className="font-mono text-xs text-primary mb-1">{f.years}</p>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.place}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
