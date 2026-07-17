"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi.");
      }

      setSuccess("✅ Votre message a été envoyé avec succès.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch  {
      setError("❌ Impossible d'envoyer le message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 text-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contactez-moi</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Envoi en cours..." : "Envoyer le message"}
          </button>

          {success && <p className="text-green-400 text-center">{success}</p>}

          {error && <p className="text-red-400 text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
}
