export interface User {
  username: string;
  role: 'user' | 'admin' | '';
  password: string;
}
