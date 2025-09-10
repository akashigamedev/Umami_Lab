const MascotSection = () => {
  return (
    <section id="mascot" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Meet <span className="text-orange-500">Mochiko</span>
              <br />
              Your Culinary Guide
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our beloved kitsune-inspired fox chef and scientist, Mochiko,
              embodies the playful spirit and culinary wisdom of Umami Lab. With
              ancient knowledge of Japanese flavors and a passion for modern
              innovation, Mochiko guides every dish from our kitchen to your
              table.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              More than just a mascot, Mochiko represents our commitment to
              bridging tradition with creativity, ensuring every meal becomes an
              unforgettable journey through the depths of Japanese cuisine.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img src="/mochiko_side.jpg" width={50} height={50} className="w-12 h-12 aspect-square rounded-full object-cover" />
              <div>
                <div className="font-semibold text-gray-800">
                  Mochiko
                </div>
                <div className="text-sm text-gray-600">
                  Head Chef & Culinary Scientist
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 via-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center flex flex-col gap-2 items-center ">
                  <img
                    src="/mochiko_avatar.png"
                    className="-mr-10 w-50 h-50 aspect-square"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MascotSection;
