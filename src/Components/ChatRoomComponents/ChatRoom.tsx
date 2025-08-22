import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import { useChat } from "../../Hooks/useChat";
import Participating from "./Participating";
import HomeBtn from "../Shared/HomeButton";
import ProfilePath from "../Shared/ProfilePath";
import Invites from "./Invites";
import ChatRoomStatusMessages from "./ChatRoomStatusMessages";

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
        <HomeBtn />
        <ProfilePath path="chatrooms" />
        {participating.length > 0 && (
          <div className="flex flex-col w-lg ">
            <Participating array={participating} />
          </div>
        )}
        {invitesReceived.length > 0 && (
          <div className="flex flex-col w-lg ">
            <Invites array={invitesReceived} status="invites recieved" delay={1500}/>
          </div>
        )}
        {invitesSent.length > 0 && (
          <div className="flex flex-col w-lg ">
            <Invites array={invitesSent} status="invites sent" delay={2500}/>
          </div>
        )}
        {participating.length === 0 &&  invitesReceived.length === 0 && invitesSent.length === 0 && 
          <ChatRoomStatusMessages />
        
        }
      </div>
    </div>
  );
};
export default ChatRoom;
