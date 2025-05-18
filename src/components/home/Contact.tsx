import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log(formData);
    // Show success message
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessType: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to launch your business online? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Mail className="text-orange-500 h-5 w-5 mt-1 mr-3" />
                  <div>
                    <p className="text-gray-800 font-medium">Email Us</p>
                    <a href="mailto:info@bizlaunchsites.com" className="text-gray-600 hover:text-blue-800 transition-colors">
                      info@bizlaunchsites.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="text-orange-500 h-5 w-5 mt-1 mr-3" />
                  <div>
                    <p className="text-gray-800 font-medium">Call Us</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-800 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-orange-500 h-5 w-5 mt-1 mr-3" />
                  <div>
                    <p className="text-gray-800 font-medium">Office Address</p>
                    <p className="text-gray-600">
                      123 Business Avenue, <br />
                      Tech Park, Bangalore - 560001
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Business Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-800 font-medium">9:30 AM - 6:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-800 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>
            
            {formSubmitted && (
              <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="businessType" className="block text-gray-700 font-medium mb-2">
                    Business Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your business type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Café</option>
                    <option value="salon">Salon/Spa</option>
                    <option value="retail">Retail Store</option>
                    <option value="service">Service Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your business and website needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;