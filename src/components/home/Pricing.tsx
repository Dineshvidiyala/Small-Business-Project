import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "₹4,999",
      description: "Perfect for new small businesses looking to establish an online presence.",
      features: [
        "Single page website",
        "Mobile responsive design",
        "Business information section",
        "Contact form",
        "Social media links",
        "Google Maps integration",
        "3 months support",
        "Basic SEO setup",
      ],
      notIncluded: [
        "Multiple pages",
        "Custom domain name",
        "E-commerce features",
        "Third-party integration"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Standard",
      price: "₹9,999",
      description: "Ideal for established businesses wanting a comprehensive website.",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Business information section",
        "Contact form",
        "Social media links",
        "Google Maps integration",
        "Basic SEO setup",
        "Image gallery",
        "Blog section",
        "Custom domain name (1 year)",
        "One third-party integration",
        "6 months support"
      ],
      notIncluded: [
        "E-commerce features",
        "Multiple third-party integrations"
      ],
      cta: "Choose Standard",
      popular: true
    },
    {
      name: "Premium",
      price: "₹19,999",
      description: "Complete solution for businesses requiring advanced features.",
      features: [
        "Up to 10 pages",
        "Mobile responsive design",
        "Business information section",
        "Contact form",
        "Social media links",
        "Google Maps integration",
        "Advanced SEO setup",
        "Image gallery",
        "Blog section",
        "Custom domain name (1 year)",
        "Multiple third-party integrations",
        "Basic e-commerce features",
        "Content updates (3 per month)",
        "12 months support",
        "Analytics dashboard"
      ],
      notIncluded: [],
      cta: "Choose Premium",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Affordable Pricing Plans</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include responsive design and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden border ${
                plan.popular 
                  ? 'border-orange-500 shadow-lg relative' 
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="bg-orange-500 text-white text-center py-1 px-4 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-800">{plan.price}</span>
                  <span className="text-gray-500"> / one-time</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-medium text-gray-900 mt-5 mb-3">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <X size={18} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <a 
                  href="#contact" 
                  className={`w-full block text-center py-3 px-6 rounded-md font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-blue-800 hover:bg-blue-900 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-800 font-medium hover:text-orange-500 transition-colors"
          >
            Contact us for a custom quote <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;