"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/type/Project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width:768px) 100vw, 33vw"
        className="object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

        <p className="text-slate-300 mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-600 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            className="border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Démo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
