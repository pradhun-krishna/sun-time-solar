
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Solar Panel",
    description: "High-efficiency monocrystalline solar panels for maximum power generation",
    price: 15000,
    image: "/images/solar-panel.jpg",
    features: [
      "Efficiency rating: 21%",
      "25-year performance warranty",
      "Anti-reflective coating",
      "Weather-resistant frame"
    ]
  },
  {
    id: 2,
    name: "Solar Battery Storage",
    description: "Store excess energy for use during nighttime or power outages",
    price: 45000,
    image: "/images/battery-unit.jpg",
    features: [
      "10 kWh capacity",
      "10-year warranty",
      "Smart monitoring system",
      "Compact design"
    ]
  },
  {
    id: 3,
    name: "Solar Inverter",
    description: "Convert DC electricity from solar panels to AC for home use",
    price: 18000,
    image: "/images/inverter.jpg",
    features: [
      "5 kW capacity",
      "97% efficiency rating",
      "WiFi monitoring",
      "MPPT technology"
    ]
  },
  {
    id: 4,
    name: "Complete Home Solar Kit",
    description: "Everything you need to power an average home with solar energy",
    price: 125000,
    image: "/images/solar-panel.jpg",
    features: [
      "10 premium solar panels",
      "7 kW inverter",
      "Battery storage",
      "Professional installation included"
    ]
  },
  {
    id: 5,
    name: "Commercial Solar System",
    description: "Scalable solar solutions for businesses and commercial properties",
    price: null, // Custom pricing
    image: "/images/team-installing.jpg",
    features: [
      "Custom system design",
      "High-efficiency panels",
      "Commercial-grade inverters",
      "Monitoring system"
    ]
  },
  {
    id: 6,
    name: "Solar Water Heater",
    description: "Utilize solar energy to heat water for domestic use",
    price: 28000,
    image: "/images/solar-panel.jpg",
    features: [
      "200L capacity",
      "Evacuated tube technology",
      "Stainless steel tank",
      "Low maintenance design"
    ]
  }
];

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-solar-800 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Products
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our range of high-quality solar products designed for efficiency,
              durability, and performance. Find the perfect solar solution for your needs.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  features={product.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our experts can help you customize a solar solution that perfectly fits your needs.
              Contact us today for personalized advice and quotes.
            </p>
            <div className="inline-block">
              <a href="/contact">
                <button className="bg-solar-600 hover:bg-solar-700 text-white py-3 px-8 rounded-md font-medium">
                  Contact Our Team
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
