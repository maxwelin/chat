import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import type { RegisterBody } from "../../Models/RegisterBody.model";
import "../../index.css";
import SecondaryButton from "../Shared/SecondaryButton";
import PrimaryButton from "../Shared/PrimaryButton";
import FormControl from "../Shared/FormControl";
import Title from "../Shared/Title";
import HomeBtn from "../Shared/HomeButton";
import MessageLogger from "../Shared/MessageLogger";
import EmptyChatRow from "../Shared/EmptyChatRow";
import AppMessage from "../Shared/AppMessage";
import useStagger from "../../Hooks/useStagger";
import Url from "../Shared/Url";

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
      setTimeout(() => {
        navigate("/login");
        setRegistered(false);
      }, 1250);
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

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, avatar: e.target.value });
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
      avatar: formData.avatar,
    });
  };
  const usernameInputRef = useRef<HTMLInputElement>(null);

  const components = [
    <HomeBtn key={0} />,
    <Title title="register" key={1} />,
    <AppMessage from="room_404" message="enter your information" key={2} />,
       <AppMessage
      from="room_404"
      message="valid avatar domain names:"
      key={3}
    />,
    <Url url="https://i.pravatar.cc" key={15}/>,
    <Url url="https://freeimage.host" key={16}/>,
    <Url url="https://iili.io" key={17}/>,
    <Url url="https://api.dicebear.com" key={18}/>,
    <EmptyChatRow key={9} />,
    <EmptyChatRow key={4} />,
    <FormControl
      ref={usernameInputRef}
      type="text"
      id="username"
      required={true}
      value={formData.username}
      fn={handleUsernameChange}
      label="register"
      placeholder="username"
      key={5}
    />,
    <FormControl
      type="avatar"
      id="avatar"
      value={formData.avatar}
      fn={handleAvatarChange}
      placeholder="avatar (optional)"
      key={14}
    />,
    <FormControl
      type="email"
      id="email"
      required={true}
      value={formData.email}
      fn={handleEmailChange}
      placeholder="email"
      key={8}
    />,
    <FormControl
      type="password"
      id="password"
      required={true}
      value={formData.password}
      fn={handlePasswordChange}
      placeholder="password"
      key={6}
    />,
    <FormControl
      type="password"
        id="repeatPassword"
      required={true}
      value={repeatPassword}
      fn={handleRepeatPasswordChange}
      placeholder="repeat password"
      key={7}
    />,
    <EmptyChatRow key={10} />,
    <EmptyChatRow key={22} />,
    <PrimaryButton type="submit" text="sign up" key={11} />,
    <SecondaryButton
      text="already signed up?"
      cta=" log in"
      to="/login"
      key={12}
    />,
    <MessageLogger key={13} />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  return (
    <div className="w-full flex place-content-center ">
      <form onSubmit={handleSubmit} className="flex flex-col w-lg">
        {components.slice(0, count)}
      </form>
    </div>
  );
};
export default Register;
