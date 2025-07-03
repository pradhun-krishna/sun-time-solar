import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Lightbulb, Sun, Zap, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-solar-800 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About SunTime Solar Enterprises
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Learn about our journey, mission, and commitment to sustainable
              energy solutions.
            </p>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img
                  src={
                    import.meta.env.PROD
                      ? "/Sun-time-Solar-/images/our story.jpg"
                      : "/images/our story.jpg"
                  }
                  alt="SunTime Solar Team"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-4">
                  SunTime Solar Enterprises is a leading provider of solar
                  energy solutions with over 15 years of experience in service
                  and installation across Coimbatore.
                </p>
                <p className="text-lg mb-4">
                  Started in 2008 with a vision to make clean energy accessible
                  to everyone, we've grown from a small team of passionate
                  engineers to a full-service solar company with nationwide
                  operations.
                </p>
                <p className="text-lg">
                  Our commitment to quality, innovation, and customer
                  satisfaction has made us one of the most trusted names in the
                  solar industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We're driven by a simple but powerful mission: to accelerate the
                transition to sustainable energy through innovative solar
                solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-solar-100 dark:bg-solar-900 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-solar-600 dark:text-solar-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our products and services aim to reduce carbon footprints and
                  promote environmental responsibility.
                </p>
              </div>
              {/* Value 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-solar-100 dark:bg-solar-900 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-solar-600 dark:text-solar-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We continuously evolve our technologies and approaches to
                  deliver the most effective solar solutions.
                </p>
              </div>
              {/* Value 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-solar-100 dark:bg-solar-900 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-solar-600 dark:text-solar-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We prioritize understanding and meeting our customers' unique
                  energy needs with tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Registration Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold rounded-full px-4 py-1 text-sm mb-4">
                  Official Partnership
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Government Registered Solar Provider
                </h2>
                <div className="bg-solar-50 dark:bg-gray-700 border-l-4 border-solar-500 p-4 mb-6">
                  <p className="text-lg font-medium">
                    Registered under the Indian Government's Suryaghar Subsidy
                    Scheme
                  </p>
                </div>
                <p className="text-lg mb-6">
                  As an officially registered solar provider, we help customers
                  navigate government subsidies and incentives. Eligible
                  customers can receive up to ₹72,000 in subsidy for rooftop
                  solar installations.
                </p>
                <a
                  href="https://www.india.gov.in/spotlight/pm-surya-ghar-muft-bijli-yojana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-solar-600 hover:bg-solar-700 text-white py-2 px-6 rounded-md font-medium flex items-center space-x-2">
                    <span>Learn About Subsidies</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </a>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <img
                  src={
                    import.meta.env.PROD
                      ? "/Sun-time-Solar-/images/gov-subsidy.jpg"
                      : "/images/gov-subsidy.jpg"
                  }
                  alt="Government Subsidy"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Want to learn more about our company or have questions? Reach
                out to our team.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
