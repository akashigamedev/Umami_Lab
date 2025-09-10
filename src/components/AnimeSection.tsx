import { Star, Gift } from 'lucide-react';

const AnimeSection = () => {
  const collaborations = [
    { name: "Studio Ghibli Menu", status: "Coming Soon", image: "/ghibli_menu.jpg" },
    { name: "Demon Slayer Themed Dishes", status: "Coming Soon", image: "/demon_slayer_menu.png" },
    { name: "Attack on Titan Experience", status: "Coming Soon", image: "/aot_menu.jpg" },
    { name: "Jujutsu Kaisen Menu", status: "Coming Soon", image: "/jjk_menu.png" }
  ];

  return (
    <section id="anime" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-orange-500">
              Anime Collaborations
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in exclusive anime-themed experiences with limited-edition menus, 
            collectible merchandise, and seasonal events celebrating Japanese pop culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {collaborations.map((collab, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img src={collab?.image} className='w-full h-full object-cover' />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{collab.name}</h3>
              <p className="text-sm text-gray-600">{collab.status}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="text-orange-500" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Limited Edition Merch</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Exclusive collectibles, apparel, and dining accessories featuring your favorite anime characters 
              and Umami Lab collaborations.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-purple-100 rounded-lg p-4">
              <p className="text-sm text-gray-700 font-medium">🎌 Pre-orders starting September 2025</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-purple-500" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Seasonal Events</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Monthly themed dining experiences, cosplay nights, and special screenings 
              paired with carefully crafted anime-inspired menus.
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4">
              <p className="text-sm text-gray-700 font-medium">✨ First event: November 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeSection;