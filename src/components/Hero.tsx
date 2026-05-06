import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponible pour stage / alternance
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            Abderrahmane <br />
            <span className="text-gradient">BAHLOUL</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Étudiant BUT Informatique — <span className="text-foreground">Développement</span> &{" "}
            <span className="text-foreground">Cybersécurité</span>
          </p>
          <p className="mt-3 font-mono text-sm text-primary">
            "Apprendre, construire, sécuriser — un projet à la fois."
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow"
            >
              Voir mes projets
            </a>
            <a
              href="/CV_BAHLOUL_Abderrahmane.pdf"
              download
              className="px-5 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition flex items-center gap-2"
            >
              <Download size={16} /> Télécharger mon CV
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition flex items-center gap-2"
            >
              <Mail size={16} /> Me contacter
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/bahloulabderrahmane67-collab" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abderrahmane-bahloul" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/40 to-transparent blur-3xl rounded-full" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-primary/40 glow animate-float">
              <img
                src={profile}
                alt="Abderrahmane Bahloul"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 glass rounded-lg p-3 font-mono text-xs">
                <div className="text-primary">BAHLOUL ABDERRAHMANE</div>
                <div className="text-foreground/80 break-all">bahloulabderrahmande67@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition"
        aria-label="Scroll"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
