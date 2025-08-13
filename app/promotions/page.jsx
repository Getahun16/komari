"use client";

import Image from "next/image";

const promos = [
  {
    title: "Buy 2 Get 1 Free — Summer Promo",
    period: "Jun 1 — Aug 31, 2025",
    details:
      "Buy any two 500ml bottles and get one free. Available in selected stores.",
    image: "/images/product1.jpeg",
  },
  {
    title: "Festival Discount",
    period: "Sep 12 — Sep 18, 2025",
    details: "20% off on all Komari products at Addis Flavor Fest.",
    image: "/images/images.jpeg",
  },
];

export default function PromotionsPage() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 mt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12 text-center">
        Current Promotions
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {promos.map((p, i) => (
          <div
            key={i}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-64 w-full">
              <Image
                src={p.image}
                alt={p.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold text-emerald-700 mb-1">
                {p.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{p.period}</p>
              <p className="text-gray-700 text-sm">{p.details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-emerald-50 p-8 rounded-2xl shadow-md border border-emerald-100 text-center">
        <h3 className="font-semibold text-emerald-700 text-lg mb-2">
          How to redeem
        </h3>
        <p className="text-gray-700 text-sm">
          Show this promotion at participating stores or enter the promo code at
          checkout (where applicable). Promotions cannot be combined.
        </p>
      </div>
    </section>
  );
}
