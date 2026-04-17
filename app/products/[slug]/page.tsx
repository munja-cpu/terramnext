import Image from "next/image";

type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  desc: string;
  size?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Velaris Line",
    slug: "velaris-line",
    image: "/proizvodi/t2.webp",
    desc: "Valeris Line ima prepoznatljiv oblik dijamanta koji daje moderan i elegantan izgled. Čiste linije stakla lepo uokviruju bogat, živ pejzaž iznutra.Roza i zelena fitonija donose snažan kontrast i razigrane šare, dok mahovina prekriva površinu poput mekanog tepiha i povezuje celu kompoziciju.Celina deluje sveže, uredno i vizuelno upečatljivo — mali, moderan komad prirode pun boje i života. 🌿",
  },
  {
    id: 2,
    name: "Obsidian",
    slug: "obsidian",
    image: "/proizvodi/t1.webp",
    desc: "Ovaj terarijum je oblikovan oko snažnog centralnog elementa — drveta koje dominira prostorom i daje celoj kompoziciji karakter. Njegove uvijene grane i koreni stvaraju osećaj pokreta, kao da drvo raste i širi se unutar stakla, tražeći svoj put.Mahovina se prirodno hvata za njegove delove, omekšavajući strukturu i dodajući sloj svežine i života. Oko baze se razvija bogat prizor — kombinacija sitnih biljaka, zemlje i tekstura koje stvaraju utisak pravog šumskog tla.Celina deluje kao mali, zarobljeni pejzaž — mesto gde priroda ima svoju formu, ali i svoju divlju, neukrotivu energiju. 🌿",
    size: "40x30x30"
  },
  {
    id: 3,
    name: "Obsidian Forest",
    slug: "obsidian-forest",
    image: "/proizvodi/t3.jpg",
    desc: "Spoj divlje prirode i precizne geometrije. Tamni postament daje mu dubinu i težinu, dok čiste linije stakla uokviruju gust, zelen pejzaž iznutra.Mahovina formira mekane brežuljke u više nijansi zelene, stvarajući osećaj prave minijaturne šume. Tanke, uvijene grane vode pogled kroz kompoziciju, dok biljke u donjem delu unose život i pokret. Kamen dodaje stabilnost i utisak prirodne ravnoteže.Celina deluje mirno i misteriozno — kao skriveni komad prirode koji živi svojim tempom, odvojen od spoljnog sveta.",
    size: "40x30x30"
  },
  {
    id: 4,
    name: "Obsidian Forest Mini",
    slug: "obsidian-forest-mini",
    image: "/proizvodi/t4.webp",
    desc: "Obsidian Forest Mini je kompaktan, ali izrazito živ i detaljan mali ekosistem zatvoren u staklu. Bogatstvo fitonija u donjem delu odmah privlači pažnju — njihovi crveni i zeleni listovi sa izraženim šarama unose snažan kontrast i dinamiku.Pozadina je prekrivena mahovinom koja formira zeleni zid i daje osećaj dubine, kao da se scena nastavlja unazad. Kroz terarijum se provlače tanke, prirodno zakrivljene grane koje vode pogled kroz celu kompoziciju.U osnovi, kombinacija kamenčića, zemlje i biljaka stvara slojevit, prirodan prizor. Ceo terarijum deluje sveže, razigrano i puno života — kao mali komad šume koji uvek izgleda drugačije iz svakog ugla. 🌿",
    size: "30x20x20",
  },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log("slug:", slug);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <div>Proizvod nije pronađen: {slug}</div>;
  }

  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Slika */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={500}
            className="rounded-2xl"
          />
        </div>

        {/* Tekst */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-400 mb-6">
            {product.desc}
          </p>

          {product.size && (
            <p className="text-gray-300 mb-6">
              📏 Veličina: {product.size} cm
            </p>
          )}

        </div>

      </div>
    </section>
  );
}