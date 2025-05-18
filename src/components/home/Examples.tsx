import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Coffee, Scissors, ShoppingBag as Shopping } from 'lucide-react';

const Examples = () => {
  const exampleBusinesses = [
    {
      type: "restaurant",
      name: "Spice Garden Restaurant",
      description: "An authentic Indian restaurant with online menu, reservation system, and food delivery integration.",
      image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Utensils className="h-5 w-5" />
    },
    {
      type: "cafe",
      name: "Brew Corner Café",
      description: "A cozy café showcasing their specialty coffees, pastries, and upcoming events calendar.",
      image: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Coffee className="h-5 w-5" />
    },
    {
      type: "salon",
      name: "Style Studio Salon",
      description: "A hair salon with service listings, stylist profiles, and online appointment booking.",
      image: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Scissors className="h-5 w-5" />
    },
    {
      type: "retail",
      name: "Urban Trends Boutique",
      description: "A clothing boutique with product catalog, featured collections, and customer reviews.",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Shopping className="h-5 w-5" />
    }
  ];

  return (
    <section id="examples" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Example Websites</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Take a look at how different types of businesses can benefit from our website solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exampleBusinesses.map((business, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={business.image} 
                  alt={business.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-orange-500 rounded-full text-white mr-3">
                        {business.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{business.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{business.description}</p>
                <Link
                  to={`/example/${business.type}`}
                  className="inline-flex items-center text-blue-800 font-medium hover:text-orange-500 transition-colors"
                >
                  View Example <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Create Your Business Website Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Examples;