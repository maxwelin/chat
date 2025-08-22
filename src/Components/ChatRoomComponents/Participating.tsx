import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import ChatMessage from "../Shared/ChatMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import LogMessage from "../Shared/LogMessage";

interface Participating {
  array: string[];
}

const components = [
  <ChatMessage from="room_404" message="loading active chatrooms..." key={22} />,
  <EmptyChatRow key={23} />,
  <EmptyChatRow key={24} />,
  <LogMessage message="chatrooms loaded" key={25} />,
  <ChatMessage
    from="room_404"
    message="click on a chatroom id to join"
    key={26}
  />,
];

const Participating = ({ array }: Participating) => {
  const [count, setCount] = useState(0);

  useStagger(count, setCount, components, 500);
  
  return (
    <>
      {components.slice(0, count)}
      {count === components.length && (
        <div className="border-t-2 border-dashed border-gray-600">
          {array.map((item, i) => (
            <div className="flex min-h-[32px] py-1">
              <span className="text-gray-400">
                <span>&gt;</span>
                <span className="text-app-name">&nbsp;room&nbsp;{i + 1}</span>
                :&nbsp;
              </span>
              <span key={i}>{item}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Participating;
