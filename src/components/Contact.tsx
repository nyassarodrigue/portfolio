"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Halos lumineux */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-white/10 bg-cyan-500/10 p-12 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.35)]"
        >
          <div className="text-center">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              Disponible pour de nouveaux projets
            </span>

            <h2 className="mt-8 text-5xl font-bold">Travaillons ensemble</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Vous recherchez un développeur Full Stack Java / Spring Boot /
              Next.js pour rejoindre votre équipe ou réaliser votre projet ?
              Discutons-en.
            </p>

            {/* Adresse email */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <FaEnvelope className="text-cyan-400" />
                <span className="text-lg">nyassarodrigue3@gmail.com</span>
              </div>
            </div>

            {/* Bouton principal */}
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              <a
                href="mailto:nyassarodrigue3@gmail.com?subject=Prise%20de%20contact"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50"
              >
                <FaEnvelope />
                M'envoyer un email
              </a>
            </div>

            {/* Réseaux */}
            <div className="mt-12 flex justify-center gap-5">
              <a
                href="https://github.com/nyassarodrigue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/nyassarodrigue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500"
              >
                <FaDownload size={22} />
              </a>
            </div>

            <p className="mt-10 text-sm text-slate-400">
              Je réponds généralement en moins de 2 heures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
