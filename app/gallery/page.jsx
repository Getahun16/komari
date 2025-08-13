"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const galleryImages = [
  "/images/product1.jpeg",
  "/images/product2.jpeg",
  "/images/product3.jpeg",
  "/images/product4.jpeg",
];

export default function GallerySlider() {
  // sliderRef is attached to the DOM, slider is the instance
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
  });

  // Autoplay
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next(); // use slider.current
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 mt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12 text-center">
        Our Gallery
      </h1>

      <div ref={sliderRef} className="keen-slider">
        {galleryImages.map((src, i) => (
          <div key={i} className="keen-slider__slide">
            <div className="overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={600}
                height={400}
                unoptimized
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
