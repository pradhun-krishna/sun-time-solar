import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MediaFile {
  url: string;
  type: "image" | "video";
  name: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number | null;
  media_files: MediaFile[];
  features: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading products",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
              Explore our range of high-quality solar products designed for
              efficiency, durability, and performance. Find the perfect solar
              solution for your needs.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-lg">Loading products...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={parseInt(product.id)}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    media_files={product.media_files || []}
                    features={product.features}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our experts can help you customize a solar solution that perfectly
              fits your needs. Contact us today for personalized advice and
              quotes.
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
