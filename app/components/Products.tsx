"use client";
import Link from "next/link";
import Image from "next/image";


type Products = {
  id: number;
  name: string;
  slug: string;
  image: string;
  desc: string;
  size?: string;
};

const products = [
  {
    id: 1,
    name: "Velaris Line",
    slug: "velaris-line",
    image: "/proizvodi/01.webp",
    desc: "Valeris Line ima prepoznatljiv oblik dijamanta koji daje moderan i elegantan izgled. Čiste linije stakla lepo uokviruju bogat, živ pejzaž iznutra. Roza i zelena fitonija donose snažan kontrast i razigrane šare, dok mahovina prekriva površinu poput mekanog tepiha i povezuje celu kompoziciju. Celina deluje sveže, uredno i vizuelno upečatljivo — mali, moderan komad prirode pun boje i života. 🌿",
  },
  {
    id: 2,
    name: "Obsidian",
    slug: "obsidian",
    image: "/proizvodi/02.webp",
    desc: "Ovaj terarijum je oblikovan oko snažnog centralnog elementa — drveta koje dominira prostorom i daje celoj kompoziciji karakter. Njegove uvijene grane i koreni stvaraju osećaj pokreta, kao da drvo raste i širi se unutar stakla, tražeći svoj put. Mahovina se prirodno hvata za njegove delove, omekšavajući strukturu i dodajući sloj svežine i života. Oko baze se razvija bogat prizor — kombinacija sitnih biljaka, zemlje i tekstura koje stvaraju utisak pravog šumskog tla. Celina deluje kao mali, zarobljeni pejzaž — mesto gde priroda ima svoju formu, ali i svoju divlju, neukrotivu energiju. 🌿",
    size: "40x30x30",
  },
  {
    id: 3,
    name: "Obsidian Forest",
    slug: "obsidian-forest",
    image: "/proizvodi/03.webp",
    desc: "Spoj divlje prirode i precizne geometrije. Tamni postament daje mu dubinu i težinu, dok čiste linije stakla uokviruju gust, zelen pejzaž iznutra. Mahovina formira mekane brežuljke u više nijansi zelene, stvarajući osećaj prave minijaturne šume. Tanke, uvijene grane vode pogled kroz kompoziciju, dok biljke u donjem delu unose život i pokret. Kamen dodaje stabilnost i utisak prirodne ravnoteže. Celina deluje mirno i misteriozno — kao skriveni komad prirode koji živi svojim tempom, odvojen od spoljnog sveta.",
    size: "40x30x30",
  },
  {
    id: 4,
    name: "Obsidian Forest Mini",
    slug: "obsidian-forest-mini",
    image: "/proizvodi/04.webp",
    desc: "Obsidian Forest Mini je kompaktan, ali izrazito živ i detaljan mali ekosistem zatvoren u staklu. Bogatstvo fitonija u donjem delu odmah privlači pažnju — njihovi crveni i zeleni listovi sa izraženim šarama unose snažan kontrast i dinamiku. Pozadina je prekrivena mahovinom koja formira zeleni zid i daje osećaj dubine, kao da se scena nastavlja unazad. Kroz terarijum se provlače tanke, prirodno zakrivljene grane koje vode pogled kroz celu kompoziciju. U osnovi, kombinacija kamenčića, zemlje i biljaka stvara slojevit, prirodan prizor. Ceo terarijum deluje sveže, razigrano i puno života — kao mali komad šume koji uvek izgleda drugačije iz svakog ugla. 🌿",
    size: "30x20x20",
  },
];

export default function Products({ showBadges }: { showBadges?: boolean }) {

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto ">
      <h2 className="text-4xl md:text-6xl font-bold my-6 text-center">
        Naši terarijumi
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item) => (

          <Link
            key={item.id}
            href={`/products/${item.slug}`}
            target="_blank"
            className="group cursor-pointer block"
          >
            <div className="relative overflow-hidden rounded-2xl h-[380px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* BADGES */}
              {showBadges && (
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  <span className="bg-white/90 backdrop-blur text-black text-xs px-3 py-1 rounded-full font-semibold">
                    🌿 Handmade
                  </span>

                  {item.slug === "obsidian-forest" && (
                    <span className="bg-white/90 backdrop-blur text-black text-xs px-3 py-1 rounded-full font-semibold">
                      🔥 Popularno
                    </span>
                  )}
                </div>
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>


    </section>
  );
}