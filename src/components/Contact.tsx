import { Section } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  const infos = [
    { icon: Mail, label: "Email", value: "bahloulabderrahmande67@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "07 68 94 91 03" },
    { icon: MapPin, label: "Localisation", value: "Hautmont, France" },
  ];

  return (
    <Section id="contact" eyebrow="07 — Hello" title="Me contacter">
      <div className="max-w-2xl mx-auto space-y-4">
        {infos.map(({ icon: Icon, label, value }) => (
          <div key={label} className="glass rounded-xl p-5 flex items-center gap-4">
            <span className="w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <Icon size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-medium break-all">{value}</p>
            </div>
          </div>
        ))}
        <div className="flex gap-3 pt-2">
          <a
            href="https://github.com/bahloulabderrahmane67-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abderrahmane-bahloul"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
