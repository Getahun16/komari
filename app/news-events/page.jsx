"use client";

import Image from "next/image";

const news = [
  {
    title: "Komari launches seasonal Mango flavor",
    date: "Aug 1, 2025",
    excerpt: "A new limited seasonal mango beverage, made with local mangoes.",
    image: "/images/arada2.jpeg",
  },
  {
    title: "Komari partners with local farmers",
    date: "May 12, 2025",
    excerpt: "New sourcing partnership to support local fruit farmers.",
    image: "/images/event.jpeg",
  },
];

const events = [
  {
    title: "Addis Flavor Fest — Komari Booth",
    date: "Sep 15, 2025",
    location: "Addis Ababa Exhibition Center",
    desc: "Come taste new releases and win branded merch.",
  },
  {
    title: "Community Clean-Up",
    date: "Oct 10, 2025",
    location: "Akaki River",
    desc: "Sustainability event with volunteers and staff.",
  },
];

export default function NewsEventsPage() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 grid gap-12 md:grid-cols-2 mt-8">
      {/* Latest News */}
      <div>
        <h1 className="text-4xl font-bold text-emerald-700 mb-8 text-center md:text-left">
          Latest News
        </h1>
        <div className="grid gap-6">
          {news.map((n, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={n.image}
                  alt={n.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{n.date}</p>
                <h2 className="text-xl font-bold text-emerald-700 mb-2">
                  {n.title}
                </h2>
                <p className="text-gray-700 text-sm">{n.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h1 className="text-4xl font-bold text-emerald-700 mb-8 text-center md:text-left">
          Upcoming Events
        </h1>
        <div className="space-y-6">
          {events.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border border-emerald-100"
            >
              <p className="text-sm text-gray-500 mb-1">{e.date}</p>
              <h2 className="text-lg font-bold text-emerald-700 mb-1">
                {e.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{e.location}</p>
              <p className="text-gray-700 text-sm">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
