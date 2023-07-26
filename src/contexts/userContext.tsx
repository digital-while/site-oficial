import { createContext, useState } from "react";
import { iProviderProps, iUserContext } from "../interfaces/contexts";
import { client } from "../Model/model";

export const UserContext = createContext({} as iUserContext);

function UserProvider({ children }: iProviderProps) {
  const [userInfo, setUserInfo] = useState(client); //Futuramente trocar para uma requisição na API

  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
