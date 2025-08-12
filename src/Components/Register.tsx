import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import type { RegisterBody } from "../Models/RegisterBody.model";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        value={formData.username}
        onChange={handleUsernameChange}
        id="username"
        type="text"
        autoComplete="username"
        className="border rounded"
      />
      <label htmlFor="password">Password</label>
      <input
        value={formData.password}
        onChange={handlePasswordChange}
        id="password"
        type="password"
        autoComplete="current-password"
        className="border rounded"
      />
      <label htmlFor="password">Repeat password</label>
      <input
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
        id="repeat-password"
        type="password"
        autoComplete="current-password"
        className="border rounded"
      />
      <label htmlFor="email">Email</label>
      <input
        value={formData.email}
        onChange={handleEmailChange}
        id="email"
        type="email"
        autoComplete="email"
        className="border rounded"
      />
      <button type="submit" className="border rounded">
        Register{" "}
      </button>
      <Link to={"/login"} className="border rounded">
        Already registered? Login
      </Link>
    </form>
  );
};
export default Register;
