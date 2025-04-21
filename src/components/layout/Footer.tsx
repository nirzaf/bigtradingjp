import { Link } from 'react-router-dom';
import { Car, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Car className="w-6 h-6 text-accent-400" />
              <span className="text-xl font-display font-bold text-white">
                Bigtrading
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Providing exceptional luxury vehicles and personalized service since 2008. We specialize in premium automobiles for the discerning driver.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicles */}
          <div className="md:col-span-3">
            <h3 className="text-white font-display text-lg font-semibold mb-4">Vehicles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Luxury Sedans
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Performance Cars
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  SUVs & Crossovers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Electric Vehicles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <h3 className="text-white font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-400 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  123 Luxury Lane, Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent-400 mr-2" />
                <a href="tel:+1-800-555-0123" className="text-gray-300 hover:text-accent-400 transition-colors">
                  (800) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent-400 mr-2" />
                <a href="mailto:info@bigtrading.com" className="text-gray-300 hover:text-accent-400 transition-colors">
                  info@bigtrading.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bigtrading. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-accent-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;