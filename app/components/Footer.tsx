import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

        {/* LOGO + OPIS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Terram</h2>
          <p className="text-gray-400 leading-relaxed">
            Ručno izrađeni terarijumi koji unose prirodu,
            mir i estetiku u vaš prostor.
          </p>
        </div>

        {/* NAVIGACIJA */}
        <div>
          <h3 className="font-semibold mb-4">Navigacija</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition">
                Proizvodi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* KONTAKT */}
        <div>
          <h3 className="font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: terramterarium@gmail.com</li>
            <li>Beograd, Srbija</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
  <h3 className="font-semibold mb-4">Zapratite nas</h3>

  <a
    href="https://instagram.com/terramterram"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition"
  >
    {/* Instagram SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9.75 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
  </a>
</div>
      </div>

      {/* DONJI DEO */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Terram. Sva prava zadržana.
      </div>
    </footer>
  );
}