"use client";

import Image from "next/image";

export default function BrandStoryPage() {
  const timeline = [
    {
      year: "2005",
      title: "Founded in Addis Ababa",
      description: "Komari started as a small local bottling company.",
    },
    {
      year: "2010",
      title: "First National Distribution",
      description: "Expanded distribution across major Ethiopian cities.",
    },
    {
      year: "2018",
      title: "Sustainability Initiatives",
      description: "Launched water reuse and recycling programs.",
    },
    {
      year: "2023",
      title: "Modernized Plant",
      description: "Opened a new, energy-efficient production facility.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 mt-8">
      {/* Brand Intro */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
            Our Brand Story
          </h1>
          <p className="text-gray-700 mb-6">
            Komari Beverage is committed to bringing quality, locally produced
            beverages to Ethiopia and beyond. From humble beginnings to a modern
            production facility, our story is about community, craft, and
            responsible growth.
          </p>

          <h3 className="mt-6 font-semibold text-emerald-700">Mission</h3>
          <p className="text-gray-600 mb-4">
            To deliver refreshing, high-quality beverages that celebrate
            Ethiopian flavors while respecting the environment.
          </p>

          <h3 className="mt-4 font-semibold text-emerald-700">Vision</h3>
          <p className="text-gray-600">
            To be the most trusted beverage brand in the region and a leader in
            sustainable production.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/brand.jpeg"
            alt="Komari bottle"
            width={640}
            height={480}
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center md:text-left">
          Milestones
        </h2>
        <div className="relative border-l-2 border-emerald-200 ml-4 md:ml-0">
          {timeline.map((item, i) => (
            <div key={i} className="mb-8 ml-6 md:ml-12 relative">
              <div className="absolute -left-4 md:-left-6 top-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg"></div>
              <p className="text-emerald-700 font-semibold">{item.year}</p>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Achievements */}
      <div>
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center md:text-left">
          Awards & Achievements
        </h2>
        <ul className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="font-semibold text-lg">
              Best Local Beverage 2019
            </div>
            <div className="text-sm text-gray-600 mt-2">
              Awarded by Ethiopian Food Awards
            </div>
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="font-semibold text-lg">
              Sustainability Leader 2022
            </div>
            <div className="text-sm text-gray-600 mt-2">
              Recognized for water recycling program
            </div>
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="font-semibold text-lg">Quality Excellence 2024</div>
            <div className="text-sm text-gray-600 mt-2">
              ISO food-safety certification
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
