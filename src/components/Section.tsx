import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">
            // {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}
