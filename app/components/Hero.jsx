import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-lime-400 text-white py-20 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Refresh Your World with Komari
          </h1>
          <p className="mb-6">
            Ethiopia’s leading beverage innovator — taste the difference.
          </p>
          <a
            href="/products"
            className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-lime-100 transition"
          >
            Explore Our Products
          </a>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/images/factory.jpeg"
            alt="Komari Beverage Bottle"
            width={300}
            height={300}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
