export default function Odrzavanje() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Održavanje terarijuma 🌿
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Terarijumi su dizajnirani da budu dugotrajni i jednostavni za održavanje.
            Uz nekoliko osnovnih pravila, vaša zelena oaza će ostati zdrava i lepa godinama.
          </p>
        </div>

        {/* GRID SEKCIJE */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ZALIVANJE */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">💧 Zalivanje</h2>
            <p className="text-gray-400 mb-3">
              Terarijumi zahtevaju minimalno zalivanje. U većini slučajeva dovoljno je
              zaliti ih jednom u 2 do 4 nedelje.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Koristite malu količinu vode</li>
              <li>• Izbegavajte zadržavanje vode na dnu</li>
              <li>• Ako se stvara kondenzacija — ne zalivajte</li>
            </ul>
          </div>

          {/* SVETLOST */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">☀️ Svetlost</h2>
            <p className="text-gray-400 mb-3">
              Terarijumi vole svetlost, ali ne direktno sunce.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Idealno mesto je pored prozora</li>
              <li>• Ne postavljajte terarijum na sunce</li>
              <li>• Difuzno svetlo je najbolje</li>
            </ul>
          </div>

          {/* TEMPERATURA */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">🌡 Temperatura</h2>
            <p className="text-gray-400 mb-3">
              Terarijumi najbolje uspevaju na sobnoj temperaturi.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Idealno: 18–25°C</li>
              <li>• Izbegavajte radijatore i klimu</li>
              <li>• Bez naglih promena temperature</li>
            </ul>
          </div>

          {/* ODRŽAVANJE */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">✂️ Održavanje biljaka</h2>
            <p className="text-gray-400 mb-3">
              Minimalno održavanje je dovoljno da terarijum izgleda savršeno.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Uklonite suve listove</li>
              <li>• Povremeno skratite biljke</li>
              <li>• Očistite staklo ako je potrebno</li>
            </ul>
          </div>

        </div>

        {/* BONUS SEKCIJA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Zašto su naši terarijumi jednostavni za održavanje?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Naši terarijumi su pažljivo dizajnirani sa biljkama koje su prilagođene
            zatvorenim uslovima. Koristimo slojeve podloge koji omogućavaju pravilnu
            cirkulaciju vlage i dugotrajnost bez čestog zalivanja.
          </p>
        </div>
        <div className="mt-20">
  <h2 className="text-3xl font-semibold mb-6 text-center">
    Kako pravimo naše terarijume 🌿
  </h2>

  <p className="text-gray-400 max-w-3xl mx-auto text-center">
    Svaki naš terarijum nije samo dekoracija — već mali, pažljivo balansiran ekosistem.

Proces izrade započinjemo slojevitim postavljanjem podloge koja omogućava pravilnu cirkulaciju vode i dugotrajnost bez čestog održavanja. Kombinujemo prirodne materijale poput zemlje, peska i kore drveta kako bismo obezbedili stabilno i zdravo okruženje za biljke.

Dodajemo aktivni ugalj koji filtrira vodu i sprečava razvoj neprijatnih mirisa, dok suva mahovina pomaže u zadržavanju optimalne vlage. U pojedinim terarijumima koristimo i specijalizovane podloge poput aqua soil-a, koje dodatno doprinose stabilnosti i rastu biljaka.

Kako bi ekosistem bio što prirodniji i dugotrajniji, u zatvorenim terarijumima često uvodimo i korisne mikroorganizme poput izopoda. Oni pomažu u razgradnji organskog materijala i održavaju unutrašnju ravnotežu bez potrebe za čestim intervencijama.

Zahvaljujući ovom pažljivo osmišljenom procesu, naši terarijumi ostaju zdravi, stabilni i laki za održavanje — pružajući vam dugotrajan komadić prirode u vašem prostoru.

  </p>
</div>
        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Želite svoj terarijum?
          </h3>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Kontaktirajte nas
          </a>
        </div>

      </div>
    </section>
    
  );
}