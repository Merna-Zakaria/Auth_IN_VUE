export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  password?: string;
  token?: string;
}
export interface UserState {
  user?: User;
  users?: Array<User>;
}
