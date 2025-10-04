import { Link } from "react-router-dom";
import {
  MessageCircle,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="bg-solar-900 text-white pt-12 pb-6 border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SunTime Solar</h3>
            <p className="text-gray-300/90 mb-4">
              Leading provider of solar energy solutions with over 15 years of
              experience in service and installation across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sun-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-sun-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-sun-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-sun-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-sun-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-sun-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-sun-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-sun-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 mt-0.5 text-sun-400" />
                <span>
                  115, I Street, Peelamedu, PKD Nagar, Coimbatore, Tamil Nadu,
                  641004 India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sun-400" />
                <a
                  href="mailto:suntimerg@gmail.com"
                  className="hover:text-sun-400 transition-colors"
                >
                  suntimerg@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sun-400" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-sun-400 transition-colors"
                >
                  +91 90257 56066
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <ContactForm isFooterForm={true} />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SunTime Solar Enterprises. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-sun-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-sun-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
