"use client";

import { ShieldCheck, Truck, BadgeCheck, MessageCircle } from "lucide-react";

export default function WhyChoose() {
  return (
    <section id="whychoose" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-midnight_text mb-4">
          L’expertise Apple au Sénégal
        </h2>

        <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-sm">
          Lamesse Mobile vous propose une sélection rigoureuse d’iPhone
          authentiques avec un service professionnel et transparent.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <ShieldCheck className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Authenticité Garantie</h3>
            <p className="text-gray-500 text-sm">
              iPhone 100% originaux, vérifiés et testés avant livraison.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <Truck className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Livraison Sécurisée</h3>
            <p className="text-gray-500 text-sm">
              Livraison rapide à Dakar et dans tout le Sénégal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <BadgeCheck className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Garantie & Assistance</h3>
            <p className="text-gray-500 text-sm">
              Garantie claire et service après-vente professionnel.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <MessageCircle className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Conseil Personnalisé</h3>
            <p className="text-gray-500 text-sm">
              Accompagnement direct via WhatsApp pour un achat sécurisé.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}