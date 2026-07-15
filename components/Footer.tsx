export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-1 border-t border-slate-400">
      <div className="max-w-4xl mx-auto px-2 text-center">
        <h3
          className="text-white text-xl font-bold mb-4"
          style={{ fontFamily: "Algerian, 'Segoe UI', sans-serif" }}
        >
          Rodrigue NYASSA
        </h3>

        <p>© {new Date().getFullYear()} - Tous droits réservés.</p>
      </div>
    </footer>
  );
}
