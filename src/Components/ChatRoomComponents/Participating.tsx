import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import AppMessage from "../Shared/AppMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import LogMessage from "../Shared/LogMessage";
import { useChat } from "../../Hooks/useChat";
import { useNavigate } from "react-router-dom";

interface Participating {
  array: string[];
}

const components = [
  <AppMessage from="room_404" message="loading active chatrooms..." key={0} />,
  <EmptyChatRow key={1} />,
  <EmptyChatRow key={2} />,
  <LogMessage message="chatrooms loaded" key={3} />,
  <LogMessage
    message="click on a chatroom id to join"
    key={4}
  />,
]

const Participating = ({ array }: Participating) => {

  const { setChatRoomId, setLoadingMessages } = useChat()
  const navigate = useNavigate()

  
  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);
  
  return (
    <>
      {components.slice(0, count)}
      {count === components.length && (
        <div className="border-t-2 border-dashed border-gray-600">
          {array.map((id, i) => (
            <button key={id} onClick={() => {
              setChatRoomId(id);
              navigate("/chat");
              setLoadingMessages(true)
              }}
              className="flex min-h-[32px] py-1 cursor-pointer">
              <span className="text-gray-400">
                <span>&gt;</span>
                <span className="text-secondary">&nbsp;room&nbsp;{i + 1}</span>
                :&nbsp;
              </span>
              <span >{id}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};
export default Participating;
