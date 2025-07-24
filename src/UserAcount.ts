import { User } from './types';

// Task 3
export class UserAccount implements User {
  readonly id: number;
  public username: string;
  public email: string;
  public isActive?: boolean;
  public role: 'admin' | 'user' | 'guest';
  private password: string;

  constructor(
    username: string,
    email: string,
    role: 'admin' | 'user' | 'guest' = 'user',
    password: string,
    isActive: boolean = true
  ) {
    this.id = Date.now();
    this.username = username;
    this.email = email;
    this.role = role;
    this.password = password;
    this.isActive = isActive;
  }

  validatePassword(): boolean {
    return this.password.length >= 8;
  }
}

// Task 4
export class AdminUser extends UserAccount {
  public permissions: string[];

  constructor(
    username: string,
    email: string,
    password: string,
    permissions: string[]
  ) {
    super(username, email, 'admin', password);
    this.permissions = permissions;
  }

  override validatePassword(): boolean {
    return super.validatePassword() && this['password'].length >= 12;
  }
}
