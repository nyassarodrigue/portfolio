import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Transaction Service",
    description:
      "Microservice Spring Boot permettant la gestion des transactions financières.",
    image: "/images/project1.png",
    technologies: ["Java", "Spring Boot", "MongoDB", "REST API"],
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "Portfolio Next.js",
    description: "Portfolio développé avec Next.js et TypeScript.",
    image: "/images/project2.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },

  {
    id: 3,
    title: "Payment API",
    description: "API de paiement sécurisée avec callback et JWT.",
    image: "/images/project3.png",
    technologies: ["Spring Security", "JWT", "MySQL"],
    github: "#",
    demo: "#",
  },
];
