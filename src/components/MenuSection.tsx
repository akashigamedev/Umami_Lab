import { ChefHat, Utensils, Coffee } from "lucide-react";

const MenuSection = () => {
  const menuCategories = [
    {
      icon: <Utensils className="text-blue-500" size={24} />,
      title: "Signature Ramen",
      hero: "Gojo's Limitless Ramen",
      description:
        "Rich tonkotsu broth with house-made noodles and premium toppings",
      price: "₹899",
    },
    {
      icon: <Coffee className="text-purple-500" size={24} />,
      title: "Themed Combos",
      hero: "Shibuya Incident Combo",
      description: "Sushi platter with miso soup, edamame, and dessert",
      price: "₹1,299",
    },
    {
      icon: <ChefHat className="text-orange-500" size={24} />,
      title: "Omakase",
      hero: "Champion's Omakase",
      description: "Chef's premium selection featuring seasonal delicacies",
      price: "₹2,999",
    },
  ];

  const categories = [
    { name: "Sushi & Sashimi", items: "12 varieties" },
    { name: "Ramen & Noodles", items: "8 varieties" },
    { name: "Bento Boxes", items: "6 varieties" },
    { name: "Japanese Cocktails", items: "15 varieties" },
    { name: "Traditional Desserts", items: "10 varieties" },
    { name: "Sake & Beverages", items: "20+ varieties" },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-500">Menu</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From traditional favorites to innovative fusion creations, every
            dish tells a story of Japanese culinary excellence.
          </p>
        </div>

        {/* Hero Dishes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {menuCategories.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {item.hero}
              </h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-500">
                  {item.price}
                </span>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍜</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Complete Menu Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-600">{category.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              Full menu with pricing available upon opening
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
