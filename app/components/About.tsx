import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* NASLOV */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O nama
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Svaki terarijum pažljivo dizajniramo sa ljubavlju i posvećenošću,
            birajući najkvalitetnije biljke i dekoracije koje odgovaraju prostoru
            i željama klijenata.
          </p>
        </div>

        {/* GLAVNI BLOK (tekst + slika) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* TEKST */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Verujemo da priroda oplemenjuje svaki kutak i doprinosi opuštajućoj
              i prijatnoj atmosferi, bilo da je reč o domu ili radnom mestu.
            </p>

            <p>
              Pored vizuelne lepote, naši proizvodi su lako održivi i dugotrajni,
              jer koristimo materijale i biljke prilagođene unutrašnjim uslovima.
            </p>

            <p>
              Posvećeni smo da svaki detalj bude besprekoran i da svaki klijent
              dobije terarijum koji istinski voli i u kojem uživa svakog dana.
            </p>
          </div>

          {/* SLIKA */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/aboutUs.png"
              alt="Izrada terarijuma"
              width={600}
              height={500}
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* 3 KOLONE */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* STA RADIMO */}
          <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Šta radimo
            </h3>

            <ul className="space-y-2 text-gray-400 text-l">
              <li>• Ručna izrada biljnih terarijuma</li>
              <li>• Gotovi modeli i izrada po meri</li>
              <li>• Opremanje domova i poslovnih prostora</li>
            </ul>
          </div>

          {/* KAKO RADIMO */}
          <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Kako radimo
            </h3>

            <ul className="space-y-2 text-gray-400 text-l">
              <li>• Fokus na kvalitet i detalje</li>
              <li>• Ekološki i dugotrajni materijali</li>
              <li>• Pažljivo pakovanje i dostava</li>
            </ul>
          </div>

          {/* NAS CILJ */}
          <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Naš cilj
            </h3>

            <p className="text-gray-400 text-l leading-relaxed">
              Naši terarijumi nisu samo dekoracija — oni su spoj prirode,
              dizajna i funkcionalnosti, idealni za moderne enterijere i ljude
              koji cene lepotu prirode.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}