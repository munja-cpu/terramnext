export const PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc){
  _id,
  name,
  slug,
  image,
  popular,
  collection,
  size,
  description
}`;