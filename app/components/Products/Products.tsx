"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Repeat,
  Smartphone,
  HardDrive,
  Battery,
  Info,
  Camera,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* =======================================================
   ======================= DATA ===========================
======================================================= */

const products = [
  {
    id: 1,
    name: "iPhone XR",
    image: "/images/products/iphonexr.png",
    variants: [
      { version: "XR", storage: 64, sim: "SIM", price: 85000 },
      { version: "XR", storage: 128, sim: "SIM", price: 90000 },
    ],
  },
  {
    id: 2,
    name: "iPhone 11",
    image: "/images/products/iphone 11.png",
    variants: [
      { version: "Simple", storage: 64, sim: "SIM", price: 95000 },
      { version: "Simple", storage: 128, sim: "SIM", price: 105000 },
      { version: "Pro", storage: 64, sim: "SIM", price: 125000 },
      { version: "Pro", storage: 256, sim: "SIM", price: 140000 },
      { version: "Pro Max", storage: 64, sim: "SIM", price: 140000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 160000 },
    ],
  },
  {
    id: 3,
    name: "iPhone 12",
    image: "/images/products/iphone 12.png",
    variants: [
      { version: "Simple", storage: 64, sim: "SIM", price: 120000 },
      { version: "Simple", storage: 128, sim: "SIM", price: 125000 },
      { version: "Pro", storage: 128, sim: "SIM", price: 160000 },
      { version: "Pro", storage: 256, sim: "SIM", price: 175000 },
      { version: "Pro Max", storage: 128, sim: "SIM", price: 200000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 225000 },
    ],
  },
  {
    id: 4,
    name: "iPhone 13",
    image: "/images/products/iphone 13.png",
    variants: [
      { version: "Simple", storage: 128, sim: "SIM", price: 165000 },
      { version: "Pro", storage: 128, sim: "SIM", price: 225000 },
      { version: "Pro", storage: 256, sim: "SIM", price: 240000 },
      { version: "Pro Max", storage: 128, sim: "SIM", price: 250000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 275000 },
    ],
  },
  {
    id: 5,
    name: "iPhone 14",
    image: "/images/products/iPhone-14-Pro.png",
    variants: [
      { version: "Simple", storage: 128, sim: "SIM", price: 195000 },
      { version: "Plus", storage: 128, sim: "SIM", price: 225000 },
      { version: "Pro", storage: 128, sim: "SIM", price: 300000 },
      { version: "Pro", storage: 128, sim: "eSIM", price: 260000 },
      { version: "Pro", storage: 256, sim: "SIM", price: 315000 },
      { version: "Pro Max", storage: 128, sim: "SIM", price: 350000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 370000 },
    ],
  },
  {
    id: 6,
    name: "iPhone 15",
    image: "/images/products/iphone 15.png",
    variants: [
      { version: "Plus", storage: 128, sim: "SIM", price: 315000 },
      { version: "Plus", storage: 256, sim: "SIM", price: 330000 },
      { version: "Pro", storage: 256, sim: "SIM", price: 390000 },
      { version: "Pro", storage: 256, sim: "eSIM", price: 360000 },
    ],
  },
  {
    id: 7,
    name: "iPhone 16",
    image: "/images/products/iphone 16 Pro.png",
    variants: [
      { version: "Simple", storage: 128, sim: "eSIM", price: 350000 },
      { version: "Simple", storage: 128, sim: "SIM", price: 380000 },
      { version: "Plus", storage: 128, sim: "eSIM", price: 420000 },
      { version: "Plus", storage: 128, sim: "SIM", price: 440000 },
      { version: "Pro", storage: 256, sim: "eSIM", price: 460000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 580000 },
      { version: "Pro Max", storage: 256, sim: "eSIM", price: 500000 },
      { version: "Pro Max", storage: 512, sim: "eSIM", price: 550000 },
    ],
  },
  {
    id: 8,
    name: "iPhone 17",
    image: "/images/products/iphone 17.png",
    variants: [
      { version: "Simple", storage: 128, sim: "SIM", price: 0 },
      { version: "Pro", storage: 256, sim: "SIM", price: 0 },
      { version: "Pro Max", storage: 512, sim: "SIM", price: 0 },
    ],
  },
];

/* =======================================================
   ===================== COMPONENT ========================
======================================================= */

