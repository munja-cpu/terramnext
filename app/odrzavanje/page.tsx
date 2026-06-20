export default function Odrzavanje() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 mt-8">
            Održavanje terarijuma 🌿
          </h2>

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
              Terarijumi zahtevaju minimalno zalivanje. <span className="highlight">Uvek je bolje zaliti premalo nego previse.</span>
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Koristite malu količinu vode</li>
              <li>• Izbegavajte zadržavanje vode na dnu</li>
              <li>• Ako se stvara kondenzacija — ne zalivajte. Po potrebi ostavite vratanca blago otvorena nekoliko sati kako bi višak vlage ispario.</li>
            </ul>
          </div>

          {/* SVETLOST */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">☀️ Svetlost</h2>
            <p className="text-gray-400 mb-3">
              <span className="text-red-400">Ne postavljajte terarijum na sunce, sunčevi zraci ne smeju prelaziti preko terarijuma ni u jednom delu dana.</span>
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Idealno mesto je pored prozora</li>
              <li>• Terarijumi vole svetlost, ali ne direktno sunce.</li>
              <li>• Difuzno svetlo je najbolje</li>
              <li>• Direktno sunce može za vrlo kratko vreme pregrejati unutrašnjost i oštetiti ili uništiti biljke.</li>
            </ul>
          </div>

          {/* TEMPERATURA */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">🌡 Temperatura</h2>
            <p className="text-gray-400 mb-3">
              Terarijumi najbolje uspevaju na sobnoj temperaturi.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Idealno: <span className="highlight">18–25°C</span></li>
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
              <li>• Uklonite suve ili oštećene listove</li>
              <li>• Povremeno skratite biljke</li>
              <li>• Očistite staklo ako je potrebno</li>
            </ul>
          </div>

          {/* IZOPODI */}
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
  <h3 className="mb-4 flex items-center gap-3 text-4xl font-serif font-semibold text-white">
    <span className="text-3xl">🪲</span>
    Izopodi
  </h3>

  <p className="mb-6 text-lg leading-relaxed text-zinc-300">
    U terarijumu se nalaze <span className="font-medium text-white">Dwarf White izopodi</span> –
    mali pomagači koji održavaju prirodnu ravnotežu ekosistema.
  </p>

  <ul className="space-y-4 text-lg text-zinc-300">
    <li>• Pomažu u razgradnji organskog materijala.</li>
    <li>• Doprinose zdravijem i stabilnijem okruženju za biljke.</li>
    <li>• Potpuno su bezopasni za ljude i biljke.</li>
    <li>• Većinu vremena provode skriveni u supstratu.</li>
  </ul>

  <div className="mt-8 rounded-2xl border border-lime-500/20 bg-lime-500/5 p-4">
    <p className="text-sm leading-relaxed text-lime-300">
      🌿 Ukoliko primetite sitne bele izopode u terarijumu, nema razloga za brigu –
      oni su prirodan i koristan deo ekosistema.
    </p>
  </div>
</div>
        </div>
        {/* OTVARANJE TERARIJUMA */}
<div className="mt-24">
  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* TEKST */}
      <div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Otvaranje terarijuma
        </h2>

        <p className="text-gray-400 text-lg mb-6">
          Svaki terarijum dolazi sa gumenim vakumom koji omogućava
          jednostavno i sigurno otvaranje bez
          oštećenja stakla.
        </p>

        <ul className="space-y-3 text-gray-300">
          <li>• Jednostavno korišćenje</li>
          <li>• Bez tragova na staklu</li>
          <li>• Sigurno otvaranje</li>
        </ul>
      </div>

      {/* SLIKA */}
      <div className="relative">
        <img
          src="/odrzavanje/otvaranjeTerarijuma.webp"
          alt="Otvaranje terarijuma"
          className="rounded-2xl border border-white/10 shadow-2xl"
        />
      </div>

    </div>
  </div>
</div>

    {/* NAPOMENA */}
<div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
  <div className="flex items-center gap-3 mb-4">
    <span className="text-2xl">⚠️</span>
    <h3 className="text-2xl font-serif font-semibold text-white">
      Važno
    </h3>
  </div>

  <p className="text-zinc-300 leading-relaxed">
    Terarijum je <span className="text-white font-medium">živi ekosistem</span>.
    Kao i svaka biljka, zahteva osnovnu negu i odgovarajuće uslove.
  </p>

  <p className="mt-3 text-zinc-300 leading-relaxed">
    Najčešći uzroci problema su{" "}
    <span className="font-medium text-red-400">
      prekomerno zalivanje
    </span>{" "}
    i{" "}
    <span className="font-medium text-red-400">
      izlaganje direktnom sunčevom svetlu
    </span>.
  </p>

  <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
    <p className="text-amber-300 text-sm font-medium">
      Biljke su živa bića i svaki terarijum je jedinstven. Biljke u terarijumu su živa bića i tokom vremena će rasti i menjati se. Povremeno opadanje starijih listova ili manje promene u izgledu biljaka predstavljaju prirodan deo njihovog razvoja.
    </p>
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

            Kako bi ekosistem bio što prirodniji i dugotrajniji, u zatvorenim terarijumima često uvodimo i korisne mikroorganizme poput izopoda. Oni pomažu u aeraciji zemlje, razgradnji organskog materijala i održavaju unutrašnju ravnotežu bez potrebe za čestim intervencijama.

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