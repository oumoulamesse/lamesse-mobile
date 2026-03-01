"use client";

import Image from "next/image";

const brands = [
  { name: "Apple", logo: "/images/brands/apple 1.png" },
  { name: "Samsung", logo: "/images/brands/samsung.png" },
  { name: "Xiaomi", logo: "/images/brands/huawei.png" },
  { name: "Tecno", logo: "/images/brands/xiaomi.png" },
];

export default function Brands() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-2xl font-semibold text-midnight_text mb-12">
          Marques partenaires
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center opacity-70 hover:opacity-100 transition duration-500">

          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}