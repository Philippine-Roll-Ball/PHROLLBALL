import { useState } from "react";
import { Download, QrCode as QrIcon, Save, Eye, Layers, X, CheckCircle2 } from "lucide-react";
import JSZip from "jszip";

const ENTITY_TYPES = [
  { id: "member", label: "Member", placeholder: "e.g., MEM-2026-0001", bulkPattern: "MEM-2026-{n}" },
  { id: "player", label: "Player", placeholder: "e.g., PLY-2026-0089", bulkPattern: "PLY-2026-{n}" },
  { id: "coach", label: "Coach", placeholder: "e.g., CCH-2026-0012", bulkPattern: "CCH-2026-{n}" },
  { id: "team", label: "Team", placeholder: "e.g., TM-MANILA-0001", bulkPattern: "TM-{n}" },
  { id: "event", label: "Event", placeholder: "e.g., EVT-NAT-2026", bulkPattern: "EVT-2026-{n}" },
  { id: "document", label: "Document", placeholder: "e.g., DOC-CERT-0001", bulkPattern: "DOC-{n}" },
  { id: "certificate", label: "Certificate", placeholder: "e.g., CERT-LRBFC-2026-001", bulkPattern: "CERT-LRBFC-2026-{n}" },
];
const PUBLIC_BASE_URL = import.meta.env.VITE_CLIENT_URL;
const BASE_URL = import.meta.env.VITE_API_URL;

const generateSecureToken = () => window.crypto.randomUUID().replace(/-/g, "");

type QrItem = {
  id: string; // the record ID, e.g. CERT-LRBFC-2026-001
  token: string;
  qrUrl: string;
  status: "pending" | "registering" | "registered" | "error";
  errorMsg?: string;
};

type QrBulkResult = {
  data: string;
  success: boolean;
  message: string;
};

