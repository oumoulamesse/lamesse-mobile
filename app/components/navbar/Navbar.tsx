"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Info,
  ShoppingBag,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Accueil", path: "#hero", icon: Home },
    { name: "À Propos", path: "#whychoose", icon: Info },
    { name: "Boutique", path: "#products", icon: ShoppingBag },
    { name: "Contact", path: "#footer", icon: MessageCircle },
  ];

  return (
    <>
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
            <Link
      href="#hero"
      className="group flex items-center gap-2 text-xl font-semibold tracking-tight"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-105 transition">
        LM
      </div>

      <span className="text-gray-900 group-hover:text-blue-600 transition">
        Lamesse<span className="text-blue-600">Mobile</span>
      </span>
    </Link>

          {/* DESKTOP */}
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className="flex items-center gap-2 font-medium text-gray-600 hover:text-blue-600 transition"
                >
                  <Icon size={18} />
                  {link.name}
                </a>
              );
            })}

            <a
              href="#products"
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              Voir la boutique
            </a>
          </nav>

          {/* BURGER */}
          <div className="md:hidden cursor-pointer" onClick={() => setOpen(true)}>
            <Menu size={26} />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-50">
          <div className="w-64 h-full bg-white p-6 flex flex-col justify-between animate-slideIn">

            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-semibold text-gray-800">Menu</span>
                <X onClick={() => setOpen(false)} />
              </div>

              <div className="flex flex-col gap-4">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition"
                    >
                      <Icon size={20} />
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-3 rounded-full text-center font-semibold"
            >
              Voir la boutique
            </a>
          </div>
        </div>
      )}
    </>
  );
}