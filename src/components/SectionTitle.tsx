"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-white">{title}</h2>

      {subtitle && <p className="text-slate-400 mt-4">{subtitle}</p>}
    </motion.div>
  );
}
