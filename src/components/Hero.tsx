"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-32"
    >
      {/* Halos lumineux */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[150px]" />

        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Partie gauche */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,.35)]"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              ● Disponible pour de nouveaux projets
            </div>

            <p className="text-cyan-400 text-lg font-semibold mb-3">
              Hey la team 👋
            </p>

            <h1 className="text-5xl md:text-4xl font-black leading-tight mb-6">
              Rodrigue (Léon)
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                NYASSA
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-8 min-h-[48px]">
              <TypeAnimation
                sequence={[
                  "Développeur Java",
                  2000,
                  "Infographiste",
                  2000,
                  "Développeur Spring Boot",
                  2000,
                  "Développeur Next.js",
                  2000,
                  "Développeur Full Stack",
                  2000,
                  "Monteur vidéo VFX",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-lg leading-8 text-slate-300 mb-10">
              Je développe des applications web modernes, performantes et
              sécurisées avec Spring Boot, Next.js et MongoDB.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50"
              >
                Voir mes projets
                <FaArrowRight />
              </a>

              <a
                href="/cv.pdf"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Télécharger mon CV
                <FaDownload />
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-5">
              <a
                href="https://github.com/nyassarodrigue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/nyassarodrigue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:nyassarodrigue3@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>

          {/* Partie droite */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Halo */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />

              {/* Cercle verre */}
              <div className="relative rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.4)]">
                <Image
                  src="/images/profil1.jpg"
                  alt="Photo de profil"
                  width={420}
                  height={420}
                  priority
                  className="rounded-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}