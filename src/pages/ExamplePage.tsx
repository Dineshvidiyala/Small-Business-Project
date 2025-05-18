import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin, Clock, Share2 } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Example business data for different types
const businessExamples = {
  restaurant: {
    name: "Spice Garden Restaurant",
    tagline: "Authentic Indian Cuisine",
    description: "Experience the rich flavors of authentic Indian cuisine in a warm, inviting atmosphere. Our menu features traditional dishes made with fresh ingredients and aromatic spices.",
    phone: "+91 9876543210",
    email: "info@spicegarden.com",
    address: "123 Food Street, Indiranagar, Bangalore - 560038",
    hours: [
      { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
      { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
      { day: "Sunday", hours: "12:00 PM - 9:00 PM" }
    ],
    images: [
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    integrations: [
      { name: "Swiggy", url: "https://www.swiggy.com" },
      { name: "Zomato", url: "https://www.zomato.com" }
    ],
    menu: [
      {
        category: "Starters",
        items: [
          { name: "Paneer Tikka", price: "₹220", description: "Marinated cottage cheese, grilled to perfection" },
          { name: "Vegetable Samosa", price: "₹120", description: "Crispy pastry filled with spiced potatoes and peas" },
          { name: "Chicken Kebab", price: "₹280", description: "Tender pieces of chicken marinated in spices" }
        ]
      },
      {
        category: "Main Course",
        items: [
          { name: "Butter Chicken", price: "₹380", description: "Creamy tomato sauce with tender chicken pieces" },
          { name: "Palak Paneer", price: "₹320", description: "Cottage cheese cubes in a spinach gravy" },
          { name: "Dal Makhani", price: "₹290", description: "Black lentils simmered overnight with cream" }
        ]
      }
    ]
  },
  cafe: {
    name: "Brew Corner Café",
    tagline: "Specialty Coffee & Fresh Pastries",
    description: "A cozy neighborhood café offering specialty coffees, fresh pastries, and a relaxing atmosphere. Perfect for work, catching up with friends, or enjoying a quiet moment.",
    phone: "+91 9876543211",
    email: "hello@brewcorner.com",
    address: "45 Coffee Lane, Koramangala, Bangalore - 560034",
    hours: [
      { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
      { day: "Saturday - Sunday", hours: "8:00 AM - 9:00 PM" }
    ],
    images: [
      "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    integrations: [
      { name: "Swiggy", url: "https://www.swiggy.com" }
    ],
    menu: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: "₹120", description: "Single shot of our signature espresso blend" },
          { name: "Cappuccino", price: "₹180", description: "Espresso with steamed milk and foam" },
          { name: "Cold Brew", price: "₹200", description: "Slow-brewed coffee served over ice" }
        ]
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: "₹150", description: "Buttery, flaky pastry, baked fresh daily" },
          { name: "Blueberry Muffin", price: "₹130", description: "Moist muffin bursting with fresh blueberries" },
          { name: "Chocolate Brownie", price: "₹180", description: "Rich, fudgy brownie with dark chocolate chunks" }
        ]
      }
    ]
  },
  salon: {
    name: "Style Studio Salon",
    tagline: "Where Style Meets Excellence",
    description: "A premier salon offering a range of hair, beauty, and wellness services. Our experienced stylists are dedicated to helping you look and feel your best.",
    phone: "+91 9876543212",
    email: "appointments@stylestudio.com",
    address: "78 Beauty Boulevard, HSR Layout, Bangalore - 560102",
    hours: [
      { day: "Tuesday - Friday", hours: "10:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "11:00 AM - 6:00 PM" },
      { day: "Monday", hours: "Closed" }
    ],
    images: [
      "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    integrations: [],
    services: [
      {
        category: "Hair Services",
        items: [
          { name: "Haircut & Styling", price: "₹800 - ₹1500", description: "Precision cut and style by our expert stylists" },
          { name: "Hair Coloring", price: "₹2500 - ₹5000", description: "From highlights to full color transformation" },
          { name: "Keratin Treatment", price: "₹6000 - ₹10000", description: "Smoothing treatment for frizz-free hair" }
        ]
      },
      {
        category: "Beauty Services",
        items: [
          { name: "Facial", price: "₹1800 - ₹3500", description: "Customized facials for all skin types" },
          { name: "Manicure & Pedicure", price: "₹1200", description: "Nail care, shaping, and polish application" },
          { name: "Bridal Makeup", price: "₹8000 - ₹15000", description: "Complete bridal makeup with trial session" }
        ]
      }
    ]
  },
  retail: {
    name: "Urban Trends Boutique",
    tagline: "Contemporary Fashion For Every Occasion",
    description: "A curated collection of contemporary fashion for men and women. Discover the latest trends, accessories, and statement pieces to express your unique style.",
    phone: "+91 9876543213",
    email: "shop@urbantrends.com",
    address: "21 Fashion Street, MG Road, Bangalore - 560001",
    hours: [
      { day: "Monday - Saturday", hours: "10:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "11:00 AM - 7:00 PM" }
    ],
    images: [
      "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    integrations: [],
    collections: [
      {
        name: "Summer Collection",
        description: "Light, breathable fabrics in vibrant colors for the summer season.",
        items: [
          { name: "Linen Blend Shirt", price: "₹1,990", image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
          { name: "Cotton Maxi Dress", price: "₹2,490", image: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
          { name: "Lightweight Chinos", price: "₹1,790", image: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
        ]
      },
      {
        name: "Accessories",
        description: "Complete your look with our handpicked accessories.",
        items: [
          { name: "Leather Belt", price: "₹1,290", image: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
          { name: "Stainless Steel Watch", price: "₹3,990", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
          { name: "Sunglasses", price: "₹1,490", image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
        ]
      }
    ]
  }
};

const ExamplePage = () => {
  const { businessType } = useParams<{businessType?: string}>();
  const business = businessType && businessExamples[businessType as keyof typeof businessExamples];

  useEffect(() => {
    if (business) {
      document.title = `${business.name} - BizLaunch Sites Example`;
    } else {
      document.title = 'Example Not Found - BizLaunch Sites';
    }
  }, [business]);

  if (!business) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Example Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, the example you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-800 font-medium hover:text-orange-500 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" /> Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 bg-white shadow-sm z-40 py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-800 font-medium hover:text-orange-500 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" /> Back to BizLaunch Sites
            </Link>
            <div className="text-sm text-gray-500">
              Example website created by BizLaunch Sites
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] lg:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={business.images[0]} 
              alt={business.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {business.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">{business.tagline}</p>
              {business.integrations.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {business.integrations.map((integration, index) => (
                    <a 
                      key={index}
                      href={integration.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-blue-50 transition-colors"
                    >
                      Order on {integration.name} <ExternalLink size={18} className="ml-2" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {business.description}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-orange-500 h-5 w-5 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">Call Us</p>
                      <a href={`tel:${business.phone}`} className="text-gray-600">
                        {business.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-orange-500 h-5 w-5 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">Email Us</p>
                      <a href={`mailto:${business.email}`} className="text-gray-600">
                        {business.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-orange-500 h-5 w-5 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">Visit Us</p>
                      <p className="text-gray-600">{business.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-orange-500 h-5 w-5 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">Business Hours</p>
                      <ul className="text-gray-600">
                        {business.hours.map((schedule, index) => (
                          <li key={index}>
                            <span className="font-medium">{schedule.day}:</span> {schedule.hours}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={business.images[1]} 
                  alt={`${business.name} Interior`} 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
                <img 
                  src={business.images[2]} 
                  alt={`${business.name} Products`} 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu/Services/Products Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* For restaurant or cafe */}
            {(businessType === 'restaurant' || businessType === 'cafe') && business.menu && (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Menu</h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Explore our delicious offerings, prepared with the finest ingredients.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {business.menu.map((category, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                      <h3 className="text-2xl font-semibold text-blue-900 mb-6">{category.category}</h3>
                      <div className="space-y-6">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                              <span className="text-orange-500 font-medium">{item.price}</span>
                            </div>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* For salon */}
            {businessType === 'salon' && business.services && (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Professional beauty and wellness services for a refreshing experience.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {business.services.map((category, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                      <h3 className="text-2xl font-semibold text-blue-900 mb-6">{category.category}</h3>
                      <div className="space-y-6">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                              <span className="text-orange-500 font-medium">{item.price}</span>
                            </div>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* For retail */}
            {businessType === 'retail' && business.collections && (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Collections</h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Browse our latest collections and find your perfect style.
                  </p>
                </div>
                {business.collections.map((collection, index) => (
                  <div key={index} className="mb-16 last:mb-0">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-3">{collection.name}</h3>
                    <p className="text-gray-700 mb-8">{collection.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {collection.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                              <span className="text-orange-500 font-medium">{item.price}</span>
                            </div>
                            <button className="mt-4 w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Want a Website Like This for Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              BizLaunch Sites can create a professional website for your business, just like this example.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {business.integrations.length > 0 && (
                <div className="bg-white/10 p-6 rounded-lg max-w-md mx-auto sm:mx-0">
                  <Share2 className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Third-Party Integration</h3>
                  <p className="text-white/80 mb-4">
                    This example showcases integration with:
                  </p>
                  <ul className="space-y-2">
                    {business.integrations.map((integration, index) => (
                      <li key={index} className="flex items-center">
                        <ExternalLink size={16} className="text-orange-500 mr-2" />
                        {integration.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="bg-white/10 p-6 rounded-lg max-w-md mx-auto sm:mx-0">
                <h3 className="text-xl font-semibold mb-3">Get Started Today</h3>
                <p className="text-white/80 mb-4">
                  Contact BizLaunch Sites to create your custom business website with:
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 text-xs">✓</div>
                    <span>Professional design tailored to your business</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 text-xs">✓</div>
                    <span>Mobile-responsive layout</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 text-xs">✓</div>
                    <span>Integration with third-party services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 text-xs">✓</div>
                    <span>SEO optimization to attract customers</span>
                  </li>
                </ul>
                <Link
                  to="/#contact"
                  className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {business.name} - Example website created by 
            <Link to="/" className="text-orange-500 hover:text-orange-400 ml-1">
              BizLaunch Sites
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ExamplePage;