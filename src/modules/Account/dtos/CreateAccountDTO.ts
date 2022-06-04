export enum AccountEnum {
  ADMIN = "ROLE_ADMIN",
  STUDENT = "ROLE_STUDENT",
  TEACHER = "ROLE_TEACHER"
}

export interface CreateAccountDTO {
  email: string;
  password: string;
  role: AccountEnum;
}
