
// SANITY
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";

import ProductGallery from "@/app/components/ProductGallery";

type Product = {
  name: string;
  slug: {
    current: string;
  };
  description: string;
  size?: string;
  image: unknown;
  gallery?: unknown[];
};

export async function generateStaticParams() {
  const products = await client.fetch(`
    *[_type == "product"]{
      "slug": slug.current
    }
  `);

  return products;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product: Product | null = await client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]{
      name,
      slug,
      description,
      size,
      image,
      gallery
    }
  `,
    { slug }
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <ProductGallery
          image={product.image}
          gallery={product.gallery}
          name={product.name}
        />

        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#b38b59]">
            {product.name}
          </h1>

          <p className="text-gray-400 mb-6">
            {product.description}
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