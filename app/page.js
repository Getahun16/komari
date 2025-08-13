"use client";

import Hero from "./components/Hero";

const featuredProducts = [
  {
    id: 1,
    name: "Komari Lager",
    description: "A smooth and refreshing lager brewed with Ethiopian barley.",
    image: "/images/pro1.jpeg",
  },
  {
    id: 2,
    name: "Komari Stout",
    description: "Rich, dark stout with notes of coffee and chocolate.",
    image: "/images/pro2.jpeg",
  },
  {
    id: 3,
    name: "Komari IPA",
    description: "Bold and hoppy IPA with a crisp finish.",
    image: "/images/product1.jpeg",
  },
];

const latestNews = [
  {
    id: 1,
    title: "Komari Launches New Seasonal Brew",
    date: "August 10, 2025",
    summary:
      "Try our refreshing summer special, brewed with local ingredients.",
  },
  {
    id: 2,
    title: "Komari Sponsors Ethiopian Music Festival",
    date: "July 20, 2025",
    summary: "Proud to support local music and culture.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Tsehay Alemu",
    role: "Customer",
    comment:
      "Komari beverages are the best I've tasted! Always fresh and full of flavor.",
  },
  {
    id: 2,
    name: "Daniel Tesfaye",
    role: "Restaurant Owner",
    comment:
      "Our customers love serving Komari products. The quality is unmatched.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Our Promise */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-700 mb-6">
          Our Promise
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Komari Beverage, we believe in delivering refreshing, high-quality
          drinks crafted with care in Ethiopia. Taste the tradition and feel the
          freshness.
        </p>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-700">
            Featured Products
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map(({ id, name, description, image }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-48 h-48 object-cover mb-4 rounded-2xl"
                />
                <h3 className="text-xl font-bold mb-2 text-emerald-700">
                  {name}
                </h3>
                <p className="text-gray-600 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-700">
          Latest News & Events
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {latestNews.map(({ id, title, date, summary }) => (
            <article
              key={id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-1">{title}</h3>
              <time className="text-sm text-gray-500">{date}</time>
              <p className="mt-2 text-gray-700">{summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-emerald-700">
            What Our Customers Say
          </h2>
          <div className="space-y-8">
            {testimonials.map(({ id, name, role, comment }) => (
              <blockquote
                key={id}
                className="bg-white rounded-2xl shadow-lg p-8 italic text-gray-700 transform transition-transform duration-300 hover:scale-105"
              >
                “{comment}”
                <footer className="mt-4 font-semibold text-gray-900">
                  — {name}, <span className="font-normal">{role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-emerald-700">
          Ready to experience Komari?
        </h2>
        <p className="mb-8 text-gray-700 text-lg max-w-xl mx-auto">
          Contact us today to find a store near you or to learn more about our
          products.
        </p>
        <a
          href="/contact"
          className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
