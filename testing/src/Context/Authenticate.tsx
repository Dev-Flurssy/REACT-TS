import React, { createContext, useState, type ReactNode } from "react";

interface Ilog {
  login: boolean;
  setLogin: (logged: boolean) => void;
}
export const CheckLog = createContext<Ilog>({
  login: false,
  setLogin: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <CheckLog.Provider value={{ login: isLogged, setLogin: setIsLogged }}>
      {children}
    </CheckLog.Provider>
  );
};
/**
 * function LoginButton() {
   const { login, setLogin } = useContext(CheckLog);
 
   return (
     <button onClick={() => setLogin(!login)}>
       {login ? "Logout" : "Login"}
     </button>
   );
 }
   <AuthProvider>
           <LoginButton></LoginButton>
         </AuthProvider>
 */
