import { MessageCircle, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/1234567890?text=Hello! I'd like to make a reservation at Umami Lab.";

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center">
            <img
              src="/umami_lab.png"
              width={100}
              height={100}
              className="w-[100px] h-[100px] aspect-square scale-[160%]"
            />
          </div>
          <div className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-2">
            Opening October 2025 • Pusa, New Delhi
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-orange-500">Beyond Sushi. Beyond Sake.</span>
          <br />
          <span className="text-gray-800">Beyond Ordinary</span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-medium">
            Taste the Fifth Element
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Where centuries of Japanese culinary tradition meets bold innovation.
          Experience the perfect harmony of authentic flavors and modern
          gastronomy, crafted to awaken your fifth taste sensation — umami.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 hover:shadow-xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg transform hover:scale-105"
          >
            <MessageCircle size={20} />
            Contact Us on WhatsApp
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
