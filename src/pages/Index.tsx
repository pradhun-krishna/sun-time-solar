import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Sun,
  Lightbulb,
  Shield,
  Landmark,
  LifeBuoy,
} from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Homeowner",
      quote:
        "SunTime Solar's installation team was efficient and professional. My electricity bills have reduced by 70% since installing their panels.",
      image: `${import.meta.env.BASE_URL}images/rajesh kumar.png`,
    },
    {
      name: "Prasanna",
      position: "Business Owner",
      quote:
        "The government subsidy process was seamless with SunTime's guidance. Excellent service and high-quality products.",
      image: `${import.meta.env.BASE_URL}images/prasanna.png`,
    },
    {
      name: "Arun kumar",
      position: "Apartment Complex Manager",
      quote:
        "We've installed solar panels across our entire apartment complex. The ROI has been impressive and the maintenance support is excellent.",
      image: `${import.meta.env.BASE_URL}images/Arun kumar.png`,
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
        <section
          className={`${
            import.meta.env.PROD ? "hero-gradient-prod" : "hero-gradient"
          } text-white py-20 md:py-32 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-solar-900/90 via-solar-900/75 to-solar-800/70 z-0"></div>
          <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full solar-rays z-0 opacity-40"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full solar-rays z-0 opacity-30"></div>
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 fade-in-up">
                <div className="inline-block bg-sun-500/15 text-sun-300 font-medium rounded-full px-4 py-1 text-sm mb-6 backdrop-blur-sm border border-sun-400/30 shadow-sm">
                  Government Registered Solar Provider
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
                  Empower Your Future with {""}
                  <span className="text-sun-400">Solar Energy</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100/90 max-w-xl">
                  Harness clean energy, slash electricity bills, and embrace a
                  sustainable lifestyle today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-sun-500 hover:bg-sun-600 text-white text-lg group shadow-lg shadow-sun-900/20"
                    onClick={() => setShowForm(true)}
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Link to="/products">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-white/60 text-white hover:bg-white/10 text-lg"
                    >
                      Explore Products
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end fade-in-up">
                <div className="relative bg-white/90 p-1 md:p-2 rounded-xl shadow-2xl overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-300 float-slow">
                  <img
                    src={`${import.meta.env.BASE_URL}images/solar-panel.jpg`}
                    alt="Solar Panel Installation"
                    className="rounded-lg w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-sun-500 text-solar-900 font-bold py-1 px-3 rounded-md transform rotate-2 text-xs md:text-sm shadow">
                    Eco-Friendly
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 shadow-sm">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="relative inline-block text-sun-400 font-bold text-2xl md:text-3xl">
                    <span className="relative z-10">{stat.value}</span>
                    <span className="absolute inset-0 opacity-30 shimmer rounded"></span>
                  </div>
                  <div className="text-white/90 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Angled Divider */}
        <div className="relative h-8 -mt-8">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon fill="white" points="0,10 100,0 100,10"></polygon>
          </svg>
        </div>

        {/* Benefits Strip */}
        <section className="py-8 bg-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover-raise">
                <div className="h-12 w-12 rounded-full bg-solar-50 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-solar-700" />
                </div>
                <div>
                  <div className="font-semibold">10-Year Warranty</div>
                  <div className="text-sm text-gray-600">
                    Trusted components and installation
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover-raise">
                <div className="h-12 w-12 rounded-full bg-solar-50 flex items-center justify-center">
                  <Landmark className="h-6 w-6 text-solar-700" />
                </div>
                <div>
                  <div className="font-semibold">Govt. Subsidy Help</div>
                  <div className="text-sm text-gray-600">
                    Guidance from application to approval
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover-raise">
                <div className="h-12 w-12 rounded-full bg-solar-50 flex items-center justify-center">
                  <LifeBuoy className="h-6 w-6 text-solar-700" />
                </div>
                <div>
                  <div className="font-semibold">Responsive Support</div>
                  <div className="text-sm text-gray-600">
                    Quick assistance when you need it
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-solar-100 text-solar-600 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Our Solar Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Solar Services
              </h2>
              <p className="text-gray-600">
                From initial consultation to installation and maintenance, we
                provide end-to-end solar solutions for residential and
                commercial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 group">
                <div className="h-3 bg-gradient-to-r from-sun-400 to-sun-500"></div>
                <div className="p-6">
                  <div className="h-14 w-14 bg-solar-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto float-slow">
                    <Sun className="h-8 w-8 text-solar-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">
                    Solar Panel Installation
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Expert installation for maximum efficiency. We ensure
                    optimal positioning and configuration for your solar panels.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-solar-500 text-solar-600 hover:bg-solar-50"
                      onClick={() =>
                        window.open(
                          "https://arka360.com/ros/solar-panel-installation-best-practices",
                          "_blank"
                        )
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 group">
                <div className="h-3 bg-gradient-to-r from-solar-500 to-sun-400"></div>
                <div className="p-6">
                  <div className="h-14 w-14 bg-solar-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto float-slow">
                    <Zap className="h-8 w-8 text-solar-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">
                    Energy Optimization
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Boost your energy savings with smart solutions. Our experts
                    help you maximize efficiency and reduce costs.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-solar-500 text-solar-600 hover:bg-solar-50"
                      onClick={() =>
                        window.open(
                          "https://eco-greenenergy.com/how-to-optimize-your-solar-system-a-guide-to-boosting-performance-and-reducing-cost/",
                          "_blank"
                        )
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 group">
                <div className="h-3 bg-gradient-to-r from-sun-400 to-solar-500"></div>
                <div className="p-6">
                  <div className="h-14 w-14 bg-solar-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto float-slow">
                    <Lightbulb className="h-8 w-8 text-solar-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">
                    Maintenance & Repairs
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Keep your panels performing at their best with our
                    professional maintenance services.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-solar-500 text-solar-600 hover:bg-solar-50"
                      onClick={() =>
                        window.open(
                          "https://solarrepairandmaintenance.com/",
                          "_blank"
                        )
                      }
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
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img
                  src={`${import.meta.env.BASE_URL}images/gov-subsidy.jpg`}
                  alt="Government Subsidy"
                  className="rounded-xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <div className="inline-block bg-green-100 text-green-700 font-semibold rounded-full px-4 py-1 text-sm mb-4">
                  Government Registered
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Save with Government Subsidies
                </h2>
                <div className="bg-solar-50 border-l-4 border-solar-500 p-4 mb-6 rounded-r">
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
                <Button
                  className="bg-solar-600 hover:bg-solar-700 text-white group"
                  onClick={() =>
                    (window.location.href =
                      "https://www.bing.com/ck/a?!&&p=3bd345152795543224af769b7309788b0a2c43513cc79978e7b99929981e7925JmltdHM9MTc0ODczNjAwMA&ptn=3&ver=2&hsh=4&fclid=00dda453-682a-6ae6-1bdd-b1ae69486ba1&psq=eligibility+for+pm+surya+ghar+yojana&u=a1aHR0cHM6Ly93d3cuZnJlZWpvYmFsZXJ0LmNvbS9iaWdnZXN0L3BtLXN1cnlhLWdoYXIteW9qYW5hLWNoZWNrLWVsaWdpYmlsaXR5LW9ubGluZS1hcHBsaWNhdGlvbi1iZW5lZml0cy1vZnBtLXN1cnlhLWdoYXItbXVmdC1iaWpsaS15b2phbmEtMTAxNC8jOn46dGV4dD1QTSUyMFN1cnlhJTIwR2hhciUyMFlvamFuYSUyMEVsaWdpYmlsaXR5JTIwQ3JpdGVyaWElMjAxJTIwT25seSxhbiUyMEFhZGhhYXIlMjBjYXJkJTIwbGlua2VkJTIwdG8lMjB0aGVpciUyMGJhbmslMjBhY2NvdW50&ntb=1")
                  }
                >
                  Check Eligibility {""}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-sun-100 text-sun-600 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Customer Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600">
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

        {/* Map Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="h-96 rounded-lg overflow-hidden shadow">
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

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-solar-100 text-solar-600 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Us Today
              </h2>
              <p className="text-lg text-gray-600">
                Have questions or ready to start your solar journey? Reach out
                to our friendly team.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Partner Brands */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block bg-solar-100 text-solar-600 font-medium rounded-full px-4 py-1 text-sm mb-4">
                Trusted Partners
              </div>
              <h2 className="text-3xl font-bold">
                Brands Powering Our Solar Solutions
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
              {/* Indian Ministry */}
              <div className="group bg-white h-16 w-full rounded-lg shadow flex items-center justify-center border border-gray-200 transition-all hover:shadow-md overflow-hidden hover-raise">
                <img
                  src={`${import.meta.env.BASE_URL}images/Indian ministry.svg`}
                  alt="Indian Ministry Logo"
                  className="h-12 grayscale group-hover:grayscale-0 transition"
                />
              </div>
              {/* UTL - left-cropped */}
              <div className="group bg-white h-16 w-full rounded-lg shadow flex items-center justify-center border border-gray-200 transition-all hover:shadow-md overflow-hidden hover-raise">
                <img
                  src={`${import.meta.env.BASE_URL}images/utl.jpg`}
                  alt="UTL Logo"
                  style={{
                    width: "270%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "left center",
                  }}
                  className="h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
              </div>
              {/* TANGEDCO */}
              <div className="group bg-white h-16 w-full rounded-lg shadow flex items-center justify-center border border-gray-200 transition-all hover:shadow-md overflow-hidden hover-raise">
                <img
                  src={`${import.meta.env.BASE_URL}images/tangedco.png`}
                  alt="TANGEDCO Logo"
                  className="h-12 grayscale group-hover:grayscale-0 transition"
                />
              </div>
              {/* Premier */}
              <div className="group bg-white h-16 w-full rounded-lg shadow flex items-center justify-center border border-gray-200 transition-all hover:shadow-md overflow-hidden hover-raise">
                <img
                  src={`${import.meta.env.BASE_URL}images/premier.png`}
                  alt="Premier Logo"
                  style={{
                    width: "160%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
              </div>
              {/* Exide */}
              <div className="group bg-white h-16 w-full rounded-lg shadow flex items-center justify-center border border-gray-200 transition-all hover:shadow-md overflow-hidden hover-raise">
                <img
                  src={`${import.meta.env.BASE_URL}images/exide.png`}
                  alt="Exide Logo"
                  style={{
                    width: "160%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get Your Free Quote</DialogTitle>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
