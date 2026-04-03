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
        const name = e.target.value;
        const selectedOption = e.target.options[e.target.selectedIndex];
        const code = selectedOption.dataset.code || "";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormData((prev: any) => ({...prev, region: name, province: "", city: "", barangay: ""}));
        provinces(code).then((res) => setProvinceList(res));
        setCityList([]);
        setBarangayList([]);

    };

    const handleProvinceChange =(e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.value;
        const selectedOption = e.target.options[e.target.selectedIndex];
        const code = selectedOption.dataset.code || "";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormData((prev: any) => ({...prev, province: name, city: "", barangay: ""}));
        cities(code).then((res) => setCityList(res));
        setBarangayList([]);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.value;
        const selectedOption = e.target.options[e.target.selectedIndex];
        const code = selectedOption.dataset.code || "";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormData((prev: any) => ({...prev, city: name, barangay: ""}));
        barangays(code).then((res) => setBarangayList(res));
    };

    return {
        regionList, provinceList, cityList, barangayList,
        handleRegionChange, handleProvinceChange, handleCityChange
    }
    

}
