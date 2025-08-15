import EmptyChatRow from "./Shared/EmptyChatRow";
import useStagger from "../Hooks/useStagger";
import ChatMessage from "./Shared/ChatMessage";
import { useAuth } from "../Hooks/useAuth";
import { useState } from "react";
import PrimaryButton from "./Shared/PrimaryButton";
import SideNav from "./SideNav/SideNav";
import LogMessage from "./Shared/LogMessage";

const Chat = () => {
  const { decodedJwt } = useAuth();

  const [navVisibility, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!navVisibility);
  };

  const { user } = decodedJwt;
  const components = [
    <EmptyChatRow key={0} />,

    <h1 key={1} className="w-1/2 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-app-name">room_404</span>/
      <span className="text-secondary">{user}</span>/
      <span className="text-primary">home</span>
    </h1>,
    <EmptyChatRow key={2} />,
    <LogMessage message={user + " connected"} />,
    <ChatMessage from="room_404" message={`welcome ${user}`} key={4} />,

    <EmptyChatRow key={5} />,
    <EmptyChatRow key={6} />,
    <EmptyChatRow key={7} />,
    <EmptyChatRow key={8} />,
    <PrimaryButton key={9} type="button" fn={toggleNav} text="settings" />,
    <SideNav key={10} navVisibility={navVisibility} />,
  ];

  const [count, setCount] = useState(0);
  useStagger(count, setCount, components);
  return <>{components.slice(0, count)}</>;
};
export default Chat;
