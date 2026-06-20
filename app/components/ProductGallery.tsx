"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  image: any;
  gallery?: any[];
  name: string;
};

export default function ProductGallery({
  image,
  gallery = [],
  name,
}: Props) {
  const allImages = [
  image,
  ...(Array.isArray(gallery) ? gallery : []),
];

  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={urlFor(selectedImage).width(1200).url()}
          alt={name}
          width={800}
          height={500}
          className="rounded-2xl w-full"
        />
      </div>

      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3 mt-4">
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`overflow-hidden rounded-lg border-2 transition ${
                selectedImage === img
                  ? "border-[#b38b59]"
                  : "border-transparent hover:border-[#b38b59]"
              }`}
            >
              <Image
                src={urlFor(img).width(300).url()}
                alt={`${name} ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-24 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}