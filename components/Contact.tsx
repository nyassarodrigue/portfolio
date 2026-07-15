export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nom"
            className="w-full bg-slate-800 p-4 rounded-lg outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-slate-800 p-4 rounded-lg outline-none"
          />

          <textarea
            rows={6}
            placeholder="Votre message"
            className="w-full bg-slate-800 p-4 rounded-lg outline-none"
          />

          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
