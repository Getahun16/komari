export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Komari Beverage</h2>
          <p className="text-sm leading-relaxed">
            Refreshing the nation with premium quality beverages crafted with
            care and passion. Our mission is to deliver taste, health, and
            sustainability in every sip.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-emerald-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-emerald-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-emerald-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-emerald-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Addis Ababa, Ethiopia</li>
            <li>📞 +251 900 123 456</li>
            <li>📧 info@komaribeverage.et</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-emerald-500 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.022 3.657 9.184 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.9h-2.33V22c4.78-.746 8.437-4.908 8.437-9.93z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-emerald-500 transition"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.51-4.193 11.867-11.867 11.867-2.36 0-4.555-.69-6.4-1.874.33.04.65.053.993.053a8.4 8.4 0 0 0 5.2-1.793 4.198 4.198 0 0 1-3.918-2.91c.26.04.52.066.793.066.38 0 .76-.053 1.113-.146a4.19 4.19 0 0 1-3.36-4.114v-.053c.56.312 1.207.5 1.9.526a4.18 4.18 0 0 1-1.867-3.49c0-.78.207-1.493.57-2.114a11.88 11.88 0 0 0 8.62 4.38 4.727 4.727 0 0 1-.106-.96 4.19 4.19 0 0 1 4.19-4.19c1.206 0 2.293.5 3.057 1.3a8.28 8.28 0 0 0 2.66-1.013 4.18 4.18 0 0 1-1.84 2.307 8.42 8.42 0 0 0 2.4-.65 9.02 9.02 0 0 1-2.093 2.16z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-emerald-500 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Komari Beverage. All rights reserved.
      </div>
    </footer>
  );
}
