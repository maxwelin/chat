import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import LogMessage from "../Shared/LogMessage";
import { useAuth } from "../../Hooks/useAuth";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";
import EmptyChatRow from "../Shared/EmptyChatRow";

const Chat = () => {
  const { decodedJwt } = useAuth();

  const { user } = decodedJwt;

  const components = [
    <HomeBtn key={0} />,
    <h1 key={1} className="w-2/3 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-app-name">app</span>/
      <span className="text-secondary">{user}</span>/
      <span className="text-primary">chat</span>/
    </h1>,

    <LogMessage message={user + " joined the room"} key={3} />,
    <EmptyChatRow key={4} />,
    <ChatOutput key={5} />,
    <EmptyChatRow key={6} />,
    <ChatInput key={7} />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  return (
    <div className="w-full flex place-content-center pt-10">
      <div className="flex flex-col w-lg ">{components.slice(0, count)}</div>
    </div>
  );
};
export default Chat;
