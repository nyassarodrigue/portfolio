"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-24"
    >
      <div className="absolute top-1/2 right-20 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full"></div>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Partie gauche */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-500 text-lg font-semibold mb-2">
              Hello les gens 😎😎
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rodrigue Nyassa
            </h1>

            <h2 className="text-2xl text-gray-300 mb-6">
              Développeur Full Stack Java & Next.js
            </h2>

            <p className="text-lg text-slate-300 leading-8 mb-8 max-w-xl">
              Je développe des applications web modernes, performantes et
              sécurisées avec Spring Boot, Next.js et MongoDB.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Voir mes projets
              </a>

              <a
                href="/cv.pdf"
                className="rounded-xl border border-blue-500 px-8 py-4 font-semibold transition-all duration-300 hover:bg-blue-500"
              >
                Télécharger mon CV
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-6">
              <a
                href="https://github.com/nyassarodrigue"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://linkedin.com/nyassarodrigue"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="nyassarodrigue3@email.com"
                className="hover:text-blue-500 transition"
              >
                <FaEnvelope size={28} />
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
            <Image
              src="/images/profil1.jpg"
              alt="Photo de profil"
              width={400}
              height={400}
              priority
              className="rounded-full border-4 border-blue-500 object-cover shadow-[0_0_60px_rgba(59,130,246,0.45)] transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
