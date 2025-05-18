import React from 'react';
import { Globe, Share2, Zap, Award, ShoppingBag, PenTool as Tool } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-800" />,
      title: "Professional Website",
      description: "Get a custom-designed website that matches your brand and business needs with mobile-optimized layouts."
    },
    {
      icon: <Share2 className="h-8 w-8 text-blue-800" />,
      title: "Third-party Integration",
      description: "Easily connect your website with food delivery platforms like Swiggy and Zomato or other relevant services."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-800" />,
      title: "Quick Launch",
      description: "Get your business online in days, not weeks. Our streamlined process means you'll be up and running in no time."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-800" />,
      title: "SEO Optimized",
      description: "Built-in search engine optimization helps customers find your business when searching online."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-blue-800" />,
      title: "Product Showcase",
      description: "Display your products or services with beautiful galleries and detailed descriptions to attract customers."
    },
    {
      icon: <Tool className="h-8 w-8 text-blue-800" />,
      title: "Easy Management",
      description: "Simple tools to update your website content, hours, menu items, or product listings without technical knowledge."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Why Choose BizLaunchSites?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide everything small businesses need to establish a powerful online presence quickly and affordably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;