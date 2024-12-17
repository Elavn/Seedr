import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface AuthContextType {
  loggedInUser: any;
  setLoggedInUser: Dispatch<SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextType>({
  loggedInUser: null,
  setLoggedInUser: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};