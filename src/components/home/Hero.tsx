import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-4 md:mb-6">
              Launch Your Business Online In <span className="text-orange-500">Minutes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              BizLaunchSites helps small businesses create professional websites quickly. Connect with third-party services like Swiggy and Zomato, showcase your products, and grow your customer base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium text-center transition-colors flex items-center justify-center"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#examples" 
                className="border border-gray-300 hover:border-blue-800 text-gray-800 hover:text-blue-800 px-6 py-3 rounded-md font-medium text-center transition-colors"
              >
                View Examples
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/5650043/pexels-photo-5650043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Small business owner at computer" 
                className="rounded-lg shadow-xl relative z-10 max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;