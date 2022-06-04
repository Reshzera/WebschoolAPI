import { AccountEnum } from "./CreateAccountDTO";

export interface AccountFillters {
  email?: string;
  role?: AccountEnum;
}
