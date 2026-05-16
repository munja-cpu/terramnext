import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-10 px-6 overflow-hidden relative border-t border-white/10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-green-900 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-14 pb-16 border-b border-white/10">

          {/* LOGO */}
          <div>
            <h2 className="text-5xl font-light tracking-[0.3em] mb-6">
              TERRAM
            </h2>

            <div className="w-16 h-[1px] bg-[#b38b59] mb-6" />

            <p className="text-gray-400 leading-relaxed text-[15px]">
              Ručno izrađeni terarijumi inspirisani prirodom
              i modernim dizajnom.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://instagram.com/terramterram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#b38b59]/40 flex items-center justify-center hover:bg-[#b38b59] hover:text-black transition duration-500"
              >
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

          {/* NAVIGATION */}
          <div>
            <h3 className="text-[#b38b59] uppercase tracking-[0.2em] text-sm mb-8">
              Navigacija
            </h3>

            <ul className="space-y-5 text-gray-300">

              <li>
                <Link
                  href="/"
                  className="hover:text-white transition duration-300"
                >
                  Početna
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition duration-300"
                >
                  Proizvodi
                </Link>
              </li>

              

              <li>
                <Link
                  href="/odrzavanje"
                  className="hover:text-white transition duration-300"
                >
                  Održavanje
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Kontakt
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[#b38b59] uppercase tracking-[0.2em] text-sm mb-8">
              Kontakt
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>terramterarium@gmail.com</p>

              <p>Beograd, Srbija</p>

              <p className="text-gray-500 leading-relaxed pt-4">
                Tu smo za sva pitanja i ideje
                vašeg zelenog sveta.
              </p>

            </div>
          </div>

          {/* INSTAGRAM PREVIEW */}
          <div>
            <h3 className="text-[#b38b59] uppercase tracking-[0.2em] text-sm mb-8">
              Pratite nas
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/footer1.webp"
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/footer2.webp"
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/footer3.webp"
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

            </div>

            <a
              href="https://instagram.com/terramterram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 text-sm tracking-wide text-gray-300 hover:text-white transition"
            >
              Pogledajte više na Instagramu
              <span className="text-[#b38b59]">→</span>
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <div className="flex flex-wrap justify-center gap-8">

            <div className="flex items-center gap-2">
              🌿 Prirodni materijali
            </div>

            <div className="flex items-center gap-2">
              ✋ Ručno rađeno
            </div>

            <div className="flex items-center gap-2">
              📦 Sigurna dostava
            </div>

            <div className="flex items-center gap-2">
              ♡ Napravljeno s pažnjom
            </div>

          </div>

          <p>
            © {new Date().getFullYear()} TERRAM — Handmade in Serbia
          </p>

        </div>

      </div>
    </footer>
  );
}