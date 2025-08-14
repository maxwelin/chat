import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import type { RegisterBody } from "../Models/RegisterBody.model";
import "../index.css";
import SecondaryButton from "./Shared/SecondaryButton";
import PrimaryButton from "./Shared/PrimaryButton";
import FormControl from "./Shared/FormControl";
import ErrorMessage from "./Shared/ErrorMessage";
import Title from "./Shared/Title";

const Register = () => {
  const { register, setErrorMessage, registered, setRegistered } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage("");
  }, []);

  const [repeatPassword, setRepeatPassword] = useState("");
  const [formData, setFormData] = useState<RegisterBody>({
    username: "",
    password: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== repeatPassword) {
      setErrorMessage("password does not match");
      return;
    }
    register({
      username: formData.username,
      password: formData.password,
      email: formData.email,
      avatar: "",
    });
    if (registered === true) {
      navigate("/login");
      setRegistered(false);
    }
  };

  const usernameInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full flex place-content-center">
      <form onSubmit={handleSubmit} className="flex flex-col h-80 w-1/4 ">
        <Title title="register" />
        <FormControl
          ref={usernameInputRef}
          type="text"
          id="username"
          value={formData.username}
          fn={handleUsernameChange}
          label="username"
        />
        <FormControl
          type="password"
          id="password"
          value={formData.password}
          fn={handlePasswordChange}
          label="password"
        />
        <FormControl
          type="password"
          id="repeatPassword"
          value={repeatPassword}
          fn={handleRepeatPasswordChange}
          label="password"
        />
        <FormControl
          type="email"
          id="email"
          value={formData.email}
          fn={handleEmailChange}
          label="email"
        />
        <ErrorMessage />

        <div className="mt-auto">
          <PrimaryButton type="submit" text="sign up" icon="→" />

          <SecondaryButton
            text="already signed up?"
            cta=" log in"
            to="/login"
          />
        </div>
      </form>
    </div>
  );
};
export default Register;
