import { createContext, useState } from "react";
import { iProviderProps, iUserContext } from "../interfaces/contexts";
import { client } from "../Model/model";
import { iUser } from "../interfaces/user";

export const UserContext = createContext<iUserContext>({} as iUserContext);

function UserProvider({ children }: iProviderProps) {
  const [userInfo, setUserInfo] = useState(client); //Futuramente trocar para uma requisição na API

  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
