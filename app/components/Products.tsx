"use client";
import Link from "next/link";
import { useState } from "react";



type Product = {
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
    image: "proizvodi/t2.webp",
    desc: "Ručno izrađen terarijum...",
  },
  {
    id: 2,
    name: "Obsidian",
    slug: "obsidian",
    image: "proizvodi/t1.webp",
    desc: "Moderan terarijum...",
  },
  {
    id: 3,
    name: "Obsidian Forest",
    slug: "obsidian-forest",
    image: "proizvodi/t3.jpg",
    desc: "Kombinacija prirodnih elemenata...",
  },
  {
    id: 4,
    name: "Obsidian Forest Mini",
    slug: "obsidian-forest-mini",
    image: "proizvodi/t4.webp",
    desc: "Kompaktna verzija...",
    size: "30x20x20",
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

          <Link
            key={item.id}
            href={`/products/${item.slug}`}
            target="_blank"
            className="group cursor-pointer block"
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
          </Link>
        ))}
      </div>

      {/* 🔥 MODAL */}
      
    </section>
  );
}