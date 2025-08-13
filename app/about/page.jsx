"use client";

export default function About() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-10 text-center">
        About Komari Beverage
      </h1>

      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        <p>
          Komari Beverage is proud to be Ethiopia’s leading provider of
          refreshing, high-quality drinks. Our mission is to combine the rich
          traditions of Ethiopian hospitality with modern innovation in beverage
          production.
        </p>

        <p>
          From sourcing natural ingredients to implementing sustainable
          production processes, we ensure every bottle meets our commitment to{" "}
          <span className="font-semibold text-emerald-600">
            quality and care
          </span>
          . We believe every sip should be a celebration of{" "}
          <span className="italic text-emerald-500">
            taste, culture, and community
          </span>
          .
        </p>

        <p>
          Founded with a vision to innovate in Ethiopia’s beverage industry, we
          continue to grow, bringing refreshing flavors to people across the
          country and beyond.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="bg-emerald-50 p-8 rounded-2xl shadow-lg text-center max-w-lg">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-700">
            Sustainability, quality, and innovation drive every decision we
            make. We aim to create beverages that people love while caring for
            our communities and environment.
          </p>
        </div>
      </div>
    </section>
  );
}
