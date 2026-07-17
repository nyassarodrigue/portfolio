"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const navbarHeight = 80;

  const y =
    element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-md z-40">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/#hero" className="text-2xl font-bold text-blue-500">
          Rodrigue NYASSA
        </Link>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-blue-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
          Télécharger CV
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
