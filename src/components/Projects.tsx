import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Mes projets"
          subtitle="Quelques réalisations qui montrent mes compétences (Section en developement)"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
