import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BizLaunchSites created a beautiful website for my restaurant. The integration with Swiggy and Zomato increased my online orders by 40%.",
      author: "Rajesh Kumar",
      business: "Spice Garden Restaurant",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The website they built for my salon looks so professional. My customers can now book appointments online, which has reduced no-shows significantly.",
      author: "Priya Sharma",
      business: "Style Studio Salon",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "For years I thought having a website was too complicated and expensive. BizLaunchSites made it simple and affordable for my small bakery.",
      author: "Anita Desai",
      business: "Sweet Treats Bakery",
      rating: 4,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners have to say about their BizLaunchSites experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute -top-5 left-8 h-10 w-10 bg-blue-800 transform rotate-45 z-0"></div>
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;