import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface MediaFile {
  url: string;
  type: "image" | "video";
  name: string;
}

interface MediaGalleryProps {
  mediaFiles: MediaFile[];
  className?: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  mediaFiles,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!mediaFiles || mediaFiles.length === 0) {
    return (
      <div
        className={`bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${className}`}
      >
        <p className="text-gray-400">No media available</p>
      </div>
    );
  }

  const getPublicUrl = (path: string) => {
    const { data } = supabase.storage.from("product-media").getPublicUrl(path);
    return data.publicUrl;
  };

  const currentMedia = mediaFiles[currentIndex];

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaFiles.length);
  };

  const prevMedia = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaFiles.length) % mediaFiles.length
    );
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Main Media Display */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          {currentMedia.type === "image" ? (
            <img
              src={getPublicUrl(currentMedia.url)}
              alt={currentMedia.name}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openLightbox(currentIndex)}
            />
          ) : (
            <video
              src={getPublicUrl(currentMedia.url)}
              className="w-full h-full object-cover cursor-pointer"
              controls
              onClick={() => openLightbox(currentIndex)}
            >
              Your browser does not support the video tag.
            </video>
          )}

          {mediaFiles.length > 1 && (
            <>
              <Button
                size="sm"
                variant="secondary"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={prevMedia}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={nextMedia}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {mediaFiles.length > 1 && (
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {mediaFiles.map((media, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 w-16 h-16 rounded cursor-pointer overflow-hidden border-2 ${
                  index === currentIndex
                    ? "border-solar-500"
                    : "border-gray-200 dark:border-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                {media.type === "image" ? (
                  <img
                    src={getPublicUrl(media.url)}
                    alt={media.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
                    <Play className="h-4 w-4 text-white" />
                    <video
                      src={getPublicUrl(media.url)}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      muted
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            size="sm"
            variant="secondary"
            className="absolute top-4 right-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="relative max-w-4xl max-h-full">
            {currentMedia.type === "image" ? (
              <img
                src={getPublicUrl(currentMedia.url)}
                alt={currentMedia.name}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video
                src={getPublicUrl(currentMedia.url)}
                className="max-w-full max-h-full"
                controls
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            )}

            {mediaFiles.length > 1 && (
              <>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  onClick={prevMedia}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={nextMedia}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGallery;