export default function Products() {

  /* ================= STATE ================= */

  const [search, setSearch] = useState("");
  const [storageFilter, setStorageFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [photos, setPhotos] = useState<FileList | null>(null);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    storage: "",
    battery: "",
    condition: "",
  });

  /* ================= FILTER ================= */

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStorage =
        storageFilter === "all" ||
        product.variants.some(
          (v) => v.storage.toString() === storageFilter
        );

      return matchSearch && matchStorage;
    });
  }, [search, storageFilter]);

  /* ================= WHATSAPP ================= */

 const handleWhatsAppRedirect = () => {
  if (!selectedProduct) return;

  const message = `
Bonjour Lamesse Mobile,

Je suis intéressé(e) par :

📱 Modèle : ${selectedProduct.name}
${
  selectedVariant
    ? `🔹 Variante : ${selectedVariant.version} ${selectedVariant.storage}GB (${selectedVariant.sim}) - ${selectedVariant.price.toLocaleString()} FCFA`
    : ""
}

🔁 Je souhaite faire un échange avec :

Marque : ${formData.brand}
Modèle : ${formData.model}
Stockage : ${formData.storage}
Batterie : ${formData.battery}%
État : ${formData.condition}

📸 ${photos ? photos.length : 0} photo(s) sélectionnée(s).
`;

  const url = `https://wa.me/221781863809?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
  /* ================= RENDER ================= */

  return (
    <section id="products" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nos iPhone disponibles
          </h2>
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Rechercher un modèle..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-full px-6 py-3 w-full max-w-md text-sm focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* STORAGE FILTER */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {["all", "64", "128", "256", "512"].map((size) => (
            <button
              key={size}
              onClick={() => setStorageFilter(size)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                storageFilter === size
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {size === "all" ? "Tous" : `${size}GB`}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {filteredProducts.map((product) => {
            const minPrice = Math.min(
              ...product.variants.map((v) => v.price)
            );

            return (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center items-center h-56 mb-6 bg-gray-50 rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-lg font-bold text-gray-900 mb-5">
                  À partir de {minPrice.toLocaleString()} FCFA
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedVariant(product.variants[0]);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-black hover:text-white py-2.5 rounded-xl transition-all text-sm font-medium"
                  >
                    <Repeat size={16} />
                    Échanger
                  </button>

                  <a
                    href={`https://wa.me/221781863809?text=Bonjour, je suis intéressé par ${product.name}`}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl transition-all text-sm font-medium"
                  >
                    <FaWhatsapp size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-sm max-h-[90vh] overflow-y-auto shadow-2xl p-5">

            <h3 className="text-base font-semibold mb-4 text-center">
              Échanger contre {selectedProduct.name}
            </h3>

            <div className="space-y-3">

              {/* Brand */}
              <div className="relative">
                <Smartphone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Marque"
                  value={formData.brand}
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md"
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                />
              </div>

              {/* Model */}
              <div className="relative">
                <Smartphone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Modèle"
                  value={formData.model}
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md"
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                />
              </div>
              {/* */}
                  {/* Variant Select */}
                  <div className="space-y-1">
                    <label className="text-xs text-gray-500">
                      Variante souhaitée
                    </label>

                    <select
                      value={
                        selectedVariant
                          ? `${selectedVariant.version}-${selectedVariant.storage}-${selectedVariant.sim}`
                          : ""
                      }
                      onChange={(e) => {
                        const value = e.target.value;

                        const variant = selectedProduct.variants.find(
                          (v: any) =>
                            `${v.version}-${v.storage}-${v.sim}` === value
                        );

                        setSelectedVariant(variant);
                      }}
                      className="w-full border border-gray-200 p-2 text-sm rounded-md focus:ring-2 focus:ring-black outline-none"
                    >
                      {selectedProduct.variants.map((variant: any, index: number) => (
                        <option
                          key={index}
                          value={`${variant.version}-${variant.storage}-${variant.sim}`}
                        >
                          {variant.version} • {variant.storage}GB • {variant.sim} •{" "}
                          {variant.price.toLocaleString()} FCFA
                        </option>
                      ))}
                    </select>
                  </div>

                                {/**/}

              {/* Storage */}
              <div className="relative">
                <HardDrive size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Stockage (128GB)"
                  value={formData.storage}
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md"
                  onChange={(e) =>
                    setFormData({ ...formData, storage: e.target.value })
                  }
                />
              </div>

              {/* Battery */}
              <div className="relative">
                <Battery size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  placeholder="Batterie (%)"
                  value={formData.battery}
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md"
                  onChange={(e) =>
                    setFormData({ ...formData, battery: e.target.value })
                  }
                />
              </div>

              {/* Condition */}
              <div className="relative">
                <Info size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="État général"
                  value={formData.condition}
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md"
                  onChange={(e) =>
                    setFormData({ ...formData, condition: e.target.value })
                  }
                />
              </div>

              {/* Photos */}
              <div className="relative">
                <Camera size={16} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => setPhotos(e.target.files)}
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md"
                />
                {photos && (
                  <p className="text-xs text-gray-500 mt-1">
                    {photos.length} photo(s) sélectionnée(s)
                  </p>
                )}
              </div>

              {/* Buttons */}
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-primary text-gray py-2 text-sm rounded-md hover:bg-blue-700 transition"
              >
                Continuer sur WhatsApp
              </button>

              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full text-xs text-gray-500"
              >
                Annuler
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}