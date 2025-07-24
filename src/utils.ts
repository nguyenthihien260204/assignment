import { User, UserProfile } from './types';

// Task 5
export function createUser(userData: Partial<User>): User {
  return {
    id: Date.now(),
    username: userData.username ?? 'Anonymous',
    email: userData.email ?? 'no-email@example.com',
    isActive: userData.isActive ?? true,
    role: userData.role ?? 'user',
  };
}

// Task 6
export function formatUserInfo(user: User | UserProfile): string {
  if ('birthDate' in user) {
    return `User ${user.username} born on ${user.birthDate.toDateString()}`;
  } else {
    return `User ${user.username} (${user.role})`;
  }
}
