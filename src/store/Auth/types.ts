export interface User {
    name: string;
    email: string;
    phone_number: string;
    email_verified: boolean;
    status: string;
    national_id: string;
    country_id: number | null;
  }
export interface LoginResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null
}

export interface LoginPayload
 { email: string; password: string }

 export interface RegisterForm {
  email: string;
  name: string;
  gender: string;
  city_id: string;
  national_id: string;
  birth_date: Date | string; 
  phone_number: string;
  password: string;
  password_confirmation: string;
  acceptTerms: boolean;
}

