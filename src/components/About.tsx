"use client";

import FadeIn from "./FadeIn";

const stats = [
  {
    value: "2+",
    label: "Années d'apprentissage",
  },
  {
    value: "10+",
    label: "Projets réalisés",
  },
  {
    value: "5+",
    label: "Technologies maîtrisées",
  },
  {
    value: "100%",
    label: "Passion",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-6">
            À propos de moi
          </h2>

          <p className="text-center text-slate-300 max-w-3xl mx-auto leading-8">
            Je suis développeur Full Stack spécialisé en Java, Spring Boot et
            Next.js. J'aime concevoir des applications modernes, sécurisées et
            performantes, avec une attention particulière portée à la qualité du
            code, à l'architecture et à l'expérience utilisateur.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-800 p-6 text-center shadow-lg hover:-translate-y-2 hover:shadow-blue-500/20 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-500">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
