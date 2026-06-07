import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Image as ImageIcon, Loader2, Trash2 } from 'lucide-react';
import { getGalleryImages, uploadGalleryImages } from '../services/galleryService'; 

export function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      // Clean Axios call
      const data = await getGalleryImages(); 
      // Adjusted based on C# response structure (e.g., data.items or just data)

      setImages(data || []); 
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const formData = new FormData();
    
    formData.append('UploadedBy', 'Admin'); // Or grab this from your Auth context
    Array.from(files).forEach((file) => {
      formData.append('Files', file);
    });

    try {
      // Clean Axios call
      await uploadGalleryImages(formData);
      
      // Refresh the grid
      await fetchImages(); 
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error("Error uploading:", error);
      // Here you could add a toast notification for the error
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Upload Dropzone */}
      <div className="bg-card border border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors">
        <input 
          type="file" 
          multiple 
          accept="image/*"
          className="hidden" 
          ref={fileInputRef}
          onChange={handleFileUpload}
          disabled={isUploading}
        />
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {isUploading ? <Loader2 className="w-8 h-8 animate-spin" /> : <UploadCloud className="w-8 h-8" />}
          </div>
          <div>
            <h3 className="font-display text-lg">
              {isUploading ? "Uploading your images..." : "Upload to Gallery"}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">
              Drag and drop your images here, or click to browse. Supports bulk upload.
            </p>
            <button 
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Select Files
            </button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div>
        <h3 className="font-display text-xl mb-4 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-muted-foreground" />
          Recent Uploads
        </h3>
        
        {isLoading ? (
          <div className="flex justify-center p-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center p-12 border rounded-xl border-dashed bg-card/50 text-muted-foreground">
            No images in the gallery yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden bg-muted border">
                {/* Image */}
               
                <img 
                  src={img.imageUrl} 
                  alt="Gallery upload" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white text-xs truncate mb-2">
                    {new Date(img.uploadDate).toLocaleDateString()}
                  </p>
                  {/* Future Delete Button */}
                  <button className="p-2 bg-destructive/90 text-white rounded-md hover:bg-destructive w-fit transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}