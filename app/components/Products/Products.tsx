"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Repeat,
  Smartphone,
  HardDrive,
  Battery,
  Info,
  Camera,
  X,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

type SIM = "SIM" | "eSIM";

interface Variant {
  version: string;
  storage: number;
  sim: SIM;
  price: number;
}

interface Product {
  id: number;
  name: string;
  image: string;
  variants: Variant[];
}

interface TradeForm {
  brand: string;
  model: string;
  storage: string;
  battery: string;
  condition: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone XR",
    image: "/images/products/iphonexr.png",
    variants: [
      { version: "XR", storage: 64,  sim: "SIM", price: 85000 },
      { version: "XR", storage: 128, sim: "SIM", price: 90000 },
    ],
  },
  {
    id: 2,
    name: "iPhone 11",
    image: "/images/products/iphone-11.png",
    variants: [
      { version: "Simple",  storage: 64,  sim: "SIM", price: 95000  },
      { version: "Simple",  storage: 128, sim: "SIM", price: 105000 },
      { version: "Pro",     storage: 64,  sim: "SIM", price: 125000 },
      { version: "Pro",     storage: 256, sim: "SIM", price: 140000 },
      { version: "Pro Max", storage: 64,  sim: "SIM", price: 140000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 160000 },
    ],
  },
  {
    id: 3,
    name: "iPhone 12",
    image: "/images/products/iphone 12.png",
    variants: [
      { version: "Simple",  storage: 64,  sim: "SIM", price: 120000 },
      { version: "Simple",  storage: 128, sim: "SIM", price: 125000 },
      { version: "Pro",     storage: 128, sim: "SIM", price: 160000 },
      { version: "Pro",     storage: 256, sim: "SIM", price: 175000 },
      { version: "Pro Max", storage: 128, sim: "SIM", price: 200000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 225000 },
    ],
  },
  {
    id: 4,
    name: "iPhone 13",
    image: "/images/products/iphone 13.png",
    variants: [
      { version: "Simple",  storage: 128, sim: "SIM", price: 165000 },
      { version: "Pro",     storage: 128, sim: "SIM", price: 225000 },
      { version: "Pro",     storage: 256, sim: "SIM", price: 240000 },
      { version: "Pro Max", storage: 128, sim: "SIM", price: 250000 },
      { version: "Pro Max", storage: 256, sim: "SIM", price: 275000 },
    ],
  },
  {
    id: 5,
    name: "iPhone 14",
    image: "/images/products/iPhone-14-Pro.png",
    variants: [
      { version: "Simple",  storage: 128, sim: "SIM",  price: 195000 },
      { version: "Plus",    storage: 128, sim: "SIM",  price: 225000 },
      { version: "Pro",     storage: 128, sim: "SIM",  price: 300000 },
      { version: "Pro",     storage: 128, sim: "eSIM", price: 260000 },
      { version: "Pro",     storage: 256, sim: "SIM",  price: 315000 },
      { version: "Pro Max", storage: 128, sim: "SIM",  price: 350000 },
      { version: "Pro Max", storage: 256, sim: "SIM",  price: 370000 },
    ],
  },
  {
    id: 6,
    name: "iPhone 15",
    image: "/images/products/iphone 15.png",
    variants: [
      { version: "Plus", storage: 128, sim: "SIM",  price: 315000 },
      { version: "Plus", storage: 256, sim: "SIM",  price: 330000 },
      { version: "Pro",  storage: 256, sim: "SIM",  price: 390000 },
      { version: "Pro",  storage: 256, sim: "eSIM", price: 360000 },
    ],
  },
  {
    id: 7,
    name: "iPhone 16",
    image: "/images/products/iphone-16-Pro.png",
    variants: [
      { version: "Simple",  storage: 128, sim: "eSIM", price: 350000 },
      { version: "Simple",  storage: 128, sim: "SIM",  price: 380000 },
      { version: "Plus",    storage: 128, sim: "eSIM", price: 420000 },
      { version: "Plus",    storage: 128, sim: "SIM",  price: 440000 },
      { version: "Pro",     storage: 256, sim: "eSIM", price: 460000 },
      { version: "Pro Max", storage: 256, sim: "SIM",  price: 580000 },
      { version: "Pro Max", storage: 256, sim: "eSIM", price: 500000 },
      { version: "Pro Max", storage: 512, sim: "eSIM", price: 550000 },
    ],
  },
  {
    id: 8,
    name: "iPhone 17",
    image: "/images/products/iphone 17.png",
    variants: [
      { version: "Simple",  storage: 128, sim: "SIM", price: 0 },
      { version: "Pro",     storage: 256, sim: "SIM", price: 0 },
      { version: "Pro Max", storage: 512, sim: "SIM", price: 0 },
    ],
  },
];

