import type { JwtBody } from "./JwtBody.model";
import type { LoginBody } from "./LoginBody.model";
import type { RegisterBody } from "./RegisterBody.model";

export interface AuthContextProps {
  csrfToken: string;
  setCsrfToken: React.Dispatch<React.SetStateAction<string>>;
  fetchCsrfToken: () => Promise<void>;
  register: (body: RegisterBody) => Promise<void>;
  login: (body: LoginBody) => Promise<void>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  registered: boolean;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  successMessage: string;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
  decodedJwt: JwtBody;
  setDecodedJwt: React.Dispatch<React.SetStateAction<JwtBody>>;
}
