import { motion } from 'framer-motion';
import { Shield, Users, Star, Award, Clock, Sparkles, Car, CircleDollarSign, ShoppingBag, Briefcase } from 'lucide-react';

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
        title="About BIG TRADING "
        subtitle="Home/About"
        backgroundImage="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
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
              <h2 className="text-3xl font-display font-bold mb-4 uppercase">About BIG TRADING </h2>
              <p className="text-secondary-700 mb-4">
                Big Trading Company Ltd. began its journey in 2015, rooted in the vibrant industrial region of Kuwana, Mie Ken, Japan. Strategically located in Kisosaki-cho, Karoto 553, the company has grown steadily over the past decade, establishing a solid presence in Trucking & Equipment, Exports, Retailing, and Consultancy.
              </p>
              <p className="text-secondary-700 mb-4">
                With 10 years of experience in both local and international trading, Big Trading has built a reputation for reliability, industry expertise, and a forward-thinking approach. Operating under the Big Trading banner, the company is committed to delivering excellence and forging lasting relationships with clients across the globe.
              </p>
              <p className="text-secondary-700 mb-4">
                Driven by a vision to transcend borders, Big Trading leverages its deep industry knowledge to serve a diverse and ever-growing clientele. The company remains focused on sustainable growth, innovation, and customer satisfaction, positioning itself as a leader in the world of global trade.
              </p>
              <p className="text-secondary-700 mb-4">
                For inquiries or collaborations, please reach out at <a href="mailto:bigtradingjp@gmail.com" className="text-primary-700 hover:text-primary-900 transition-colors">bigtradingjp@gmail.com</a> or <a href="tel:+81804213-9008" className="text-primary-700 hover:text-primary-900 transition-colors">call us</a>.
              </p>
              <div className="mt-4 text-center">
                <a href="/company-info" className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-md hover:bg-primary-200 transition-colors text-sm">
                  View Bilingual Company Information (日本語版はこちら)
                </a>
              </div>
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
                src="/images/logo.png"
                alt="Big Trading Company Logo"
                className="w-full h-auto rounded-lg shadow-xl relative z-10 bg-white p-4"
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
            <h2 className="text-3xl font-display font-bold mb-4 uppercase">Our Core Values</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              At Big Trading Company, we're guided by our commitment to excellence, integrity, and customer satisfaction in everything we do.
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
              <h3 className="text-xl font-display font-semibold mb-3 text-center">Global Expertise</h3>
              <p className="text-secondary-700 text-center">
                With deep knowledge of international markets and trade regulations, we facilitate seamless transactions across borders and cultures.
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
              <h3 className="text-xl font-display font-semibold mb-3 text-center">Quality Assurance</h3>
              <p className="text-secondary-700 text-center">
                We maintain rigorous quality control standards for all vehicles and equipment, ensuring our clients receive only the best products that meet their specific needs.
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
              <h3 className="text-xl font-display font-semibold mb-3 text-center">Customer Partnership</h3>
              <p className="text-secondary-700 text-center">
                We view our clients as partners, building lasting relationships based on trust, reliability, and a deep understanding of their business needs and goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 uppercase">Our Business Areas</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Big Trading Company specializes in four key business areas, delivering expertise and excellence across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Area 1 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <Car className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Trucking & Equipment</h3>
              <p className="text-secondary-600">
                Specializing in high-quality trucks, construction equipment, and heavy machinery for various industrial applications.
              </p>
            </motion.div>

            {/* Business Area 2 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <CircleDollarSign className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Exports</h3>
              <p className="text-secondary-600">
                Facilitating international trade with expertise in export regulations, logistics, and cross-border transactions.
              </p>
            </motion.div>

            {/* Business Area 3 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Retailing</h3>
              <p className="text-secondary-600">
                Providing premium vehicles and equipment to local markets with personalized service and competitive pricing.
              </p>
            </motion.div>

            {/* Business Area 4 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Consultancy</h3>
              <p className="text-secondary-600">
                Offering expert advice on market trends, investment opportunities, and strategic business development in the automotive and equipment sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-white uppercase">Why Clients Choose Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Since 2015, clients across the globe have trusted Big Trading Company for their vehicle and equipment needs. Here's why.
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
                <h3 className="text-xl font-display font-semibold mb-2 text-white">Global Network</h3>
                <p className="text-gray-300">
                  Our extensive international network allows us to source and deliver equipment and vehicles worldwide with efficiency and reliability.
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
                <h3 className="text-xl font-display font-semibold mb-2 text-white">Industry Expertise</h3>
                <p className="text-gray-300">
                  Our team brings deep knowledge of both local and international markets, regulations, and industry best practices to every transaction.
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
                <h3 className="text-xl font-display font-semibold mb-2 text-white">Customized Solutions</h3>
                <p className="text-gray-300">
                  We tailor our services to meet the specific needs of each client, providing personalized solutions rather than one-size-fits-all approaches.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4 uppercase">Ready to Partner with BIG TRADING?</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
            Join our global network of satisfied clients and discover how Big Trading Company can meet your vehicle and equipment needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+81804213-9008" className="btn btn-primary px-6 py-3 text-base">
              Call Us
            </a>
            <a href="/contact" className="btn btn-accent px-6 py-3 text-base">
              Contact Us
            </a>
            <a href="/company-info" className="btn bg-primary-100 text-primary-800 px-6 py-3 text-base hover:bg-primary-200 transition-colors">
              View Bilingual Company Info
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;