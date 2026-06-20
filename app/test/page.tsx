import { client } from "@/sanity/lib/client";

export default async function TestPage() {
  const products = await client.fetch(`*[_type == "product"]`);

  return (
    <pre>
      {JSON.stringify(products, null, 2)}
    </pre>
  );
}