import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naziv",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Opis",
      type: "text",
    }),

    defineField({
      name: "size",
      title: "Dimenzije",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Glavna slika",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "collection",
      title: "Kolekcija",
      type: "string",
    }),

    defineField({
      name: "popular",
      title: "Popularno",
      type: "boolean",
      initialValue: false,
    }),
  ],
});