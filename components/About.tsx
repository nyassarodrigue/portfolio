export default function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Développeur Full Stack passionné
            </h3>

            <p className="text-slate-300 leading-8 mb-6">
              Je développe des applications web modernes en utilisant Java,
              Spring Boot, React, Next.js et MongoDB.
            </p>

            <p className="text-slate-300 leading-8">
              J'aime concevoir des applications performantes, sécurisées et
              faciles à maintenir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">10+</h3>
              <p className="mt-2">Projets réalisés</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">5+</h3>
              <p className="mt-2">Technologies maîtrisées</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">100%</h3>
              <p className="mt-2">Motivation</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">∞</h3>
              <p className="mt-2">Curiosité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
