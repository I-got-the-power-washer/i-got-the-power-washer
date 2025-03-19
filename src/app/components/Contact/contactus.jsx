import { useState } from 'react';
import { FiHome, FiBriefcase, FiClock, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    customerType: 'residential',
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us Today</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Customer Type *</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="customerType"
                      value="residential"
                      checked={formData.customerType === 'residential'}
                      onChange={(e) => setFormData({...formData, customerType: e.target.value})}
                      className="h-4 w-4 text-[#00C6F9] border-gray-300 focus:ring-[#00C6F9]"
                    />
                    <span className="ml-2 flex items-center">
                      <FiHome className="mr-1" /> Residential
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="customerType"
                      value="commercial"
                      checked={formData.customerType === 'commercial'}
                      onChange={(e) => setFormData({...formData, customerType: e.target.value})}
                      className="h-4 w-4 text-[#00C6F9] border-gray-300 focus:ring-[#00C6F9]"
                    />
                    <span className="ml-2 flex items-center">
                      <FiBriefcase className="mr-1" /> Commercial
                    </span>
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C6F9] focus:ring-[#00C6F9]"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C6F9] focus:ring-[#00C6F9]"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C6F9] focus:ring-[#00C6F9]"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Address *</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C6F9] focus:ring-[#00C6F9]"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C6F9] focus:ring-[#00C6F9]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiPhone className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">513-570-0355</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMail className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@igotthepowerwasher.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Cincinnati, OH and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Store Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:30 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-medium">8:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FiLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;