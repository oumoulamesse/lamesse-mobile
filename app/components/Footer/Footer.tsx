"use client";

import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-wide">
            Lamesse<span className="text-primary">Mobile</span>
          </h3>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Boutique spécialisée dans la vente d’iPhone authentiques au Sénégal.
            Produits originaux testés et vérifiés, avec garantie et livraison rapide.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/221774813790"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500/10 p-3 rounded-full hover:bg-green-500 transition"
            >
              <FaWhatsapp className="text-green-400 hover:text-white" />
            </a>

            <a
              href="#"
              className="bg-blue-500/10 p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF className="text-blue-400 hover:text-white" />
            </a>

            <a
              href="#"
              className="bg-pink-500/10 p-3 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-pink-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Navigation</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Accueil
              </Link>
            </li>
            <li>
              <a href="#products" className="hover:text-primary transition">
                iPhone disponibles
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/221774813790"
                target="_blank"
                className="hover:text-primary transition"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>

          <p className="text-white/60 text-sm mb-3">
            Dakar, Sénégal
          </p>

          <p className="text-white/60 text-sm mb-3">
            Disponible 7j/7
          </p>

          <a
            href="https://wa.me/221774813790"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-green-500 transition"
          >
            <FaWhatsapp />
            WhatsApp Direct
          </a>

          <p className="text-white/40 text-xs mt-4">
            Assistance rapide et sécurisée
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Restez informé
          </h4>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-primary py-2 rounded-md hover:bg-blue-700 transition font-medium">
              S’abonner
            </button>
          </div>

          <p className="text-white/40 text-xs mt-3">
            Nouveaux modèles et offres exclusives.
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 mt-14 pt-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Lamesse Mobile – Boutique iPhone au Sénégal.
        Tous droits réservés.
      </div>
    </footer>
  );
}