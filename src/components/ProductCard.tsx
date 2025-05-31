
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import QuotationModal from "./QuotationModal";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price?: number;
  image: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  features,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {price && (
            <Badge className="absolute top-2 right-2 bg-sun-500">
              ₹{price.toLocaleString()}
            </Badge>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-solar-600 hover:bg-solar-700 text-white"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Request Quotation
          </Button>
        </CardFooter>
      </Card>
      
      <QuotationModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        productName={name}
      />
    </>
  );
};

export default ProductCard;
