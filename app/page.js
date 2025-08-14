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
      "Try our refreshing summer special, brewed with local ingredients. This limited-edition lager is crafted to beat the summer heat.",
    image: "/images/flav.jpg",
  },
  {
    id: 2,
    title: "Komari Sponsors Ethiopian Music Festival",
    date: "July 20, 2025",
    summary:
      "Proud to support local music and culture with the biggest music festival of the year.",
    image: "/images/event.jpeg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Tsehay Alemu",
    role: "Customer",
    image: "/images/test1.jpeg",
    comment:
      "Komari beverages are the best I've tasted! Always fresh and full of flavor.",
  },
  {
    id: 2,
    name: "Daniel Tesfaye",
    role: "Restaurant Owner",
    image: "/images/test2.jpeg",
    comment:
      "Our customers love serving Komari products. The quality is unmatched.",
  },
  {
    id: 3,
    name: "Sara Yohannes",
    role: "Event Organizer",
    image: "/images/komari.jpeg",
    comment:
      "Komari drinks are always a highlight at our events. Professional service and excellent taste!",
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
          {latestNews.map(({ id, title, date, summary, image }) => (
            <article
              key={id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-1">{title}</h3>
                <time className="text-sm text-gray-500">{date}</time>
                <p className="mt-2 text-gray-700">{summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-emerald-700">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ id, name, role, image, comment }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-emerald-600 shadow-md"
                />
                <p className="italic text-gray-700 mb-4">“{comment}”</p>
                <h4 className="text-lg font-bold text-emerald-700">{name}</h4>
                <span className="text-sm text-gray-500">{role}</span>
              </div>
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
