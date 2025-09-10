import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink =
    "https://wa.me/1234567890?text=Hello! I found you through your website.";

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">UL</span>
              </div>
              <span className="ml-3 text-xl font-bold">Umami Lab</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Where centuries of Japanese culinary tradition meets bold
              innovation. Experience the perfect harmony of authentic flavors
              and modern gastronomy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#anime"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Anime Collabs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 mb-4">
              Pusa, New Delhi, Delhi 110012
            </p>
            <p className="text-gray-400 mb-4">Opening October 2025</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Umami Lab. All Rights Reserved.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition-colors"
                title="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
