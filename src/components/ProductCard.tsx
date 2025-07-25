import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import QuotationModal from "./QuotationModal";
import MediaGallery from "./MediaGallery";

interface MediaFile {
  url: string;
  type: "image" | "video";
  name: string;
}

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price?: number;
  media_files: MediaFile[];
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  media_files = [],
  features = [],
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Debug logs
  console.log("ProductCard props:", {
    id,
    name,
    description,
    price,
    media_files,
    features,
  });

  return (
    <>
      <Card className="min-h-[400px] flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          {media_files && media_files.length > 0 ? (
            <MediaGallery mediaFiles={media_files} />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-500">No image available</p>
            </div>
          )}
          {price && (
            <Badge className="absolute top-2 right-2 bg-sun-500">
              ₹{price.toLocaleString()}
            </Badge>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description && description.trim() !== ""
              ? description
              : "No description provided."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {features.length > 0 ? (
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No features listed.</p>
          )}
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
