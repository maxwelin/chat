import { createContext, useEffect, useState } from "react";
import type { AuthContextProps } from "../Models/AuthContext.model";
import type { ProviderProps } from "../Models/ProviderProps.model";
import type { RegisterBody } from "../Models/RegisterBody.model";
import type { LoginBody } from "../Models/LoginBody.model";
import type { JwtBody } from "../Models/JwtBody.model";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [decodedJwt, setDecodedJwt] = useState<JwtBody>({
    avatar: "",
    email: "",
    exp: 0,
    iat: 0,
    id: 0,
    invite: null,
    user: "",
  });

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_CSRF_ENDPOINT, {
        method: "PATCH",
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Response status: ${response.status}`);
      }

      setCsrfToken(result.csrfToken);
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (body: RegisterBody) => {
    try {
      const response = await fetch(import.meta.env.VITE_REGISTER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...body, csrfToken: csrfToken }),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error);

        throw new Error(result.error || `Response status: ${response.status}`);
      }
      setSuccessMessage(result.message);
      setRegistered(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setLoggedIn(false);
  };

  const setLocalStorage = (token: string) => {
    const decodedJwt = decodeJwt(token);
    setDecodedJwt(decodedJwt);
    localStorage.setItem("jwt", token);
    localStorage.setItem("decodedJwt", JSON.stringify(decodedJwt));
    localStorage.setItem("loggedIn", JSON.stringify(true));
  };

  const getLocalStorage = () => {
    const token = JSON.parse(localStorage.getItem("decodedJwt")!);
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")!);

    if (token && isLoggedIn) {
      setLoggedIn(isLoggedIn);
      setDecodedJwt(token);
    }
  };

  const decodeJwt = (token: string) => {
    return JSON.parse(atob(token.split(".")[1]));
  };

  const login = async (body: LoginBody) => {
    try {
      const response = await fetch(import.meta.env.VITE_LOGIN_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...body, csrfToken: csrfToken }),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error);

        throw new Error(result.error || `Response status: ${response.status}`);
      }

      setLoggedIn(true);
      setLocalStorage(result.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        csrfToken,
        setCsrfToken,
        fetchCsrfToken,
        register,
        login,
        loggedIn,
        setLoggedIn,
        registered,
        setRegistered,
        logout,
        errorMessage,
        setErrorMessage,
        successMessage,
        setSuccessMessage,
        decodedJwt,
        setDecodedJwt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };
