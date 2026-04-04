const products = [
  {
    id: 1,
    name: "Velaris Line",
    image: "proizvodi/t2.webp",
  },
  {
    id: 2,
    name: "Obsidian",
    image: "proizvodi/t1.webp",
  },
  {
    id: 3,
    name: "Obsidian Forest",
    image: "proizvodi/t3.jpg",
  },
];


export default function Products() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Naši terarijumi
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            
            <div className="overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {item.name}
            </h3>

            

          </div>
        ))}
      </div>
    </section>
  );
}