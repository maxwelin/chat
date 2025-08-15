import { Link } from "react-router-dom";
import Button from "../Components/Shared/PrimaryButton";
import SecondaryButton from "../Components/Shared/SecondaryButton";
import Title from "../Components/Shared/Title";
import EmptyChatRow from "../Components/Shared/EmptyChatRow";
import ChatMessage from "../Components/Shared/ChatMessage";
import { useState } from "react";
import useStagger from "../Hooks/useStagger";

const SUB_HEADER = "log in to start chatting";

const HomePage = () => {
  const components = [
    <EmptyChatRow key={0} />,
    <Title title="home" key={1} />,
    <EmptyChatRow key={2} />,
    <ChatMessage
      from="room_404"
      message="user connected"
      color="green-500"
      key={3}
    />,
    <ChatMessage from="room_404" message="welcome" key={4} />,
    <EmptyChatRow key={5} />,
    <p className="py-1" key={6}>
      <span className="text-gray-500">$ {SUB_HEADER}</span>
    </p>,
    <EmptyChatRow key={7} />,
    <EmptyChatRow key={8} />,
    <EmptyChatRow key={9} />,
    <EmptyChatRow key={10} />,
    <Link to={"/login"} className="outline-0 " key={11}>
      <Button type="button" text="log in" icon="→" />
    </Link>,
    <SecondaryButton
      text="no account?"
      cta="sign up"
      to="/register"
      key={12}
    />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components, 500);

  return (
    <div className="w-full flex place-content-center pt-10">
      <div className="flex flex-col w-lg">{components.slice(0, count)}</div>
    </div>
  );
};
export default HomePage;
