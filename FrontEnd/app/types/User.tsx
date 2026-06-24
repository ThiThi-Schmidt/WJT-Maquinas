export type UserRole = "ADMIN" | "CLIENT";

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt?: string;
};

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};