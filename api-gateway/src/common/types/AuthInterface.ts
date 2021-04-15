export interface SignupInterface {
  name: string;
  email: string;
  password: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface AuthResponseInterface {
  user: UserInterface;
  accessToken: string;
}
