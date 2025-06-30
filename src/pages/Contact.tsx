import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-solar-800 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Get in touch with our team for inquiries, quotes, or support.
              We're here to help with all your solar energy needs.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Reach Out to Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Have questions about solar solutions or need assistance with
                  your existing system? Our dedicated team is ready to help you
                  navigate your solar journey.
                </p>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-solar-100 dark:bg-solar-900 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-solar-600 dark:text-solar-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Call us directly
                      </p>
                      <a
                        href="tel:+911234567890"
                        className="text-solar-600 dark:text-solar-400 font-medium mt-1 block hover:underline"
                      >
                        +91 90257 56066
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-solar-100 dark:bg-solar-900 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-solar-600 dark:text-solar-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Send us an email
                      </p>
                      <a
                        href="mailto:info@suntimesolar.com"
                        className="text-solar-600 dark:text-solar-400 font-medium mt-1 block hover:underline"
                      >
                        info@suntimesolar.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-solar-100 dark:bg-solar-900 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-solar-600 dark:text-solar-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Chat with us instantly
                      </p>
                      <a
                        href="#"
                        className="text-solar-600 dark:text-solar-400 font-medium mt-1 block hover:underline"
                      >
                        +91 90257 56066
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-solar-100 dark:bg-solar-900 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-solar-600 dark:text-solar-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Our office location
                      </p>
                      <address className="not-italic text-gray-700 dark:text-gray-300 mt-1">
                        115, I Street, Peelamedu, PKD Nagar, Coimbatore,
                        <br />
                        Tamil Nadu, 641004
                        <br />
                        India
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.429835608602!2d77.0141157!3d11.0279215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8578891223b59%3A0x607db76701b01d6!2s115%2C%20I%20Street%2C%20Peelamedu%2C%20PKD%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1715332040799!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">
                  What areas do you service?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We currently provide solar installation and services across
                  major cities in India, including Delhi, Mumbai, Bangalore,
                  Chennai, Hyderabad, and their surrounding areas.
                </p>
              </div>
              {/* FAQ Item 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">
                  How long does a typical installation take?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Residential installations typically take 1-3 days, depending
                  on system size and complexity. Commercial installations may
                  take longer, usually 1-2 weeks.
                </p>
              </div>
              {/* FAQ Item 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">
                  What maintenance do solar panels require?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Solar panels require minimal maintenance. We recommend
                  cleaning them 2-4 times per year and having a professional
                  inspection annually to ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
