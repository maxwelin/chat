import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import { useChat } from "../../Hooks/useChat";
import Participating from "./Participating";

const ChatRoom = () => {
  const { conversations } = useChat();

  const participating = Array.from(conversations.participating);
  const invitesReceived = Array.from(conversations.invitesReceived);
  const invitesSent = Array.from(conversations.invitesSent);

  const [count, setCount] = useState(0);
  useStagger(count, setCount, participating);
  return (
    <div className="w-full flex place-content-center pt-10">
      <div className="flex flex-col w-lg ">
        {participating.length > 0 && (
          <div className="flex flex-col w-lg ">
            <Participating array={participating} />
          </div>
        )}
        {invitesReceived.length > 0 && (
          <div className="flex flex-col w-lg ">
            {invitesReceived.slice(0, count)}
          </div>
        )}
        {invitesReceived.length > 0 && (
          <div className="flex flex-col w-lg ">
            {invitesSent.slice(0, count)}
          </div>
        )}
      </div>
    </div>
  );
};
export default ChatRoom;
