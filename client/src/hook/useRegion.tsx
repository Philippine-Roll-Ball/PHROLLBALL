import { useState, useEffect } from "react";
import { regions, provinces, cities, barangays } from "select-philippines-address";
import { Region, Province, Municipality, Barangay } from "@/types/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAddress = (setFormData: any) => {
    const [regionList, setRegionList] = useState<Region[]>([]);
    const [provinceList, setProvinceList] = useState<Province[]>([]);
    const [cityList, setCityList] = useState<Municipality[]>([]);
    const [barangayList, setBarangayList] = useState<Barangay[]>([]);
    
    useEffect(() => {
        regions().then((res) => setRegionList(res));
    }, []);

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const code = e.target.value;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormData((prev: any) => ({...prev, region: code, province: "", city: "", barangay: ""}));
        provinces(code).then((res) => setProvinceList(res));
        setCityList([]);
        setBarangayList([]);

    };

    const handleProvinceChange =(e: React.ChangeEvent<HTMLSelectElement>) => {
        const code = e.target.value;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormData((prev: any) => ({...prev, province: code, city: "", barangay: ""}));
        cities(code).then((res) => setCityList(res));
        setBarangayList([]);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const code = e.target.value;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormData((prev: any) => ({...prev, city: code, barangay: ""}));
        barangays(code).then((res) => setBarangayList(res));
    };

    return {
        regionList, provinceList, cityList, barangayList,
        handleRegionChange, handleProvinceChange, handleCityChange
    }
    

}
