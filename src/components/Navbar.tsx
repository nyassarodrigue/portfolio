"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const links = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
            flex items-center justify-between
            rounded-full
            border border-white/10
            bg-white/10
            backdrop-blur-2xl
            px-8 py-4
            shadow-[0_8px_32px_rgba(0,0,0,.35)]
          "
        >
          <Link
            href="/#hero"
            className="text-xl md:text-2xl font-bold tracking-wide text-white"
          >
            Rodrigue <span className="text-cyan-400">NYASSA</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    relative
                    text-slate-200
                    transition
                    hover:text-white
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-cyan-400
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/cv.pdf"
            target="_blank"
            className="
              hidden md:flex
              items-center
              gap-2
              rounded-full
              border border-cyan-400/30
              bg-cyan-500/10
              px-5 py-2.5
              text-sm
              font-semibold
              text-cyan-300
              transition-all
              hover:scale-105
              hover:bg-cyan-500/20
            "
          >
            <FaDownload />
            CV
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="
              fixed
              top-24
              left-1/2
              z-40
              w-[92%]
              -translate-x-1/2
              rounded-3xl
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              p-6
              shadow-2xl
              md:hidden
            "
          >
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-slate-200 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <a
                href="/cv.pdf"
                target="_blank"
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-cyan-500
                  py-3
                  font-semibold
                  text-white
                "
              >
                <FaDownload />
                Télécharger CV
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
