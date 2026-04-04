import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/hero.png"
        alt="Terrarium"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* CONTENT */}
      <div className="relative text-center md:text-left px-6 max-w-3xl">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 fade-up">
          Komadić prirode u vašem prostoru
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Ručno izrađeni terarijumi koji unose mir,
          estetiku i prirodu u svaki enterijer.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          
          <Link
            href="/products"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Pogledaj proizvode
          </Link>

          <Link
            href="/contact"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Kontakt
          </Link>

        </div>
      </div>
    </section>
  );
}