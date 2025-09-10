import { MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const whatsappLink =
    "https://wa.me/1234567890?text=Hello! I'd like to know more about Umami Lab and make a reservation.";

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Ready to Experience <span className="text-orange-500">Umami?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Reserve your table or ask us anything. We're here to make your
            dining experience unforgettable.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-full hover:bg-orange-600 hover:shadow-xl transition-all duration-300 font-semibold text-xl transform hover:scale-105 mb-12"
          >
            <MessageCircle size={24} />
            Contact on WhatsApp
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">
              Pusa, New Delhi,<br/>Delhi 110012
              <br />
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Opening</h3>
            <p className="text-gray-600">
              October 2025
              <br />
              <span className="text-sm">Hours to be announced</span>
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Contact</h3>
            <p className="text-gray-600">
              WhatsApp for reservations
              <br />
              <span className="text-sm">Available 24/7</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
