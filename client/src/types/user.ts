

export interface User {
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate: string;
    age: string;
    nationality: string;
    sex: string;
    phone: string;
    region: string;
    province: string;
    city: string;
    barangay: string;
    role: string;
    email: string;
    password: string;
    confirmPassword: string;
    
}

export interface Region {
    id: number;
    psgc_code: string;
    region_name: string;
    region_code: string;
  }

export interface Province {
    province_code: string;
    province_name: string;
    psgc_code: string;
    region_code: string;
  }

export   interface Municipality {
    city_code: string;
    city_name: string;
    province_code: string;
    psgc_code: string;
    region_desc: string;
  }

export   interface Barangay {
    brgy_code: string;
    brgy_name: string;
    city_code: string;
    province_code: string;
    region_code: string;
  }