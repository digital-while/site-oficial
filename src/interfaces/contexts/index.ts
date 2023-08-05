import { iUser } from "../user";

export interface iProviderProps {
  children: React.ReactNode;
}

export interface iUserContext {
  userInfo: iUser;
}