export function GenerateQR() {
  const [mode, setMode] = useState<"single" | "bulk">("single");

  // ---------- SINGLE MODE STATE ----------
  const [selectedEntity, setSelectedEntity] = useState(ENTITY_TYPES[0].id);
  const [inputValue, setInputValue] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [securityToken, setSecurityToken] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeEntity = ENTITY_TYPES.find((e) => e.id === selectedEntity);

  // ---------- BULK MODE STATE ----------
  const [bulkEntity, setBulkEntity] = useState(ENTITY_TYPES[0].id);
  const activeBulkEntity = ENTITY_TYPES.find((e) => e.id === bulkEntity);

  const [pattern, setPattern] = useState(activeBulkEntity?.bulkPattern ?? "{n}");
  const [rangeStart, setRangeStart] = useState(1);
  const [rangeEnd, setRangeEnd] = useState(65);
  const [padLength, setPadLength] = useState(3);
  const [bulkItems, setBulkItems] = useState<QrItem[]>([]);
  const [bulkError, setBulkError] = useState<string | null>(null);
  const [isBulkRegistering, setIsBulkRegistering] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  const buildQrUrl = (data: string, token: string) => {
    const verificationUrl = `${PUBLIC_BASE_URL}/verify?type=${bulkEntity}&data=${data}&token=${token}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
      verificationUrl
    )}`;
  };

  const generateBulkIds = (): string[] => {
    const ids: string[] = [];
    for (let n = rangeStart; n <= rangeEnd; n++) {
      const padded = String(n).padStart(padLength, "0");
      ids.push(pattern.replace("{n}", padded));
    }
    return ids;
  };

  // ---------- SINGLE MODE HANDLERS ----------
  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setError(null);
    setIsRegistered(false);

    const newToken = generateSecureToken();
    setSecurityToken(newToken);

    const verificationUrl = `${PUBLIC_BASE_URL}/verify?type=${selectedEntity}&data=${inputValue}&token=${newToken}`;
    setPreviewUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
        verificationUrl
      )}`
    );
  };

  const handleRegister = async () => {
    if (isLoading || isRegistered) return;
    setIsLoading(true);
    setError(null);

    try {
      const authToken = await localStorage.getItem("jwtToken");

      const response = await fetch(`${BASE_URL}/api/qr/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          entityType: selectedEntity,
          data: inputValue,
          securityToken: securityToken,
          createdBy: "admin",
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${errorText}`);
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
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the QR code", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setPreviewUrl(null);
    setIsRegistered(false);
  };

  // ---------- BULK MODE HANDLERS ----------
  const handleBulkPreview = (e: React.FormEvent) => {
    e.preventDefault();
    setBulkError(null);

    if (!pattern.includes("{n}")) {
      setBulkError("Pattern must include {n} as a placeholder, e.g. CERT-LRBFC-2026-{n}");
      return;
    }
    if (rangeEnd < rangeStart) {
      setBulkError("Range end must be greater than or equal to range start.");
      return;
    }
    const count = rangeEnd - rangeStart + 1;
    if (count > 500) {
      setBulkError("That's a lot of QR codes in one go (>500). Consider splitting into smaller batches.");
      return;
    }

    const ids = generateBulkIds();
    const items: QrItem[] = ids.map((id) => {
      const token = generateSecureToken();
      return {
        id,
        token,
        qrUrl: buildQrUrl(id, token),
        status: "pending",
      };
    });

    setBulkItems(items);
  };

  // Registers the whole batch in a single request to /api/qr/register-bulk
  const handleBulkRegisterAll = async () => {
    if (isBulkRegistering || bulkItems.length === 0) return;
    setIsBulkRegistering(true);
    setBulkError(null);

    // mark everything as "registering" so the UI shows it's in flight
    setBulkItems((prev) => prev.map((it) => ({ ...it, status: "registering" })));

    try {
      const authToken = await localStorage.getItem("jwtToken");

      const response = await fetch(`${BASE_URL}/api/qr/register-bulk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          items: bulkItems.map((item) => ({
            entityType: bulkEntity,
            data: item.id,
            securityToken: item.token,
            createdBy: "admin",
          })),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Bulk registration failed");
      }

      const result = await response.json();

      const resultMap = new Map<string, QrBulkResult>(
        result.results.map((r: QrBulkResult) => [r.data, r])
      );

      setBulkItems((prev) =>
        prev.map((item) => {
          const match = resultMap.get(item.id);
          if (!match) {
            return { ...item, status: "error", errorMsg: "No result returned for this item" };
          }
          return {
            ...item,
            status: match.success ? "registered" : "error",
            errorMsg: match.success ? undefined : match.message,
          };
        })
      );
    } catch (err) {
      console.error("Bulk QR Registration Error:", err);
      setBulkError(err.message || "Something went wrong registering the batch.");
      // revert anything still stuck on "registering" back to an error state
      setBulkItems((prev) =>
        prev.map((it) =>
          it.status === "registering" ? { ...it, status: "error", errorMsg: "Request failed" } : it
        )
      );
    } finally {
      setIsBulkRegistering(false);
    }
  };

  const handleBulkDownloadZip = async () => {
    const registeredItems = bulkItems.filter((it) => it.status === "registered");
    if (registeredItems.length === 0) return;

    setIsZipping(true);
    try {
      const zip = new JSZip();
      const folder = zip.folder(`QR-${bulkEntity}-batch`);

      // fetch images with limited concurrency so we don't open too many connections at once
      const CONCURRENCY = 6;
      const queue = [...registeredItems.keys()];

      const fetchOne = async (i: number) => {
        const item = registeredItems[i];
        const response = await fetch(item.qrUrl);
        const blob = await response.blob();
        folder?.file(`QR-${bulkEntity}-${item.id}.png`, blob);
      };

      const workers = Array.from({ length: CONCURRENCY }, async () => {
        while (queue.length > 0) {
          const idx = queue.shift();
          if (idx === undefined) break;
          await fetchOne(idx);
        }
      });

      await Promise.all(workers);

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `QR-${bulkEntity}-batch-${rangeStart}-${rangeEnd}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error zipping QR codes", err);
      setBulkError("Something went wrong while building the zip file.");
    } finally {
      setIsZipping(false);
    }
  };

  const clearBulk = () => {
    setBulkItems([]);
    setBulkError(null);
  };

  const registeredCount = bulkItems.filter((it) => it.status === "registered").length;
  const errorCount = bulkItems.filter((it) => it.status === "error").length;
  const allDone =
    bulkItems.length > 0 && bulkItems.every((it) => it.status === "registered" || it.status === "error");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Mode toggle */}
      <div className="flex gap-2 bg-muted p-1 rounded-lg w-fit">
        <button
          onClick={() => setMode("single")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            mode === "single" ? "bg-card shadow-sm" : "text-muted-foreground"
          }`}
        >
          Single
        </button>
        <button
          onClick={() => setMode("bulk")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
            mode === "bulk" ? "bg-card shadow-sm" : "text-muted-foreground"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          Bulk
        </button>
      </div>

      {mode === "single" ? (
        <>
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
                <strong>URL:</strong> {PUBLIC_BASE_URL}/verify?type={selectedEntity}&data={inputValue}&token=
                {securityToken}
              </p>

              <div
                className={`p-4 inline-block rounded-xl border shadow-sm mb-6 transition-colors duration-300 ${
                  isRegistered ? "bg-green-50 border-green-200" : "bg-white"
                }`}
              >
                <img
                  src={previewUrl}
                  alt="Generated QR Code"
                  className={`w-48 h-48 object-contain ${!isRegistered && "opacity-80 grayscale-[30%]"}`}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                {!isRegistered ? (
                  <button
                    onClick={handleRegister}
                    disabled={isLoading || isRegistered}
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
        </>
      ) : (
        <>
          {/* BULK MODE */}
          <div className="bg-card rounded-xl border p-6">
            <div className="mb-6">
              <h2 className="text-xl font-display flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Bulk Generate Verification QRs
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Generate a numbered range of QR codes at once, e.g. CERT-LRBFC-2026-001 through
                CERT-LRBFC-2026-065.
              </p>
            </div>

            {bulkError && (
              <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg">
                {bulkError}
              </div>
            )}

            <form onSubmit={handleBulkPreview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Entity Type</label>
                <select
                  value={bulkEntity}
                  onChange={(e) => {
                    const newEntityId = e.target.value;
                    setBulkEntity(newEntityId);
                    const entity = ENTITY_TYPES.find((en) => en.id === newEntityId);
                    if (entity) setPattern(entity.bulkPattern);
                  }}
                  disabled={isBulkRegistering}
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50"
                >
                  {ENTITY_TYPES.map((entity) => (
                    <option key={entity.id} value={entity.id}>
                      {entity.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">ID Pattern</label>
                <input
                  type="text"
                  required
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50"
                  placeholder={`${activeBulkEntity?.label.toUpperCase()}-{n}`}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Use <code>{"{n}"}</code> as the placeholder for the running number.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start</label>
                  <input
                    type="number"
                    value={rangeStart}
                    onChange={(e) => setRangeStart(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End</label>
                  <input
                    type="number"
                    value={rangeEnd}
                    onChange={(e) => setRangeEnd(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Zero-pad to</label>
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={padLength}
                    onChange={(e) => setPadLength(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Will generate <strong>{Math.max(0, rangeEnd - rangeStart + 1)}</strong> QR codes, from{" "}
                <code>{pattern.replace("{n}", String(rangeStart).padStart(padLength, "0"))}</code> to{" "}
                <code>{pattern.replace("{n}", String(rangeEnd).padStart(padLength, "0"))}</code>.
              </p>

              <button
                type="submit"
                disabled={isBulkRegistering}
                className="w-full flex justify-center items-center gap-2 bg-secondary text-secondary-foreground py-2 rounded-lg font-medium hover:bg-secondary/80 disabled:opacity-50 transition-colors mt-4"
              >
                <Eye className="w-4 h-4" />
                Preview Batch
              </button>
            </form>
          </div>

          {bulkItems.length > 0 && (
            <div className="bg-card rounded-xl border p-6 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-medium">
                    {bulkItems.length} QR codes ready
                    {registeredCount > 0 && (
                      <span className="text-green-600 text-sm font-normal ml-2">
                        ({registeredCount} registered{errorCount > 0 ? `, ${errorCount} failed` : ""})
                      </span>
                    )}
                  </h3>
                  {isBulkRegistering && (
                    <p className="text-xs text-muted-foreground mt-1">Registering batch...</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={clearBulk}
                    disabled={isBulkRegistering}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg disabled:opacity-50"
                  >
                    <X className="w-3.5 h-3.5" />
                    Clear
                  </button>
                  {!allDone && (
                    <button
                      onClick={handleBulkRegisterAll}
                      disabled={isBulkRegistering}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors text-sm"
                    >
                      <Save className="w-3.5 h-3.5" />
                      {isBulkRegistering ? "Registering..." : "Register All to Database"}
                    </button>
                  )}
                  {registeredCount > 0 && (
                    <button
                      onClick={handleBulkDownloadZip}
                      disabled={isZipping}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors text-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {isZipping ? "Zipping..." : `Download ${registeredCount} as ZIP`}
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[480px] overflow-y-auto pr-1">
                {bulkItems.map((item) => (
                  <div
                    key={item.id}
                    className={`border rounded-lg p-2 text-center relative ${
                      item.status === "registered"
                        ? "bg-green-50 border-green-200"
                        : item.status === "error"
                        ? "bg-red-50 border-red-200"
                        : "bg-background"
                    }`}
                  >
                    {item.status === "registered" && (
                      <CheckCircle2 className="w-4 h-4 text-green-600 absolute top-1.5 right-1.5" />
                    )}
                    <img
                      src={item.qrUrl}
                      alt={item.id}
                      className={`w-full aspect-square object-contain mb-1 ${
                        item.status !== "registered" && "opacity-80 grayscale-[30%]"
                      }`}
                      loading="lazy"
                    />
                    <p className="text-[10px] break-all text-muted-foreground leading-tight">{item.id}</p>
                    {item.status === "registering" && (
                      <p className="text-[10px] text-primary">Saving...</p>
                    )}
                    {item.status === "error" && (
                      <p className="text-[10px] text-red-500" title={item.errorMsg}>
                        Failed
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}