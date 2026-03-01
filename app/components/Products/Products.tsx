"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Repeat,
  Smartphone,
  HardDrive,
  Battery,
  Info,
  Camera
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 750000,
    image: "/images/products/iphone1.jpg",
    promo: "-10%",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 620000,
    image: "/images/products/iphone4.jpg",
    promo: null,
  },
  {
    id: 3,
    name: "iPad Air",
    price: 480000,
    image: "/images/products/iphone3.jpg",
    promo: "-15%",
  },
  {
    id: 4,
    name: "Xiaomi 13",
    price: 390000,
    image: "/images/products/iphone2.jpg",
    promo: null,
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [photos, setPhotos] = useState<FileList | null>(null);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    storage: "",
    battery: "",
    condition: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleWhatsAppRedirect = () => {
    const message = `
Bonjour Lamesse Mobile,

Je souhaite échanger mon téléphone contre : ${selectedProduct.name}

📱 Marque : ${formData.brand}
📱 Modèle : ${formData.model}
💾 Stockage : ${formData.storage}
🔋 Batterie : ${formData.battery}%
📦 État : ${formData.condition}

📸 ${photos ? photos.length : 0} photo(s) sélectionnée(s).
Je vais envoyer les photos dans cette conversation.
`;

    const url = `https://wa.me/221774813790?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setSelectedProduct(null);
    setFormData({
      brand: "",
      model: "",
      storage: "",
      battery: "",
      condition: "",
    });
    setPhotos(null);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight_text">
            Produits populaires
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Découvrez nos meilleures ventes du moment.
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-full py-2.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-500 p-5"
            >
              {product.promo && (
                <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  {product.promo}
                </span>
              )}

              <div className="flex justify-center mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={180}
                  className="group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-sm md:text-base font-semibold text-midnight_text mb-1">
                {product.name}
              </h3>

              <p className="text-primary font-bold text-sm mb-3">
                {product.price.toLocaleString()} FCFA
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 flex items-center justify-center gap-1 bg-gray-100 hover:bg-primary hover:text-white text-midnight_text py-2 rounded-lg transition text-sm"
                >
                  <Repeat size={16} />
                </button>

                <a
                  href={`https://wa.me/221771234567?text=Bonjour, je suis intéressé par ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-gray-300 hover:bg-green-400 text-white py-2 rounded-lg transition text-sm"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
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
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md focus:ring-2 focus:ring-primary outline-none"
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
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md focus:ring-2 focus:ring-primary outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                />
              </div>

              {/* Storage */}
              <div className="relative">
                <HardDrive size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Stockage (128GB)"
                  value={formData.storage}
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md focus:ring-2 focus:ring-primary outline-none"
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
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md focus:ring-2 focus:ring-primary outline-none"
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
                  className="w-full border border-gray-200 pl-9 p-2 text-sm rounded-md focus:ring-2 focus:ring-primary outline-none"
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

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-primary text-white py-2 text-sm rounded-md hover:bg-blue-700 transition"
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