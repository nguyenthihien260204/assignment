// Task 1
export interface User {
  readonly id: number;
  username: string;
  email: string;
  isActive?: boolean;
  role: 'admin' | 'user' | 'guest';
}

// Task 2
export type UserProfile = User & {
  birthDate: Date;
  address?: string;
};
