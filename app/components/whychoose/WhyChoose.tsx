"use client";

import { ShieldCheck, Truck, BadgeCheck, MessageCircle } from "lucide-react";

export default function WhyChoose() {
  return (
    <section id="whychoose" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-midnight_text mb-12">
          Pourquoi choisir Lamesse Mobile ?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <ShieldCheck className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Produits Originaux</h3>
            <p className="text-gray-500 text-sm">
              Smartphones certifiés et 100% authentiques.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <Truck className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Livraison Rapide</h3>
            <p className="text-gray-500 text-sm">
              Expédition rapide partout au Sénégal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <BadgeCheck className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Garantie 12 Mois</h3>
            <p className="text-gray-500 text-sm">
              Protection et service après-vente fiable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <MessageCircle className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Support WhatsApp</h3>
            <p className="text-gray-500 text-sm">
              Réponse rapide et assistance personnalisée.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}