export default function Footer() {
  return (
    <footer className="bg-[#1F51FF] text-white py-4 font-['Monotype_Corsiva']">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
