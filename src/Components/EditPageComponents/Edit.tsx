import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import { useAuth } from "../../Hooks/useAuth";
import ChatMessage from "../Shared/ChatMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";

const Edit = () => {
  const { decodedJwt } = useAuth();
  const { user } = decodedJwt;

  const components = [
    <HomeBtn key={0} />,
    <h1 key={2} className="w-2/3 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-secondary">{user}</span>/
      <span className="text-primary">settings</span>/
      <span className="text-app-name">edit</span>
    </h1>,
    <ChatMessage
      from="room_404"
      message="enter the information you wish to update"
      key={3}
    />,
    <EmptyChatRow key={4} />,
    <EmptyChatRow key={5} />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  return (
    <div className="w-full flex place-content-center pt-10">
      <form className="flex flex-col w-lg ">{components.slice(0, count)}</form>
    </div>
  );
};
export default Edit;
