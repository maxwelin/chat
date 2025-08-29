import { Link } from "react-router-dom";
import Button from "../Components/Shared/PrimaryButton";
import SecondaryButton from "../Components/Shared/SecondaryButton";
import Title from "../Components/Shared/Title";
import EmptyChatRow from "../Components/Shared/EmptyChatRow";
import AppMessage from "../Components/Shared/AppMessage";
import { useState } from "react";
import useStagger from "../Hooks/useStagger";
import LogMessage from "../Components/Shared/LogMessage";

const HomePage = () => {
  const components = [
    <EmptyChatRow key={0} />,
    <Title title="home" key={1} />,
    <LogMessage key={2} message="user connected" />,
    <EmptyChatRow key={3} />,
    <EmptyChatRow key={4} />,
    <AppMessage from="room_404" message="welcome" key={5} />,
    <AppMessage from="room_404" message="log in to start chatting" key={6} />,
    <EmptyChatRow key={7} />,
    <EmptyChatRow key={8} />,
    <Link to={"/login"} className="outline-0 " key={9}>
      <Button type="button" text="log in" />
    </Link>,
    <SecondaryButton
      text="no account?"
      cta="sign up"
      to="/register"
      key={10}
    />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  // const isLast = components.length === count;

  return (
    <div className="w-full flex place-content-center pt-10">
      <div className="flex flex-col w-lg ">{components.slice(0, count)}</div>
    </div>
  );
};
export default HomePage;
