import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import LogMessage from "../Shared/LogMessage";
import { useAuth } from "../../Hooks/useAuth";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";
import EmptyChatRow from "../Shared/EmptyChatRow";
import PrimaryButton from "../Shared/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useChat } from "../../Hooks/useChat";
import ProfilePath from "../Shared/ProfilePath";

const Chat = () => {
  const { decodedJwt } = useAuth();
  const { chatRoomId } = useChat();

  const { user } = decodedJwt;

  const navigate = useNavigate()

 const navigateToChatRooms = () => {
    navigate("/chatrooms");
  };
  const components = [
    <HomeBtn key={0} />,
<PrimaryButton key={8} type="button" fn={navigateToChatRooms} text="change chat room" />,
  
  <ProfilePath path="chat" key={1} />,
  <EmptyChatRow key={13}/>,

    <LogMessage message={user + " joined the chat room"} key={3} />,
      <h1 key={12} className=" py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-primary">room</span>/
      <span className="text-secondary">id</span>:&nbsp;
      <span className="text-text-primary">{chatRoomId}</span>
    </h1>,
    <EmptyChatRow key={11} />,
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
