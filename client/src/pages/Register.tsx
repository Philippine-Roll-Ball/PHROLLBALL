import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { useAuth } from "@/hook/useAuth";
// import { registerUser } from "@/services/apiService"; // Update your API import

export default function Register() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1. Unified state to hold all data across the 4 steps
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 2. Generic handler for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // 3. Handle step progression and final submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // If we are not on the final step, just move forward
    if (step < 4) {
      nextStep();
      return;
    }

    // Final Validation before submitting to the API
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      // Replace with actual API Call
      // const userData = await registerUser(formData);
      console.log("Registered successfully!", formData);
      
      // Redirect after success
      // window.location.href = "/admin";
    } catch (err) {
      console.error("Registration failed", err);
      setError("An error occurred during registration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-xl p-8 shadow-sm">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-display text-4xl">Be a Member</h1>
          <p className="text-md text-muted-foreground mt-2">
            Join the Roll Ball Federation and be part of our growing community!
          </p>
        </div>

        {/* Step Indicator (Progress Bar) */}
        <div className="flex justify-between items-center mb-8 px-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold transition-colors duration-300 ${
                  step >= item
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-muted text-muted-foreground"
                }`}
              >
                {item}
              </div>
              {/* Connector Line */}
              {item < 4 && (
                <div
                  className={`h-1 w-10 sm:w-16 mx-2 rounded transition-colors duration-300 ${
                    step > item ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* STEP 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold border-b pb-2">Step 1: Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                    placeholder="Dela Cruz"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Contact Details */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold border-b pb-2">Step 2: Contact Info</h2>
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  placeholder="09123456789"
                />
              </div>
              <div>
                <label className="text-sm font-medium">City/Province</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  placeholder="Manila"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Membership Details */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold border-b pb-2">Step 3: Membership Role</h2>
              <div>
                <label className="text-sm font-medium">Select Role</label>
                <select
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                >
                  <option value="" disabled>Choose your role...</option>
                  <option value="Player">Player</option>
                  <option value="Coach">Coach</option>
                  <option value="Referee">Referee</option>
                  <option value="Official">Official</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 4: Account Setup */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold border-b pb-2">Step 4: Account Credentials</h2>
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  placeholder="member@rollball.ph"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            {step > 1 && (
              <Button type="button" variant="outline" className="w-full" onClick={prevStep}>
                Back
              </Button>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {step < 4 ? "Next Step" : (isLoading ? "Submitting..." : "Complete Registration")}
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Already have an Account? <a href="/login" className="text-primary underline hover:text-primary/90">Login here</a>
        </p>
      </div>
    </div>
  );
}