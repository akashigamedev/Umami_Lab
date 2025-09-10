import { Percent, Gift, Calendar, MessageCircle } from 'lucide-react';

const OffersSection = () => {
  const whatsappLink = "https://wa.me/1234567890?text=I'm interested in the grand opening offers at Umami Lab!";

  return (
    <section id="offers" className="py-20 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-orange-500">
              Grand Opening Offers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrate the launch of Umami Lab with exclusive deals and limited-time promotions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Offer */}
          <div className="bg-gradient-to-br from-orange-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Percent className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Opening Week Special</h3>
            </div>
            <div className="mb-6">
              <div className="text-6xl font-bold mb-2">20% OFF</div>
              <p className="text-xl opacity-90">On all menu items</p>
              <p className="opacity-80">October 1-7, 2025</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm">Valid for dine-in customers only. Cannot be combined with other offers.</p>
            </div>
          </div>

          {/* Secondary Offers */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="text-orange-500" size={24} />
                <h4 className="text-xl font-bold text-gray-800">First 100 Customers</h4>
              </div>
              <p className="text-gray-600 mb-3">
                Complimentary Mochiko merchandise and a special welcome drink for the first 100 diners.
              </p>
              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-sm text-orange-700 font-medium">🎁 Limited quantity available</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-blue-500" size={24} />
                <h4 className="text-xl font-bold text-gray-800">Monthly Specials</h4>
              </div>
              <p className="text-gray-600 mb-3">
                Exclusive seasonal menus and themed dining experiences every month.
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-blue-700 font-medium">📅 Starting November 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105"
          >
            <MessageCircle size={20} />
            Reserve Your Table Now
          </a>
          <p className="text-sm text-gray-600 mt-4">Contact us to secure your spot for opening week!</p>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;