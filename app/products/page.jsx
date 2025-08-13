"use client";

import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "Komari Sparkling Water",
      description: "Pure, crisp, and naturally refreshing.",
      image: "/images/product1.jpeg",
    },
    {
      name: "Komari Fruit Blend",
      description: "A delicious mix of natural fruit flavors.",
      image: "/images/product2.jpeg",
    },
    {
      name: "Komari Energy Drink",
      description: "Boost your energy with our revitalizing formula.",
      image: "/images/product3.jpeg",
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-6 mt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12 text-center">
        Our Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-emerald-700">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
