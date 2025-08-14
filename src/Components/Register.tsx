import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import type { RegisterBody } from "../Models/RegisterBody.model";
import "../index.css";
import SecondaryButton from "./Shared/SecondaryButton";
import PrimaryButton from "./Shared/PrimaryButton";
import FormControl from "./Shared/FormControl";
import Title from "./Shared/Title";
import HomeBtn from "./Shared/HomeButton";
import MessageLogger from "./Shared/MessageLogger";
import EmptyChatRow from "./Shared/EmptyChatRow";
import ChatMessage from "./Shared/ChatMessage";

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

  useEffect(() => {
    if (registered === true) {
      navigate("/login");
      setRegistered(false);
    }
  }, [registered, navigate, setRegistered]);

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
  };

  const usernameInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full flex place-content-center ">
      <form onSubmit={handleSubmit} className="flex flex-col w-lg">
        <HomeBtn />
        <Title title="register" />
        <EmptyChatRow />
        <ChatMessage from="room_404" message="enter your information" />
        <EmptyChatRow />
        <FormControl
          ref={usernameInputRef}
          type="text"
          id="username"
          value={formData.username}
          fn={handleUsernameChange}
          label="register"
          placeholder="username"
        />
        <FormControl
          type="password"
          id="password"
          value={formData.password}
          fn={handlePasswordChange}
          placeholder="password"
        />
        <FormControl
          type="password"
          id="repeatPassword"
          value={repeatPassword}
          fn={handleRepeatPasswordChange}
          placeholder="password"
        />
        <FormControl
          type="email"
          id="email"
          value={formData.email}
          fn={handleEmailChange}
          placeholder="email"
        />
        <EmptyChatRow />
        <EmptyChatRow />
        <PrimaryButton type="submit" text="sign up" icon="→" />
        <SecondaryButton text="already signed up?" cta=" log in" to="/login" />
        <MessageLogger />
      </form>
    </div>
  );
};
export default Register;
