import { Section } from "./Section";
import { skills } from "@/data/portfolio";
import { Code2, Terminal } from "lucide-react";

export function Skills() {
  const groups = [
    { title: "Langages", icon: Code2, items: skills.languages },
    { title: "Systèmes & outils", icon: Terminal, items: skills.tools },
  ];
  return (
    <Section id="skills" eyebrow="02 — Stack" title="Compétences">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="glass rounded-xl p-6 hover:border-primary/40 transition group"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center group-hover:scale-110 transition">
                <Icon size={18} />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary border border-border hover:border-primary hover:text-primary transition cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
