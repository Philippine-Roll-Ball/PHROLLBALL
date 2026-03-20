import { useState } from "react";
import { Download, QrCode as QrIcon, Save, Eye } from "lucide-react";
import { useAuth } from "@/hook/useAuth"; 

const ENTITY_TYPES = [
  { id: "member", label: "Member", placeholder: "e.g., MEM-2026-001" },
  { id: "player", label: "Player", placeholder: "e.g., PLY-2026-089" },
  { id: "coach", label: "Coach", placeholder: "e.g., CCH-2026-012" },
  { id: "team", label: "Team", placeholder: "e.g., TM-MANILA-01" },
  { id: "event", label: "Event", placeholder: "e.g., EVT-NAT-2026" },
  { id: "document", label: "Document", placeholder: "e.g., DOC-CERT-001" }, 
];

const PUBLIC_BASE_URL = "https://rollball.ph/verify"; 

// Helper function to generate a random 8-character token
const generateSecureToken = () => {
  return window.crypto.randomUUID().replace(/-/g, '');  
};

export function GenerateQR() {
  const { user } = useAuth();
  
  const [selectedEntity, setSelectedEntity] = useState(ENTITY_TYPES[0].id);
  const [inputValue, setInputValue] = useState("");
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [securityToken, setSecurityToken] = useState<string>(""); 
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeEntity = ENTITY_TYPES.find(e => e.id === selectedEntity);

  // STEP 1: Generate Token & Preview
  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setError(null);
    setIsRegistered(false); 
    
    // 🌟 Generate a new token every time they preview
    const newToken = generateSecureToken();
    setSecurityToken(newToken);
    
    // 🌟 Attach the token to the URL as a query parameter
    const verificationUrl = `${PUBLIC_BASE_URL}/${selectedEntity}/${inputValue}?token=${newToken}`;
    
    setPreviewUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(verificationUrl)}`);
  };

  // STEP 2: Save to Database
  const handleRegister = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const authToken = await user?.getIdToken();

      const response = await fetch("https://localhost:7190/api/qr/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}` 
        },
        body: JSON.stringify({
          entityType: selectedEntity, 
          data: inputValue,
          securityToken: securityToken, // 🌟 Send the token to C#
          createdByEmail: user?.email
        })
      });

      if (!response.ok) {
        throw new Error("Failed to register QR data in the database. It might already exist.");
      }

      setIsRegistered(true); 
      
    } catch (err) {
      console.error("QR Registration Error:", err);
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!previewUrl || !isRegistered) return;
    try {
      const response = await fetch(previewUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `QR-${selectedEntity}-${inputValue}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the QR code", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setPreviewUrl(null);
    setIsRegistered(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-card rounded-xl border p-6">
        <div className="mb-6">
          <h2 className="text-xl font-display flex items-center gap-2">
            <QrIcon className="w-5 h-5 text-primary" />
            Create Secure Verification QR
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Generates a QR code with a randomized security token to prevent document forgery.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handlePreview} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Entity Type</label>
            <select
              value={selectedEntity}
              onChange={(e) => {
                setSelectedEntity(e.target.value);
                setPreviewUrl(null);
                setIsRegistered(false);
              }}
              className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            >
              {ENTITY_TYPES.map((entity) => (
                <option key={entity.id} value={entity.id}>
                  {entity.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Record ID / Tracking Number</label>
            <input
              type="text"
              required
              value={inputValue}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50"
              placeholder={activeEntity?.placeholder}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="w-full flex justify-center items-center gap-2 bg-secondary text-secondary-foreground py-2 rounded-lg font-medium hover:bg-secondary/80 disabled:opacity-50 transition-colors mt-4"
          >
            <Eye className="w-4 h-4" />
            Preview QR Code
          </button>
        </form>
      </div>

      {previewUrl && (
        <div className="bg-card rounded-xl border p-6 text-center animate-in fade-in slide-in-from-bottom-4">
          <h3 className="font-medium mb-2 capitalize">
            {isRegistered ? "Secure QR Code Registered!" : "QR Code Preview"}
          </h3>
          <p className="text-xs text-muted-foreground mb-4 break-all bg-muted p-2 rounded">
            <strong>URL:</strong> {PUBLIC_BASE_URL}/{selectedEntity}/{inputValue}?token={securityToken}
          </p>
          
          <div className={`p-4 inline-block rounded-xl border shadow-sm mb-6 transition-colors duration-300 ${isRegistered ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
            <img 
              src={previewUrl} 
              alt="Generated QR Code" 
              className={`w-48 h-48 object-contain ${!isRegistered && 'opacity-80 grayscale-[30%]'}`}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {!isRegistered ? (
              <button
                onClick={handleRegister}
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                <Save className="w-4 h-4" />
                {isLoading ? "Saving..." : "Register to Database"}
              </button>
            ) : (
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Verified QR
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}