import { useAddress } from "@/hook/useRegion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AddressStep = ({ formData, onChange, setFormData } : any) => {
    const { 
        regionList, provinceList, cityList, barangayList, 
        handleRegionChange, handleProvinceChange, handleCityChange 
    } = useAddress(setFormData);

    return (
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
    )
}