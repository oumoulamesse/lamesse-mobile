"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Thiane L.",
    city: "Dakar",
    text: "iPhone 14 Pro reçu en 24h. Produit 100% original et service très professionnel.",
  },
  {
    id: 2,
    name: "Awa S.",
    city: "Pikine",
    text: "Échange accepté rapidement. Très satisfaite du service.",
  },
  {
    id: 3,
    name: "Cheikh T.",
    city: "Guédiawaye",
    text: "Livraison rapide et téléphone comme neuf. Je recommande.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
          Ils nous font confiance
        </h2>

        <p className="text-gray-500 text-sm mb-10">
          Plus de 500 clients satisfaits à Dakar.
        </p>

        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full px-2"
              >
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                    “{testimonial.text}”
                  </p>

                  {/* Name */}
                  <p className="text-gray-900 font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {testimonial.city}
                  </p>

                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full cursor-pointer transition ${
                  current === index
                    ? "bg-gray-900 w-5"
                    : "bg-gray-300 w-1.5"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}