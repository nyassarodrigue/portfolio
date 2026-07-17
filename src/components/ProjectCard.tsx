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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 40px rgba(37,99,235,.25)",
      }}
      className="overflow-hidden rounded-2xl bg-slate-800 shadow-lg"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

        <p className="mb-5 text-slate-300">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2 transition hover:bg-blue-700"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-600 px-5 py-2 transition hover:bg-blue-600"
          >
            Démo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
