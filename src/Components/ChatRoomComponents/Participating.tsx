import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import ChatMessage from "../Shared/ChatMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import HomeBtn from "../Shared/HomeButton";
import Title from "../Shared/Title";
import LogMessage from "../Shared/LogMessage";

interface Participating {
  array: string[];
}

const components = [
  <HomeBtn key={0} />,
  <Title title="chatrooms" key={1} />,
  <ChatMessage from="room_404" message="loading active chatrooms" key={2} />,
  <EmptyChatRow key={3} />,
  <EmptyChatRow key={4} />,
  <LogMessage message="chatrooms loaded" key={5} />,
  <ChatMessage
    from="room_404"
    message="click on a chatroom id to join"
    key={6}
  />,
];

const Participating = ({ array }: Participating) => {
  const [count, setCount] = useState(0);

  useStagger(count, setCount, components, 500);
  return (
    <>
      {components.slice(0, count)}
      {count === components.length && (
        <div className="w-2/3 border-t-2 border-dashed border-gray-600">
          {array.map((item, i) => (
            <div className="flex min-h-[32px] py-1">
              <span className="text-gray-400">
                <span>&gt;</span>
                <span className="text-secondary">&nbsp;room&nbsp;{i + 1}</span>
                :&nbsp;
              </span>
              <span key={i + components.length}>{item}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Participating;
