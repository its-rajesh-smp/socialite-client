export interface IAuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  agreeToTerms?: boolean;
  rememberUser?: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}
