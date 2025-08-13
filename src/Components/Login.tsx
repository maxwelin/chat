import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "./Shared/SecondaryButton";
import PrimaryButton from "./Shared/PrimaryButton";

const Login = () => {
  const { login, loggedIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn === true) {
      navigate("/chat");
    }
  }, [loggedIn, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      username: username,
      password: password,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handeUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="w-full flex place-content-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/4">
        <label htmlFor="username">Username:</label>
        <input
          required
          value={username}
          onChange={handeUsernameChange}
          id="username"
          type="text"
          autoComplete="username"
          className="w-full border-2 border-dashed border-gray-500 px-2 py-1 placeholder-gray-500 focus:border-secondary outline-none"
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          value={password}
          onChange={handlePasswordChange}
          id="password"
          type="password"
          autoComplete="current-password"
          className="w-full border-2 border-dashed border-gray-500 px-2 py-1 placeholder-gray-500 focus:border-secondary outline-none"
        />
        <PrimaryButton type="submit" text="log in" icon="→" />
        <SecondaryButton text="no account?" cta=" sign up" to="/register" />
      </form>
    </div>
  );
};
export default Login;
