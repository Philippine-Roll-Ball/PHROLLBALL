import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Image as ImageIcon, Loader2, Trash2, CheckSquare, X} from 'lucide-react';
import { getGalleryImages, uploadGalleryImages, deleteGalleryImages} from '../services/galleryService'; 

export function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
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

  const toggleSelection = (id: string) =>  {
    setSelectedIds((prev) => 
      prev.includes(id) ? prev.filter((imgId) => imgId !== id) : [...prev, id]
    );
  }

  const handleDeleteSelected = async() => {
    if(!window.confirm(`Are you sure you want to delete ${selectedIds.length} images? This cannot be undone.`)) return;

    try {
      setIsDeleting(true);
      await deleteGalleryImages(selectedIds);
      setSelectedIds([]);
      await fetchImages();
    } catch(error){
      console.error("Error deleting images", error);
    } finally {
      setIsDeleting(false);
    }
  }
  



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
        {/* Dynamic Header: Changes when items are selected */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-muted-foreground" />
            Recent Uploads
            <span className="text-muted-foreground text-sm">({images.length})</span>
          </h3>

          {/* Bulk Action Bar - Only shows if 1 or more images are selected */}
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-3 animate-in slide-in-from-right-4">
              <span className="text-sm font-medium text-primary">
                {selectedIds.length} selected
              </span>
              <button 
                onClick={() => setSelectedIds([])}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                title="Clear selection"
              >
                <X className="w-4 h-4" />
              </button>
              <button 
                onClick={handleDeleteSelected}
                disabled={isDeleting}
                className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground text-sm font-medium rounded-lg hover:opacity-90 disabled:opacity-50 transition-all"
              >
                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                Delete Selected
              </button>
            </div>
          )}
        </div>
        
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
            {images.map((img) => {
              const isSelected = selectedIds.includes(img.id);

              return (
                <div 
                  key={img.id} 
                  onClick={() => toggleSelection(img.id)}
                  className={`group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer transition-all duration-200 ${
                    isSelected ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : 'border border-transparent hover:border-border'
                  }`}
                >
                  {/* Image */}
                  <img 
                    src={img.imageUrl} 
                    alt="Gallery upload" 
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      isSelected ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Interactive Overlay */}
                  <div className={`absolute inset-0 transition-opacity flex flex-col justify-between p-3 ${
                    isSelected ? 'bg-primary/20 opacity-100' : 'bg-black/40 opacity-0 group-hover:opacity-100'
                  }`}>
                    {/* Top Right Checkbox */}
                    <div className="flex justify-end">
                      <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-primary border-primary text-primary-foreground' : 'border-white/70 text-transparent'
                      }`}>
                        <CheckSquare className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-auto">
                      <p className="text-white text-xs font-medium drop-shadow-md truncate">
                        {new Date(img.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}