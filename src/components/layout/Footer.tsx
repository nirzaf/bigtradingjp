import { Link } from 'react-router-dom';
import { Car, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6"> {/* Violet Blue */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/images/logo.png" alt="Bigtrading Logo" className="h-8 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white uppercase tracking-wider">
                  BIG TRADING
                </span>
                <span className="text-xs text-gray-300 uppercase tracking-tight">
                  EXPORTER OF MOTOR VEHICLES, SPARE PARTS AND MACHINERIES
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Established in 2015, BIG TRADING  specializes in exporting high-quality motor vehicles, spare parts, and construction machinery worldwide. Based in Kuwana, Mie Ken, Japan, we deliver excellence and reliability to our global clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors"> {/* Pumpkin */}
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/bigjapan_jdm/?igsh=MXJqa2x1N3c1MTV0bw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent-500 transition-colors"> {/* Pumpkin */}
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors"> {/* Pumpkin */}
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
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicles */}
          <div className="md:col-span-3">
            <h3 className="text-white font-display text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Motor Vehicles
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Spare Parts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Construction Machinery
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Heavy Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <h3 className="text-white font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-500 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Kisosaki-cho, Karoto 553, Kuwana, Mie Ken, Japan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent-500 mr-2" />
                <a href="tel:+81804213-9008" className="text-gray-300 hover:text-accent-500 transition-colors">
                  +81 80-4213-9008
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent-500 mr-2" />
                <a href="mailto:bigtradingjp@gmail.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                  bigtradingjp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BIG TRADING . All rights reserved.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-sm flex items-center group transition-colors duration-300"
            >
              <Code className="w-4 h-4 text-accent-500 group-hover:text-accent-400 mr-1 transition-colors duration-300" />
              Powered by <span className="text-accent-400 group-hover:text-accent-300 transition-colors ml-1 font-medium">Quadrate Tech Solutions</span>
            </a>
          </div>

          <div className="flex space-x-4 justify-center md:justify-end">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-accent-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-accent-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;