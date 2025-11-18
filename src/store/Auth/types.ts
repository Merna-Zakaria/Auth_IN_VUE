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
  loading: boolean
  error: string | null
}
