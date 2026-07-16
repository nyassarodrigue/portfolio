export default function Experience() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Mon parcours</h2>

        <div className="border-l-4 border-blue-500 pl-8 space-y-10">
          <div>
            <h3 className="text-2xl font-semibold">Développeur Full Stack junior</h3>

            <p className="text-blue-400">2024 - Aujourd'hui</p>

            <p className="text-slate-300 mt-3">
              Développement d'applications avec Java Spring Boot, Next.js, React.js
              MongoDB et MySQL.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Formation continue</h3>

            <p className="text-blue-400">Technologies modernes</p>

            <p className="text-slate-300 mt-3">
              Approfondissement de React, Next.js, Spring Security, Docker et
              des architectures REST.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
