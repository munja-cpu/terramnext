import Link from "next/link";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";

type Product = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: any;
  popular?: boolean;
};

export default async function Products({
  showBadges,
}: {
  showBadges?: boolean;
}) {
  const products: Product[] = await client.fetch(PRODUCTS_QUERY);

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold my-6 pb-4 text-center">
        Naši terarijumi
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item) => (
          <Link
            key={item._id}
            href={`/products/${item.slug.current}`}
            target="_blank"
            className="group cursor-pointer block"
          >
            <div className="relative overflow-hidden rounded-2xl h-[380px]">
              <Image
                src={urlFor(item.image).width(800).url()}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {showBadges && (
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  <span className="bg-white/90 backdrop-blur text-black text-xs px-3 py-1 rounded-full font-semibold">
                    🌿 Handmade
                  </span>

                  {item.popular && (
                    <span className="bg-white/90 backdrop-blur text-black text-xs px-3 py-1 rounded-full font-semibold">
                      🔥 Popularno
                    </span>
                  )}
                </div>
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[#b38b59] text-center">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}