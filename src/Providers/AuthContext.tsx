// import * as Sentry from "@sentry/react";
import { createContext, useEffect, useState } from "react";
import type { AuthContextProps } from "../Models/AuthContext.model";
import type { ProviderProps } from "../Models/ProviderProps.model";
import type { RegisterBody } from "../Models/RegisterBody.model";
import type { LoginBody } from "../Models/LoginBody.model";
import type { JwtBody } from "../Models/JwtBody.model";
import { jwtDecode } from "jwt-decode";
import type { UpdatedData } from "../Models/UpdatedData.model";

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

  const deleteUser = async (userId: number) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_USERS_ENDPOINT}/${userId}`, {
        method: "DELETE",
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + localStorage.getItem("jwt")
        }})

      const result = await response.json();

      if (!response.ok) {
        const errorText = await response.text();
        setErrorMessage(errorText)
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      if(response.ok) {
        setSuccessMessage(result.message)
        setTimeout(() => {
          logout()
        }, 1000);
      }

      console.log(result);
      
      } catch (error) {
        console.error(error)
      }
  }  
  
  const updateUserInfo = async (userId: number, updatedData: UpdatedData) => {
    try {
      const response = await fetch(import.meta.env.VITE_USER_ENDPOINT, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({userId: userId, updatedData: updatedData})
      })

      const result = await response.json();

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      console.log(result);
      setSuccessMessage(result.message)
      setLocalStorage(result.token);
    } catch (error) {
      console.error(error)
    }
  }

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
    setLoggedIn(false) 
  };

  const setLocalStorage = (token: string) => {
    const decodedJwt = decodeJwt(token);
    setDecodedJwt(decodedJwt);
    localStorage.setItem("jwt", token);
    localStorage.setItem("decodedJwt", JSON.stringify(decodedJwt));
    localStorage.setItem("loggedIn", JSON.stringify(true));
  };

  const checkJwtExpiration = (token: JwtBody) => {
    if(token && isJwtExpired(token.exp)) {
      console.warn("Session expired, user logged out")
      logout()
    }
  } 
  
  const getLocalStorage = () => {
    const decoded = JSON.parse(localStorage.getItem("decodedJwt")!);
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")!);
    
   checkJwtExpiration(decoded)
    if (decoded && isLoggedIn) {
      setLoggedIn(isLoggedIn);
      setDecodedJwt(decoded);
    }
  };

  const isJwtExpired = (exp: number) => {
    const now = Math.floor(Date.now() / 1000)
    return now >= exp
  }

  const decodeJwt = (token: string) => {
    const decoded: JwtBody = jwtDecode(token);
    return decoded;
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
        // uncomment row below to enable monitoring of this error
        // Sentry.captureException(result.error)
        throw new Error(result.error || `Response status: ${response.status}`);
      }

        setLoggedIn(true);
        setLocalStorage(result.token);
      
    } catch (error) {
      console.error(error);
      // uncomment row below to enable monitoring of this error
      // Sentry.captureException(error)
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
        updateUserInfo,
        checkJwtExpiration,
        decodeJwt,
        deleteUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };
