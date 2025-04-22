import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

import PageHeader from '../components/ui/PageHeader';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{ success?: string; error?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ success: "Thank you for your message. We'll be in touch shortly!" });
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        title="CONTACT BIG TRADING CO., LTD"
        subtitle="Our team is ready to assist you with any questions or inquiries"
        backgroundImage="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
      />

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-display font-bold mb-6 uppercase">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <MapPin className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">Our Location</h3>
                    <p className="text-secondary-700">
                      Kisosaki-cho, Karoto 553<br />
                      Kuwana, Mie Ken<br />
                      Japan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <Phone className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">Phone</h3>
                    <p className="text-secondary-700">
                      <a href="tel:+81804213-9008" className="hover:text-primary-800 transition-colors">
                        +81 80-4213-9008
                      </a>
                    </p>
                    <p className="text-secondary-700">
                      <a href="tel:+81804213-9008" className="hover:text-primary-800 transition-colors">
                        +81 80-4213-9008 (Sales)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <Mail className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">Email</h3>
                    <p className="text-secondary-700">
                      <a href="mailto:bigtradingjp@gmail.com" className="hover:text-primary-800 transition-colors">
                        bigtradingjp@gmail.com
                      </a>
                    </p>
                    <p className="text-secondary-700">
                      <a href="mailto:bigtradingjp@gmail.com" className="hover:text-primary-800 transition-colors">
                        bigtradingjp@gmail.com (Sales)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <Clock className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">Business Hours</h3>
                    <p className="text-secondary-700">
                      Monday - Friday: 9:00 AM - 6:00 PM (JST)<br />
                      Saturday: 10:00 AM - 4:00 PM (JST)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-display font-bold mb-6 uppercase">Send Us a Message</h2>

                {formStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-success-100 border border-success-300 text-success-700 px-4 py-3 rounded mb-6"
                  >
                    <p>{formStatus.success}</p>
                  </motion.div>
                )}

                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-error-100 border border-error-300 text-error-700 px-4 py-3 rounded mb-6"
                  >
                    <p>{formStatus.error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Vehicle Information">Vehicle Information</option>
                        <option value="Construction Equipment">Construction Equipment</option>
                        <option value="Schedule Test Drive">Schedule Test Drive</option>
                        <option value="Financing Options">Financing Options</option>
                        <option value="Service Request">Service Request</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center justify-center w-full md:w-auto px-6 py-3 bg-primary-800 text-white rounded-md font-medium transition-colors ${
                        isSubmitting ? 'bg-primary-600 cursor-not-allowed' : 'hover:bg-primary-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-bold mb-4 uppercase">Visit Our Office</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Visit our office in Kuwana, Mie Ken to discuss your vehicle and equipment needs with our expert team.
            </p>
          </div>

          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Map would go here. For now, displaying a placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-800 mx-auto mb-2" />
                <p className="text-xl font-medium">Kisosaki-cho, Karoto 553, Kuwana, Mie Ken, Japan</p>
                <p className="text-secondary-600">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;