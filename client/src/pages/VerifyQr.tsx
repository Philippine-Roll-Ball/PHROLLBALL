import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, XCircle, Loader2, AlertTriangle } from "lucide-react";

export function VerifyQr() {
  // Extract data from the URL: /verify/:entityType/:id
 const [searchParams] = useSearchParams();
  const entityType = searchParams.get("type");
  const id = searchParams.get("data");
  const token = searchParams.get("token");

  // States to manage the UI
  const [status, setStatus] = useState<"loading" | "valid" | "invalid" | "error">("loading");
  const [message, setMessage] = useState<string>("Verifying document...");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recordData, setRecordData] = useState<any>(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    // Automatically verify when the page loads
    const verifyDocument = async () => {
      if (!entityType || !id || !token) {
        setStatus("error");
        setMessage("Invalid QR Code: Missing verification data.");
        return;
      }

      try {
        // Call your ASP.NET Core API
        // Make sure the port matches your backend (e.g., 5001)
        const response = await fetch(
          `${API_BASE_URL}/api/qr/verify?entityType=${entityType}&data=${id}&token=${token}`
        );

        const result = await response.json();

        if (response.ok) {
          setStatus("valid");
          setMessage(result.message || "This record is authentic and verified.");
          setRecordData(result.record); // Optional: if you send extra info back
        } else {
          setStatus("invalid");
          setMessage(result.message || "This record could not be verified or has been revoked.");
        }
      } catch (err) {
        console.error("Verification failed:", err);
        setStatus("error");
        setMessage("Unable to connect to the verification server. Please try again later.");
      }
    };

    verifyDocument();
  }, [entityType, id, token]);

  // UI Renderers based on status
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-lg text-center animate-in fade-in zoom-in-95 duration-300">
        
        {/* LOADING STATE */}
        {status === "loading" && (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <h2 className="text-2xl font-display">Verifying...</h2>
            <p className="text-muted-foreground">Checking secure database records</p>
          </div>
        )}

        {/* VALID STATE */}
        {status === "valid" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-display text-green-700">Verified Authentic</h2>
            <p className="text-muted-foreground">{message}</p>
            
            <div className="w-full bg-green-100 border border-green-100/30 p-4 rounded-xl text-left mt-6 space-y-2">
              <p className="text-sm"><span className="font-semibold">Type:</span> <span className="capitalize">{entityType}</span></p>
              <p className="text-sm"><span className="font-semibold">ID:</span> {id}</p>
              {recordData?.createdAt && (
                <p className="text-sm"><span className="font-semibold">Registered On:</span> {new Date(recordData.createdAt).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        )}

        {/* INVALID STATE */}
        {status === "invalid" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-2">
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
            <h2 className="text-2xl font-display text-red-700">Verification Failed</h2>
            <p className="text-muted-foreground">{message}</p>
            <div className="w-full bg-red-50 border border-red-100 p-4 rounded-xl text-left mt-6">
              <p className="text-sm text-red-800">
                <strong>Warning:</strong> The scanned QR code does not match any valid records in our system. This document may be forged, altered, or revoked.
              </p>
            </div>
          </div>
        )}

        {/* ERROR STATE */}
        {status === "error" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
              <AlertTriangle className="w-12 h-12 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-display text-yellow-700">System Error</h2>
            <p className="text-muted-foreground">{message}</p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Philippine Rollball Federation Official Verification System
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyQr;