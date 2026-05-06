import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Formation } from "@/components/Formation";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abderrahmane BAHLOUL — Portfolio | BUT Informatique" },
      {
        name: "description",
        content:
          "Portfolio d'Abderrahmane Bahloul, étudiant en BUT Informatique à l'IUT de Maubeuge. Développement, systèmes, réseaux et cybersécurité.",
      },
      { name: "keywords", content: "BUT Informatique, développement, cybersécurité, portfolio, Bahloul" },
      { property: "og:title", content: "Abderrahmane BAHLOUL — Portfolio" },
      { property: "og:description", content: "Étudiant BUT Informatique — Développement & Cybersécurité" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Formation />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
