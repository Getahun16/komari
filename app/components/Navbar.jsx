"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brand-story", label: "Brand Story" },
  { href: "/products", label: "Products" },
  { href: "/news-events", label: "News & Events" },
  { href: "/promotions", label: "Promotions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.jpeg"
            alt="Komari Beverage Logo"
            className="h-12 w-12 mr-3 rounded-full shadow-md"
          />
          <span className="text-3xl font-extrabold text-emerald-600 select-none">
            Komari
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-gray-700">
          {navLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              className="relative group hover:text-emerald-600 transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-8 h-8 text-emerald-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col px-6 space-y-3 font-semibold text-gray-700">
            {navLinks.map(({ href, label }) => (
              <Link
                href={href}
                key={href}
                className="block hover:text-emerald-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
