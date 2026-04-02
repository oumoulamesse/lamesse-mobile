"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { products } from "@/app/data/products";
import {
  ArrowLeft,
  Share2,
  Heart,
  ShieldCheck,
  Truck,
  RefreshCcw,
  Star,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface Variant {
  storage: string;
  price: number;
}

interface Version {
  name: string;
  variants: Variant[];
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

const WHATSAPP = "221781863809";

const fmt = (n: number) =>
  n === 0 ? "Prix à confirmer" : `${n.toLocaleString("fr-FR")} FCFA`;

/* ─────────────────────────────────────────────
   BADGE "Bientôt disponible"
───────────────────────────────────────────── */

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-medium px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      Bientôt disponible
    </span>
  );
}

/* ─────────────────────────────────────────────
   TRUST BADGES
───────────────────────────────────────────── */

const TRUST = [
  { icon: ShieldCheck, label: "Garanti", sub: "12 mois" },
  { icon: Truck,       label: "Livraison", sub: "Dakar & environs" },
  { icon: RefreshCcw,  label: "Échange", sub: "Facile & rapide" },
];

function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-8">
      {TRUST.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-1.5 bg-gray-50 border border-gray-100
                     rounded-2xl py-4 px-2 text-center"
        >
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
            <Icon size={17} className="text-blue-600" />
          </div>
          <p className="text-[12px] font-semibold text-gray-800">{label}</p>
          <p className="text-[10px] text-gray-400 leading-tight">{sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   IMAGE GALLERY
───────────────────────────────────────────── */

function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const unique = [...new Set(images)];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl
                      overflow-hidden aspect-square flex items-center justify-center">
        <Image
          src={unique[active] ?? images[0]}
          alt={name}
          width={320}
          height={320}
          className="object-contain w-3/4 h-3/4 drop-shadow-xl transition-all duration-300"
          priority
        />
      </div>

      {/* Thumbnails */}
      {unique.length > 1 && (
        <div className="flex gap-2 justify-center">
          {unique.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200
                ${active === i
                  ? "border-blue-500 scale-105 shadow-md"
                  : "border-gray-100 opacity-60 hover:opacity-100"
                }`}
            >
              <Image
                src={img}
                alt={`${name} vue ${i + 1}`}
                width={56}
                height={56}
                className="object-contain w-full h-full p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SELECTOR BUTTON
───────────────────────────────────────────── */

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200
        ${
          active
            ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
            : "bg-white border-gray-200 text-gray-600 hover:border-blue-400"
        }`}
    >
      {label}
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function ProductDetail() {
  const params  = useParams();
  const router  = useRouter();

  const product = useMemo(
    () => products.find((p) => p.id === Number(params.id)),
    [params.id]
  );

  const [liked,           setLiked]           = useState(false);
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(
    product?.versions[0] ?? null
  );
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product?.versions[0]?.variants[0] ?? null
  );

  /* ── Handle version change ── */
  const handleVersion = (v: Version) => {
    setSelectedVersion(v);
    setSelectedVariant(v.variants[0]);
  };

  /* ── Not found ── */
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-500">
        <p className="text-lg font-medium">Produit introuvable</p>
        <Link href="/" className="text-blue-600 underline text-sm">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  /* ── WhatsApp message ── */
  const waText = encodeURIComponent(
    `Bonjour Lamesse Mobile,\n\n` +
    `Je suis intéressé par :\n` +
    `📱 ${product.name}${selectedVersion ? ` · ${selectedVersion.name}` : ""}` +
    `${selectedVariant ? ` · ${selectedVariant.storage}` : ""}\n` +
    `💰 Prix : ${selectedVariant ? fmt(selectedVariant.price) : "à confirmer"}\n\n` +
    `Pouvez-vous me donner plus d'informations ?`
  );

  const isComingSoon = selectedVariant?.price === 0;

  return (
    <div className="min-h-screen bg-white">

      {/* ── TOP BAR ── */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100
                         flex items-center justify-between px-5 py-4">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>

        <p className="text-sm font-semibold text-gray-900 truncate max-w-[180px]">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            onClick={() => navigator.share?.({ title: product.name, url: window.location.href })}
          >
            <Share2 size={18} className="text-gray-600" />
          </button>
          <button
            onClick={() => setLiked((p) => !p)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          >
            <Heart
              size={18}
              className={liked ? "fill-red-500 text-red-500" : "text-gray-600"}
            />
          </button>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <div className="max-w-lg mx-auto px-5 pt-6 pb-36 space-y-8">

        {/* Gallery */}
        <Gallery images={product.images} name={product.name} />

        {/* Name + rating */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200
                            px-2.5 py-1 rounded-full shrink-0">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-semibold text-yellow-700">4.8</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* ── Version selector ── */}
        {product.versions.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Version
            </p>
            <div className="flex flex-wrap gap-2">
              {product.versions.map((v) => (
                <Chip
                  key={v.name}
                  label={v.name}
                  active={selectedVersion?.name === v.name}
                  onClick={() => handleVersion(v)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Storage selector ── */}
        {selectedVersion && selectedVersion.variants.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Stockage
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedVersion.variants.map((variant, i) => (
                <Chip
                  key={i}
                  label={variant.storage}
                  active={selectedVariant === variant}
                  onClick={() => setSelectedVariant(variant)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Price block ── */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl px-5 py-4
                        flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-xs mb-0.5">Prix</p>
            {isComingSoon ? (
              <ComingSoonBadge />
            ) : (
              <p className="text-white text-xl font-bold">
                {selectedVariant ? fmt(selectedVariant.price) : "—"}
              </p>
            )}
          </div>
          <div className="text-right text-blue-200 text-xs space-y-0.5">
            <p>{selectedVersion?.name}</p>
            <p>{selectedVariant?.storage}</p>
          </div>
        </div>

        {/* Trust badges */}
        <TrustBadges />

        {/* Related products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-900">Autres modèles</p>
            <Link
              href="/#products"
              className="text-xs text-blue-600 flex items-center gap-0.5"
            >
              Voir tout <ChevronRight size={12} />
            </Link>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 5)
              .map((p) => {
                const minP = Math.min(
                  ...p.versions.flatMap((v) => v.variants.map((vv) => vv.price))
                );
                return (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    className="shrink-0 w-32 bg-gray-50 border border-gray-100 rounded-2xl
                               p-3 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                  >
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      width={80}
                      height={80}
                      className="mx-auto object-contain h-16 w-auto"
                    />
                    <p className="text-[11px] font-semibold text-gray-800 mt-2 truncate">
                      {p.name}
                    </p>
                    <p className="text-[10px] text-blue-600 font-medium mt-0.5">
                      {minP === 0 ? "Bientôt" : `${minP.toLocaleString()} F`}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md
                      border-t border-gray-100 px-5 py-4">
        <div className="max-w-lg mx-auto flex gap-3">

          {/* Price pill */}
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl
                          flex flex-col items-center justify-center py-2 px-3">
            <span className="text-[10px] text-gray-400 font-medium">Prix</span>
            <span className="text-sm font-bold text-gray-900">
              {selectedVariant && !isComingSoon
                ? fmt(selectedVariant.price)
                : "—"}
            </span>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 bg-[#25D366]
                       hover:bg-[#1ebe5d] text-white rounded-xl py-3.5 text-sm font-semibold
                       transition-colors duration-200 shadow-md shadow-green-100"
          >
            <FaWhatsapp size={18} />
            Commander via WhatsApp
          </a>

        </div>
      </div>

    </div>
  );
}
