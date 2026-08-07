import { User } from "@/types/user";

export const usePersonalDetails = (setFormData: React.Dispatch<React.SetStateAction<User>>) => {
  
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age > 0 ? age.toString() : "0";
  };

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const age = calculateAge(date);
    
    // Update both birthDate and age simultaneously
    setFormData((prev) => ({
      ...prev,
      birthDate: date,
      age: age,
    }));
  };

  return { handleBirthDateChange };
};