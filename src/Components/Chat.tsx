import { useEffect, useState } from "react";
import getTimeStamp from "../Functions/getTimeStamp";
import { useAuth } from "../Hooks/useAuth";
import EmptyChatRow from "./Shared/EmptyChatRow";
import HomeBtn from "./Shared/HomeButton";
import PrimaryButton from "./Shared/PrimaryButton";
import useStagger from "../Hooks/useStagger";
import ChatMessage from "./Shared/ChatMessage";

const Chat = () => {
  const { logout, decodedJwt } = useAuth();
  const [timeStamp, setTimeStamp] = useState("");

  useEffect(() => {
    setTimeStamp(getTimeStamp());
  }, []);

  const { user } = decodedJwt;

  const handleLogOut = () => {
    logout();
  };

  const components = [
    <HomeBtn key={0} />,

    <h1 key={1} className="w-1/2 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-500">$</span>{" "}
      <span className="text-app-name">room_404</span>/
      <span className="text-[#ff0080]">users</span>/
      <span className="text-primary">{user}</span>
    </h1>,
    <EmptyChatRow key={2} />,
    <ChatMessage
      from="room_404"
      message={`${user} connected`}
      color="green-500"
      key={3}
    />,
    <h1 key={4}>
      <span className="text-[#aa88ff] py-1 ">
        <span className="text-gray-500">$</span>
        &nbsp;{timeStamp}
        <span className="text-text-primary"> welcome {user}</span>
      </span>
    </h1>,
    <EmptyChatRow key={5} />,

    <PrimaryButton
      type="button"
      fn={handleLogOut}
      text="log out"
      icon="→"
      key={6}
    />,
  ];

  const [count, setCount] = useState(0);
  useStagger(count, setCount, components);
  return <>{components.slice(0, count)}</>;
};
export default Chat;
