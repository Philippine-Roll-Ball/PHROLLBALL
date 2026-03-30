import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { regions, provinces, cities, barangays } from "select-philippines-address";
// import { useAuth } from "@/hook/useAuth";
// import { registerUser } from "@/services/apiService"; 

export default function Register() {

  interface Region {
    id: number;
    psgc_code: string;
    region_name: string;
    region_code: string;
  }

  interface Province {
    province_code: string;
    province_name: string;
    psgc_code: string;
    region_code: string;
  }

  interface Municipality {
    city_code: string;
    city_name: string;
    province_code: string;
    psgc_code: string;
    region_desc: string;
  }

  interface Barangay {
    brgy_code: string;
    brgy_name: string;
    city_code: string;
    province_code: string;
    region_code: string;
  }
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [regionList, setRegionList] = useState<Region[]>([]);
  const [provinceList, setProvinceList] = useState<Province[]>([]);
  const [cityList, setCityList] = useState<Municipality[]>([]);
  const [barangayList, setBarangayList] = useState<Barangay[]>([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    age: "",
    nationality: "",
    sex: "",
    phone: "",
    region: "",
    province: "",
    city: "",
    barangay: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    regions().then((response: Region[]) => {
      setRegionList(response);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const regionCode = e.target.value;
    setFormData((prev) => ({ ...prev, region: regionCode, province: "", city: "", barangay: "" }));

    provinces(regionCode).then((res: Province[]) => setProvinceList(res));
    setCityList([]); 
    setBarangayList([]);
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceCode = e.target.value;
    setFormData((prev) => ({ ...prev, province: provinceCode, city: "", barangay: "" }));

    cities(provinceCode).then((res: Municipality[]) => setCityList(res));
    setBarangayList([]);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityCode = e.target.value;
    setFormData((prev) => ({ ...prev, city: cityCode, barangay: "" }));

    barangays(cityCode).then((res: Barangay[]) => setBarangayList(res));
  };


  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);


    if (step < 4) {
      nextStep();
      return;
    }

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
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-8 px-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-xl p-8 shadow-sm">

        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="font-display text-4xl">Be a Member</h1>
          <p className="text-md text-muted-foreground mt-2">
            Join the Roll Ball Federation and be part of our growing community!
          </p>
        </div>

        {/* Step Indicator (Progress Bar) */}
        <div className="flex justify-between items-center mb-4 px-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold transition-colors duration-300 ${step >= item
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-muted text-muted-foreground"
                  }`}
              >
                {item}
              </div>
              {/* Connector Line */}
              {item < 4 && (
                <div
                  className={`h-1 w-10 sm:w-16 mx-2 rounded transition-colors duration-300 ${step > item ? "bg-primary" : "bg-muted"
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
                  <label className="text-sm font-medium">Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    required
                    value={formData.middleName}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                    placeholder="Santos"
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
                <div>
                  <label className="text-sm font-medium">Birthdate</label>
                  <input
                    type="date"
                    name="birthDate"
                    required
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Age</label>
                  <input
                    type="number"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                    placeholder="22"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    required
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                    placeholder="Filipino"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Sex</label>
                  <select
                    name="sex"
                    required
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  >
                    <option value="" disabled>Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Contact Details & Address */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold border-b pb-2">Step 2: Contact Info</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                    placeholder="juandelacruz@gmail.com"
                  />
                </div>

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
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="text-sm font-medium">Region</label>
                  <select
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleRegionChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                  >
                    <option value="" disabled>Select Region</option>
                    {regionList.map((region) => (
                      <option key={region.region_code} value={region.region_code}>
                        {region.region_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Province</label>
                  <select
                    name="province"
                    required
                    value={formData.province}
                    onChange={handleProvinceChange}
                    disabled={!formData.region}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background disabled:opacity-50"
                  >
                    <option value="" disabled>Select Province</option>
                    {provinceList.map((prov) => (
                      <option key={prov.province_code} value={prov.province_code}>
                        {prov.province_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">City/Municipality</label>
                  <select
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleCityChange}
                    disabled={!formData.province}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background disabled:opacity-50"
                  >
                    <option value="" disabled>Select City</option>
                    {cityList.map((city) => (
                      <option key={city.city_code} value={city.city_code}>
                        {city.city_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Barangay</label>
                  <select
                    name="barangay"
                    required
                    value={formData.barangay}
                    onChange={handleChange}
                    disabled={!formData.city}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background disabled:opacity-50"
                  >
                    <option value="" disabled>Select Barangay</option>
                    {barangayList.map((brgy) => (
                      <option key={brgy.brgy_code} value={brgy.brgy_code}>
                        {brgy.brgy_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>
          )}

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

          {step === 4 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold border-b pb-2">Step 4: Account Credentials</h2>
              <div>
                <label className="text-sm font-medium">Password</label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border rounded-lg bg-background"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Confirm Password</label>
                <div className="relative mt-1">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border rounded-lg bg-background"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-4 pt-4">
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