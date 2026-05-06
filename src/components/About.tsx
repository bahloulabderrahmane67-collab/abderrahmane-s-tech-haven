import { Section } from "./Section";
import { Check } from "lucide-react";

const qualities = ["Rigoureux", "Autonome", "Curieux", "Adaptable", "Travail en équipe"];

export function About() {
  return (
    <Section id="about" eyebrow="01 — Profil" title="À propos">
      <div className="grid md:grid-cols-[1.6fr_1fr] gap-10">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Étudiant en <span className="text-foreground font-medium">BUT Informatique</span> à
            l'IUT de Maubeuge, issu d'une CPGE scientifique au lycée Faidherbe de Lille.
          </p>
          <p>
            Passionné par le <span className="text-foreground">développement</span>, les{" "}
            <span className="text-foreground">systèmes</span>, les{" "}
            <span className="text-foreground">réseaux</span> et la{" "}
            <span className="text-primary">cybersécurité</span>.
          </p>
          <p>
            Je développe plusieurs projets personnels, dont un jeu mobile en cours de publication
            sur le Play Store.
          </p>
        </div>
        <div className="glass rounded-xl p-6">
          <p className="font-mono text-xs text-primary mb-4">// qualités</p>
          <ul className="space-y-2.5">
            {qualities.map((q) => (
              <li key={q} className="flex items-center gap-3 text-sm">
                <span className="w-7 h-7 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                  <Check size={14} />
                </span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
