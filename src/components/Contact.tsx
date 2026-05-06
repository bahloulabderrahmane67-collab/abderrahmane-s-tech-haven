import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  const infos = [
    { icon: Mail, label: "Email", value: "abderrahmane.bahloul@example.com" },
    { icon: Phone, label: "Téléphone", value: "+33 6 00 00 00 00" },
    { icon: MapPin, label: "Localisation", value: "Hautmont, France" },
  ];

  return (
    <Section id="contact" eyebrow="07 — Hello" title="Me contacter">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {infos.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-xl p-5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href="#"
              className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="#"
              className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-xl p-6 space-y-4">
          <div>
            <label className="text-xs font-mono text-muted-foreground">// nom</label>
            <input
              required
              className="mt-1 w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground">// email</label>
            <input
              type="email"
              required
              className="mt-1 w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition"
              placeholder="vous@exemple.com"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground">// message</label>
            <textarea
              required
              rows={4}
              className="mt-1 w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition resize-none"
              placeholder="Votre message..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            {sent ? (
              <>
                <Check size={16} /> Message envoyé !
              </>
            ) : (
              <>
                <Send size={16} /> Envoyer
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}
