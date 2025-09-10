import { MessageCircle } from "lucide-react";
import ScrollLink from "./ScrollLink";

const Header = () => {
  const whatsappLink =
    "https://wa.me/1234567890?text=Hello! I'd like to know more about Umami Lab.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 overflow-visible">
          <div className="flex items-center">
            <img
              src="/umami_lab.png"
              width={80}
              height={80}
              className="w-20 h-20 aspect-square scale-150"
            />
            <span className="ml-3 text-xl font-bold bg-orange-700 bg-clip-text text-transparent">
              Umami Lab
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="hero"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="anime"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Anime Collabs
            </ScrollLink>
            <ScrollLink
              to="menu"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="contact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </ScrollLink>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
