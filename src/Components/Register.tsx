import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import type { RegisterBody } from "../Models/RegisterBody.model";
import "../index.css";
import SecondaryButton from "./Shared/SecondaryButton";
import PrimaryButton from "./Shared/PrimaryButton";

const Register = () => {
  const { register, registered } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterBody>({
    username: "",
    password: "",
    email: "",
    avatar: "",
  });

  const [repeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    if (registered === true) {
      navigate("/login");
    }
  }, [registered, navigate]);

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
      alert("FEL lösenORD!!!!!!!!");
      return;
    }
    register({
      username: formData.username,
      password: formData.password,
      email: formData.email,
      avatar: "",
    });
  };

  return (
    <div className="w-full flex place-content-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/4">
        <label htmlFor="username">Username:</label>
        <input
          required
          value={formData.username}
          onChange={handleUsernameChange}
          id="username"
          type="text"
          autoComplete="username"
          className="w-full border-2 border-dashed border-gray-500 px-2 py-1 placeholder-gray-500 focus:border-[#00e5ff] outline-none"
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          value={formData.password}
          onChange={handlePasswordChange}
          id="password"
          type="password"
          autoComplete="current-password"
          className="w-full border-2 border-dashed border-gray-500 px-2 py-1 placeholder-gray-500 focus:border-[#00e5ff] outline-none"
        />
        <label htmlFor="password">Repeat password:</label>
        <input
          required
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          id="repeat-password"
          type="password"
          autoComplete="current-password"
          className="w-full border-2 border-dashed border-gray-500 px-2 py-1 placeholder-gray-500 focus:border-[#00e5ff] outline-none"
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          value={formData.email}
          onChange={handleEmailChange}
          id="email"
          type="email"
          autoComplete="email"
          className="w-full border-2 border-dashed border-gray-500 px-2 py-1 placeholder-gray-500 focus:border-[#00e5ff] outline-none"
        />
        <PrimaryButton type="submit" text="sign up" icon="→" />

        <Link to={"/login"}>
          <SecondaryButton text="Already signed up?" cta=" Log in" />
        </Link>
      </form>
    </div>
  );
};
export default Register;
