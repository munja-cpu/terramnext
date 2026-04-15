"use client";

import { useState } from "react";
type Product = {
  id: number;
  name: string;
  image: string;
  desc: string;
  size?: string;
};

const products = [
  {
    id: 1,
    name: "Velaris Line",
    image: "proizvodi/t2.webp",
    desc: "Ručno izrađen terarijum sa pažljivo biranim biljkama i prirodnim slojevima za dugotrajnost.",
  },
  {
    id: 2,
    name: "Obsidian",
    image: "proizvodi/t1.webp",
    desc: "Moderan terarijum minimalističkog dizajna koji se lako uklapa u svaki enterijer.",
  },
  {
    id: 3,
    name: "Obsidian Forest",
    image: "proizvodi/t3.jpg",
    desc: "Kombinacija prirodnih elemenata i biljaka koja stvara mali zatvoreni ekosistem.",
  },
  {
    id: 4,
    name: "Obsidian Forest Mini",
    image: "proizvodi/t3.jpg",
    desc: "Kompaktna verzija terarijuma idealna za manje prostore.",
    size: "30x20x20",
  },
];

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Naši terarijumi
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-95 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-black text-white p-6 rounded-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-xl mb-4 w-full h-60 object-cover"
            />

            <h2 className="text-xl font-bold mb-2">
              {selected.name}
            </h2>

            <p className="text-gray-400">
              {selected.desc}
            </p>

            {selected.size && (
              <p className="text-gray-300 mt-2">
                📏 Velicina: {selected.size} cm
              </p>
            )}

            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
    </section>
  );
}