const WHATSAPP_NUMBER = "221781863809";

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

const fmt = (n: number) =>
  n === 0 ? "Bientôt dispo" : `${n.toLocaleString("fr-FR")} FCFA`;

const minPrice = (variants: Variant[]) =>
  Math.min(...variants.map((v) => v.price));

/* ─────────────────────────────────────────────
   SEARCH BAR
───────────────────────────────────────────── */

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative max-w-md mx-auto mb-12">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Rechercher un modèle…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-2xl pl-10 pr-5 py-3.5
                   text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-blue-500 focus:border-transparent shadow-sm transition"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────────── */

function ProductCard({
  product,
  onTrade,
}: {
  product: Product;
  onTrade: (p: Product) => void;
}) {
  const price       = minPrice(product.variants);
  const isNew       = product.id >= 7;
  const isComingSoon = price === 0;

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Bonjour Lamesse Mobile, je suis intéressé par ${product.name}`
  )}`;

  return (
    <article
      className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden
                 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                 flex flex-col"
    >
      {/* Badge */}
      {(isNew || isComingSoon) && (
        <div className="absolute top-3 left-3 z-10">
          {isComingSoon ? (
            <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200
                             text-amber-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Bientôt
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-blue-600 text-white
                             text-[10px] font-semibold px-2.5 py-1 rounded-full">
              <Sparkles size={9} />
              Nouveau
            </span>
          )}
        </div>
      )}

      {/* Image */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="flex items-center justify-center h-52 bg-gradient-to-br
                        from-gray-50 to-blue-50/40 px-6 pt-6
                        group-hover:from-blue-50 group-hover:to-blue-100/40
                        transition-colors duration-300">
          <Image
            src={product.image}
            alt={product.name}
            width={160}
            height={160}
            className="object-contain h-40 w-auto drop-shadow-lg
                       group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <Link href={`/products/${product.id}`} className="group/link">
          <h3 className="font-bold text-gray-900 text-sm leading-tight
                         group-hover/link:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className={`font-bold text-base mt-1 ${isComingSoon ? "text-amber-600" : "text-blue-600"}`}>
            {isComingSoon ? "Prix à confirmer" : `Dès ${fmt(price)}`}
          </p>
        </Link>

        <p className="text-[11px] text-gray-400">
          {product.variants.length} variante{product.variants.length > 1 ? "s" : ""}
        </p>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <button
            onClick={() => onTrade(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5
                       text-xs font-semibold bg-blue-600 hover:bg-blue-700
                       text-white rounded-xl py-2.5 shadow-sm shadow-blue-200
                       transition-colors duration-200"
          >
            <Repeat size={13} />
            Échanger
          </button>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5
                       text-xs font-semibold bg-[#25D366] hover:bg-[#1ebe5d]
                       text-white rounded-xl py-2.5 shadow-sm shadow-green-200
                       transition-colors duration-200"
          >
            <FaWhatsapp size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   FIELD
───────────────────────────────────────────── */

function Field({
  icon: Icon,
  placeholder,
  type = "text",
  value,
  onChange,
  accept,
  multiple,
}: {
  icon: React.ElementType;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (v: string) => void;
  accept?: string;
  multiple?: boolean;
}) {
  return (
    <div className="relative">
      <Icon
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        accept={accept}
        multiple={multiple}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full border border-gray-200 bg-gray-50 pl-9 pr-3 py-2.5 text-sm rounded-xl
                   focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100
                   outline-none placeholder:text-gray-400 transition"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   TRADE MODAL
───────────────────────────────────────────── */

function TradeModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [variant, setVariant] = useState<Variant>(product.variants[0]);
  const [photos, setPhotos]   = useState<FileList | null>(null);
  const [form, setForm]       = useState<TradeForm>({
    brand: "", model: "", storage: "", battery: "", condition: "",
  });

  const set = (key: keyof TradeForm) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = () => {
    const text =
`Bonjour Lamesse Mobile 👋

📱 *Modèle souhaité :* ${product.name}
🔹 *Variante :* ${variant.version} · ${variant.storage}GB · ${variant.sim}
💰 *Prix :* ${fmt(variant.price)}

🔁 *Mon appareil à échanger :*
   • Marque   : ${form.brand}
   • Modèle   : ${form.model}
   • Stockage : ${form.storage}
   • Batterie : ${form.battery}%
   • État     : ${form.condition}

📸 ${photos?.length ?? 0} photo(s) jointe(s)`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center
                 bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl max-h-[92dvh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <p className="text-[10px] text-blue-600 font-semibold uppercase tracking-widest mb-0.5">
              Demande d'échange
            </p>
            <h3 className="font-bold text-gray-900 text-base">{product.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full
                       bg-gray-100 hover:bg-gray-200 text-gray-500 transition"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-6">

          {/* Variant selector */}
          <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-3">
              Variante souhaitée
            </p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setVariant(v)}
                  className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all
                    ${variant === v
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-200"
                      : "border-gray-200 text-gray-600 hover:border-blue-400 bg-white"
                    }`}
                >
                  {v.version} · {v.storage}GB · {v.sim}
                </button>
              ))}
            </div>

            <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5
                            flex items-center justify-between">
              <span className="text-xs text-blue-500 font-medium">Prix sélectionné</span>
              <span className="text-sm font-bold text-blue-700">{fmt(variant.price)}</span>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-3">
              Votre appareil
            </p>
            <div className="space-y-3">
              <Field icon={Smartphone} placeholder="Marque (ex: Samsung)"        value={form.brand}     onChange={set("brand")}     />
              <Field icon={Smartphone} placeholder="Modèle (ex: Galaxy S22)"     value={form.model}     onChange={set("model")}     />
              <Field icon={HardDrive}  placeholder="Stockage (ex: 128 GB)"       value={form.storage}   onChange={set("storage")}   />
              <Field icon={Battery}    placeholder="Batterie (%)" type="number"   value={form.battery}   onChange={set("battery")}   />
              <Field icon={Info}       placeholder="État (Bon / Moyen / Mauvais)" value={form.condition} onChange={set("condition")} />

              <div className="relative">
                <Camera size={14} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => setPhotos(e.target.files)}
                  className="w-full border border-gray-200 bg-gray-50 pl-9 pr-3 py-2.5
                             text-sm rounded-xl outline-none transition
                             file:mr-3 file:py-0.5 file:px-2.5 file:text-xs file:border-0
                             file:bg-blue-50 file:text-blue-600 file:rounded-lg file:font-medium
                             focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-2 pt-1">
            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366]
                         hover:bg-[#1ebe5d] text-white text-sm font-bold py-3.5 rounded-2xl
                         transition-colors duration-200 shadow-md shadow-green-200"
            >
              <FaWhatsapp size={18} />
              Envoyer via WhatsApp
              <ArrowRight size={14} />
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-400 hover:text-gray-600 text-sm py-2.5 rounded-2xl
                         hover:bg-gray-50 transition-colors duration-200"
            >
              Annuler
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function Products() {
  const [search,       setSearch]       = useState("");
  const [tradeProduct, setTradeProduct] = useState<Product | null>(null);

  const filtered = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase
                           tracking-widest bg-blue-50 border border-blue-100
                           px-4 py-1.5 rounded-full mb-4">
            Notre catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Nos iPhone disponibles
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-sm mx-auto">
            Reconditionnés · Garantis 12 mois · Livrés à Dakar
          </p>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onTrade={setTradeProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center mt-24 text-gray-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">Aucun résultat pour «&nbsp;{search}&nbsp;»</p>
          </div>
        )}

      </div>

      {tradeProduct && (
        <TradeModal
          product={tradeProduct}
          onClose={() => setTradeProduct(null)}
        />
      )}
    </section>
  );
}
