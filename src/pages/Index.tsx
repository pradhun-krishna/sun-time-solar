import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Sun, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Homeowner",
      quote:
        "SunTime Solar's installation team was efficient and professional. My electricity bills have reduced by 70% since installing their panels.",
      image: "/images/solar-panel.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Business Owner",
      quote:
        "The government subsidy process was seamless with SunTime's guidance. Excellent service and high-quality products.",
      image: "/images/battery-unit.jpg",
    },
    {
      name: "Amit Patel",
      position: "Apartment Complex Manager",
      quote:
        "We've installed solar panels across our entire apartment complex. The ROI has been impressive and the maintenance support is excellent.",
      image: "/images/team-installing.jpg",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5,000+", label: "Installations" },
    { value: "₹72,000", label: "Max Subsidy" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-solar-900/90 to-solar-800/80 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="inline-block bg-sun-500/20 text-sun-300 font-medium rounded-full px-4 py-1 text-sm mb-6 backdrop-blur-sm border border-sun-400/30">
                  Government Registered Solar Provider
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Empower Your Future with{" "}
                  <span className="text-sun-400">Solar Energy</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
                  Harness clean energy, slash electricity bills, and embrace a
                  sustainable lifestyle today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-sun-500 hover:bg-sun-600 text-white text-lg group"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Link to="/products">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-black text-black hover:bg-black/10 dark:border-white dark:text-white dark:hover:bg-white/10 text-lg"
                    >
                      Explore Products
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <div className="bg-white p-1 md:p-2 rounded-lg shadow-xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/images/solar-panel.jpg"
                    alt="Solar Panel Installation"
                    className="rounded w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-sun-500 text-solar-900 font-bold py-1 px-3 rounded-md transform rotate-3 text-sm">
                    Eco-Friendly
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="text-sun-400 font-bold text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-white text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-solar-100 dark:bg-solar-900 text-solar-600 dark:text-solar-400 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Our Solar Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Solar Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                From initial consultation to installation and maintenance, we
                provide end-to-end solar solutions for residential and
                commercial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-5px] group">
                <div className="h-3 bg-gradient-to-r from-sun-400 to-sun-500"></div>
                <div className="p-6">
                  <div className="h-14 w-14 bg-solar-100 dark:bg-solar-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <Sun className="h-8 w-8 text-solar-600 dark:text-solar-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">
                    Solar Panel Installation
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                    Expert installation for maximum efficiency. We ensure
                    optimal positioning and configuration for your solar panels.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-solar-500 text-solar-600 hover:bg-solar-50 dark:border-solar-400 dark:text-solar-400 dark:hover:bg-solar-900/50"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-5px] group">
                <div className="h-3 bg-gradient-to-r from-solar-500 to-sun-400"></div>
                <div className="p-6">
                  <div className="h-14 w-14 bg-solar-100 dark:bg-solar-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <Zap className="h-8 w-8 text-solar-600 dark:text-solar-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">
                    Energy Optimization
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                    Boost your energy savings with smart solutions. Our experts
                    help you maximize efficiency and reduce costs.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-solar-500 text-solar-600 hover:bg-solar-50 dark:border-solar-400 dark:text-solar-400 dark:hover:bg-solar-900/50"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-5px] group">
                <div className="h-3 bg-gradient-to-r from-sun-400 to-solar-500"></div>
                <div className="p-6">
                  <div className="h-14 w-14 bg-solar-100 dark:bg-solar-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <Lightbulb className="h-8 w-8 text-solar-600 dark:text-solar-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">
                    Maintenance & Repairs
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                    Keep your panels performing at their best with our
                    professional maintenance services.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-solar-500 text-solar-600 hover:bg-solar-50 dark:border-solar-400 dark:text-solar-400 dark:hover:bg-solar-900/50"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Government Scheme Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img
                  src="/images/gov-subsidy.jpg"
                  alt="Government Subsidy"
                  className="rounded-xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <div className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold rounded-full px-4 py-1 text-sm mb-4">
                  Government Registered
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Save with Government Subsidies
                </h2>
                <div className="bg-solar-50 dark:bg-gray-700 border-l-4 border-solar-500 p-4 mb-6 rounded-r">
                  <p className="text-lg font-medium">
                    Registered under the Indian Government's Suryaghar Subsidy
                    Scheme
                  </p>
                </div>
                <p className="text-lg mb-6">
                  Eligible customers can receive up to ₹72,000 in subsidy for
                  rooftop solar installations. Let our experts help you apply
                  and maximize your benefits.
                </p>
                <Button className="bg-solar-600 hover:bg-solar-700 text-white group">
                  Check Eligibility{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-sun-100 dark:bg-sun-900 text-sun-600 dark:text-sun-400 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Customer Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Don't just take our word for it. Hear from our satisfied
                customers who have made the switch to solar energy.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-0 shadow-lg overflow-hidden">
                        <CardContent className="p-0 flex flex-col md:flex-row">
                          <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                            <div className="mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Sun
                                  key={i}
                                  className="inline-block h-5 w-5 text-sun-400 fill-current"
                                />
                              ))}
                            </div>
                            <p className="text-lg mb-6 italic">
                              "{testimonial.quote}"
                            </p>
                            <div>
                              <h4 className="font-semibold">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="absolute left-0" />
                  <CarouselNext className="absolute right-0" />
                </div>
              </Carousel>
              <div className="flex justify-center gap-1 mt-4 md:hidden">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-solar-100 dark:bg-solar-900 text-solar-600 dark:text-solar-400 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Us Today
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Have questions or ready to start your solar journey? Reach out
                to our friendly team.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Partner Brands */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block bg-solar-100 dark:bg-solar-900 text-solar-600 dark:text-solar-400 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Trusted Partners
              </div>
              <h2 className="text-3xl font-bold">
                Brands Powering Our Solar Solutions
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* These would be replaced with actual brand logos */}
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 h-16 w-32 rounded-lg shadow flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Partner {index}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
