import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

export default async function TestPage() {
  const products = await client.fetch(`*[_type == "product"]{
    name,
    slug,
    _createdAt
  }`);

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
}