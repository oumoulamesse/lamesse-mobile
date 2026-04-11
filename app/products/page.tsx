"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, Share2, Heart, ShoppingCart } from "lucide-react";

const product = {
  name: "iPhone 13 Pro",
  price: 240000,
  stock: 1000,

  colors: [
    {
      name: "Graphite",
      code: "#4B5563",
      images: [
        "/images/products/iphone-13.png",
        "/images/products/iphone-13-back.png",
      ],
    },
    {
      name: "Blue",
      code: "#93C5FD",
      images: [
        "/images/products/iphone-14.png",
        "/images/products/iphone-14-back.png",
      ],
    },
    {
      name: "Gold",
      code: "#FDE68A",
      images: [
        "/images/products/iphone-15.png",
        "/images/products/iphone-15-back.png",
      ],
    },
  ],

  storage: ["128 Go", "256 Go"],
};

export default function ProductDetail() {
  const params = useParams();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
  const [liked, setLiked] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 pb-32">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-50">
        <ArrowLeft className="cursor-pointer" />
        <h1 className="font-medium truncate max-w-[180px]">
          Détails produit #{params.id}
        </h1>
        <div className="flex gap-4">
          <Share2 size={20} />
          <Heart
            size={20}
            className={liked ? "fill-red-500 text-red-500" : "text-gray-700"}
            onClick={() => setLiked(!liked)}
          />
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6">
        <div className="bg-white rounded-3xl p-4 shadow-lg flex flex-col items-center">

          {/* Main Image */}
          <div className="w-72 h-72 relative">
            <Image
              src={selectedColor.images[activeImage]}
              alt={`${selectedColor.name} vue ${activeImage + 1}`}
              fill
              className="object-contain transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {selectedColor.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-16 h-16 rounded-xl border-2 overflow-hidden transition-all duration-200 ${
                  activeImage === index
                    ? "border-blue-500 scale-105 shadow-md"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={`Miniature ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full p-1"
                />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
            ⭐ <span className="font-medium">4.8</span>
          </div>
        </div>

        <div className="mt-2 text-sm text-green-600">
          {product.stock} en stock
        </div>

        {/* COLORS */}
        <div className="mt-6">
          <p className="text-sm text-gray-500 mb-2">Couleurs</p>
          <div className="flex gap-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedColor(color);
                  setActiveImage(0); // reset image
                }}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                  selectedColor.name === color.name
                    ? "border-blue-500 scale-110 shadow-md"
                    : "border-gray-200"
                }`}
                style={{ backgroundColor: color.code }}
              />
            ))}
          </div>
        </div>

        {/* STORAGE */}
        <div className="mt-6">
          <p className="text-sm text-gray-500 mb-2">Capacité de stockage</p>
          <div className="flex gap-3">
            {product.storage.map((s, index) => (
              <button
                key={index}
                onClick={() => setSelectedStorage(s)}
                className={`px-4 py-2 rounded-xl border transition-all duration-200 ${
                  selectedStorage === s
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-4 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs">Prix</p>
            <p className="text-xl font-bold">
              {product.price.toLocaleString()} FCFA
            </p>
          </div>
          <div className="text-right text-sm">
            <p>{selectedColor.name}</p>
            <p>{selectedStorage}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex gap-4 shadow-lg">
        <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center font-semibold text-gray-900">
          {product.price.toLocaleString()} FCFA
        </div>

        <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-3 font-medium transition-all duration-200 hover:opacity-90">
          <ShoppingCart size={18} />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}