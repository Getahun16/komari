"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-emerald-50 to-white mt-8">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl -z-10 opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-300 rounded-full blur-3xl -z-10 opacity-10"></div>

      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-center">
        {/* Left side */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Let’s Connect
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Whether you’re a distributor, customer, or just curious about our
            products, we’d love to hear from you.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              📧 <strong>Email:</strong> info@komaribeverage.et
            </p>
            <p>
              📞 <strong>Phone:</strong> +251 900 123 456
            </p>
            <p>
              📍 <strong>Address:</strong> Addis Ababa, Ethiopia
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block font-semibold mb-2 text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block font-semibold mb-2 text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block font-semibold mb-2 text-gray-800"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Send Message
          </button>

          {sent && (
            <p className="mt-4 text-emerald-600 font-semibold text-center">
              ✅ Your message has been sent!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
