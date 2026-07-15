import { skills } from "@/data/skills";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Mes compétences"
          subtitle="Les technologies que j'utilise au quotidien"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-slate-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-500 mb-6">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
