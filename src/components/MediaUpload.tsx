import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Image, Video } from "lucide-react";

interface MediaFile {
  url: string;
  type: "image" | "video";
  name: string;
}

interface MediaUploadProps {
  productId?: string;
  existingFiles: MediaFile[];
  onFilesChange: (files: MediaFile[]) => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({
  productId,
  existingFiles,
  onFilesChange,
}) => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const newFiles: MediaFile[] = [];

    try {
      for (const file of Array.from(files)) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${productId || "temp"}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("product-media")
          .upload(filePath, file);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          throw uploadError;
        }

        const fileType = file.type.startsWith("image/") ? "image" : "video";
        newFiles.push({
          url: filePath,
          type: fileType,
          name: file.name,
        });
      }

      const updatedFiles = [...existingFiles, ...newFiles];
      onFilesChange(updatedFiles);

      toast({
        title: "Files uploaded successfully!",
        description: `${newFiles.length} file(s) uploaded.`,
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeFile = async (fileToRemove: MediaFile) => {
    try {
      const { error } = await supabase.storage
        .from("product-media")
        .remove([fileToRemove.url]);

      if (error) throw error;

      const updatedFiles = existingFiles.filter(
        (file) => file.url !== fileToRemove.url
      );
      onFilesChange(updatedFiles);

      toast({
        title: "File removed successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error removing file",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getPublicUrl = (path: string) => {
    const { data } = supabase.storage.from("product-media").getPublicUrl(path);
    return data.publicUrl;
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Upload Photos & Videos
        </label>
        <div className="flex items-center gap-2">
          <Input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="flex-1"
          />
          <Button type="button" disabled={uploading} size="sm">
            <Upload className="h-4 w-4 mr-2" />
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Supported formats: Images (JPG, PNG, GIF, WebP) and Videos (MP4, WebM,
          MOV)
        </p>
      </div>

      {existingFiles.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {existingFiles.map((file, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                {file.type === "image" ? (
                  <img
                    src={getPublicUrl(file.url)}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Video className="h-8 w-8 text-gray-400" />
                    <video
                      src={getPublicUrl(file.url)}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                    />
                  </div>
                )}
              </div>
              <Button
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeFile(file)}
              >
                <X className="h-3 w-3" />
              </Button>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  {file.type === "image" ? (
                    <Image className="h-3 w-3" />
                  ) : (
                    <Video className="h-3 w-3" />
                  )}
                  <span className="truncate">{file.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaUpload;
