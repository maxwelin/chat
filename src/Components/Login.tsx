import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        value={username}
        onChange={handeUsernameChange}
        id="username"
        type="text"
        autoComplete="username"
        className="border rounded"
      />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={handlePasswordChange}
        id="password"
        type="password"
        autoComplete="current-password"
        className="border rounded"
      />
      <button type="submit" className="border rounded">
        Login
      </button>
      <Link to={"/register"} className="border rounded">
        No account? Register
      </Link>
    </form>
  );
};
export default Login;
