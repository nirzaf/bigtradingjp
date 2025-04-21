import { motion } from 'framer-motion';
import { Shield, Users, Star, Award, Clock, Sparkles } from 'lucide-react';

import PageHeader from '../components/ui/PageHeader';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader 
        title="About AutoElite" 
        subtitle="Redefining luxury vehicle ownership since 2008"
        backgroundImage="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
      />
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-4">Our Story</h2>
              <p className="text-secondary-700 mb-4">
                Founded in 2008 by automotive enthusiasts Michael Harrington and Sophia Chen, AutoElite began with a simple mission: to provide discerning clients with exceptional vehicles and an unparalleled ownership experience.
              </p>
              <p className="text-secondary-700 mb-4">
                What started as a boutique dealership with just five handpicked vehicles has grown into one of the most respected names in luxury automobile sales and services. Our founders' passion for automotive excellence and customer satisfaction remains at the heart of everything we do.
              </p>
              <p className="text-secondary-700">
                Today, AutoElite continues to set the standard for luxury vehicle retailers, combining industry expertise with personalized service that treats each client as part of our extended family.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary-900 absolute top-6 -left-6 w-72 h-72 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg" 
                alt="Luxury car showroom" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="bg-accent-400 absolute -bottom-6 -right-6 w-72 h-72 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We're guided by our commitment to excellence, integrity, and customer satisfaction in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                <Shield className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-center">Integrity</h3>
              <p className="text-secondary-700 text-center">
                We believe in complete transparency and honesty in every interaction, providing accurate information and fair pricing without hidden surprises.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                <Star className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-center">Excellence</h3>
              <p className="text-secondary-700 text-center">
                We maintain the highest standards in vehicle selection, preparation, and customer service, constantly striving to exceed expectations.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-center">Relationships</h3>
              <p className="text-secondary-700 text-center">
                We focus on building long-term relationships with our clients, understanding their needs and preferences to provide personalized experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our team of automotive experts brings decades of industry experience and a passion for exceptional client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Michael Harrington" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-1">Michael Harrington</h3>
              <p className="text-accent-500 font-medium mb-2">Founder & CEO</p>
              <p className="text-secondary-600 text-sm">
                With 25+ years in the luxury automotive industry, Michael leads our company vision and growth strategy.
              </p>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Sophia Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-1">Sophia Chen</h3>
              <p className="text-accent-500 font-medium mb-2">Co-Founder & COO</p>
              <p className="text-secondary-600 text-sm">
                Sophia oversees our day-to-day operations and ensures every client receives exceptional service.
              </p>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="James Wilson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-1">James Wilson</h3>
              <p className="text-accent-500 font-medium mb-2">Head of Acquisitions</p>
              <p className="text-secondary-600 text-sm">
                James leads our vehicle sourcing team, finding the finest automobiles from around the world.
              </p>
            </motion.div>
            
            {/* Team Member 4 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg" 
                  alt="Olivia Martinez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-1">Olivia Martinez</h3>
              <p className="text-accent-500 font-medium mb-2">Client Relations Director</p>
              <p className="text-secondary-600 text-sm">
                Olivia ensures our clients receive personalized attention throughout their entire journey with us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-white">Why Clients Choose Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              For over 15 years, discerning clients have trusted AutoElite for their luxury vehicle needs. Here's why.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start p-6 bg-primary-800/50 rounded-lg"
            >
              <Award className="w-10 h-10 text-accent-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">Award-Winning Selection</h3>
                <p className="text-gray-300">
                  Our inventory includes only the finest vehicles that meet our strict quality standards.
                </p>
              </div>
            </motion.div>
            
            {/* Reason 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start p-6 bg-primary-800/50 rounded-lg"
            >
              <Sparkles className="w-10 h-10 text-accent-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">White Glove Experience</h3>
                <p className="text-gray-300">
                  From first contact to delivery and beyond, we provide exceptional concierge-level service.
                </p>
              </div>
            </motion.div>
            
            {/* Reason 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start p-6 bg-primary-800/50 rounded-lg"
            >
              <Clock className="w-10 h-10 text-accent-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">Lifetime Support</h3>
                <p className="text-gray-300">
                  Our relationship doesn't end with purchase - we provide ongoing support for the life of your vehicle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
            Join our family of satisfied clients and discover why AutoElite is the premier destination for luxury vehicles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/" className="btn btn-primary px-6 py-3 text-base">
              Browse Our Inventory
            </a>
            <a href="/contact" className="btn btn-accent px-6 py-3 text-base">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;