import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO / NASLOV */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kontakt
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Imate pitanje, ideju ili želite terarijum po meri?
          Slobodno nam pišite — odgovaramo brzo.
        </p>
      </section>

      {/* CONTACT FORMA */}
      <Contact />

    </main>
  );
}