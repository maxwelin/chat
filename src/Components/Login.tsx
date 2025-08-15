import { useEffect, useRef, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "./Shared/SecondaryButton";
import PrimaryButton from "./Shared/PrimaryButton";
import Title from "./Shared/Title";
import FormControl from "./Shared/FormControl";
import HomeBtn from "./Shared/HomeButton";
import MessageLogger from "./Shared/MessageLogger";
import EmptyChatRow from "./Shared/EmptyChatRow";
import ChatMessage from "./Shared/ChatMessage";
import useStagger from "../Hooks/useStagger";

const Login = () => {
  const { login, loggedIn, setErrorMessage } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage("");
  }, []);

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

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

  const usernameInputRef = useRef<HTMLInputElement>(null);

  const components = [
    <HomeBtn key={0} />,
    <Title title="login" key={1} />,
    <EmptyChatRow key={2} />,
    <ChatMessage from="room_404" message="login to continue" key={33} />,
    <EmptyChatRow key={4} />,
    <FormControl
      ref={usernameInputRef}
      type="text"
      id="username"
      value={username}
      fn={handeUsernameChange}
      label="login"
      placeholder="username"
      key={5}
    />,
    <FormControl
      type="password"
      id="password"
      value={password}
      fn={handlePasswordChange}
      placeholder="password"
      key={6}
    />,
    <EmptyChatRow key={7} />,
    <EmptyChatRow key={8} />,
    <EmptyChatRow key={9} />,
    <EmptyChatRow key={10} />,
    <PrimaryButton type="submit" formId="login-form" text="log in" key={11} />,

    <SecondaryButton
      text="no account?"
      cta=" sign up"
      to="/register"
      key={12}
    />,
    <MessageLogger key={13} />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  return (
    <div className="w-full flex place-content-center">
      <form
        onSubmit={handleSubmit}
        id="login-form"
        className="flex flex-col w-lg"
      >
        {components.slice(0, count)}
      </form>
    </div>
  );
};
export default Login;

{
  /* <label htmlFor="username">Username:</label>
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
/> */
}
