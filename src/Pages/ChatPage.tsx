import { useState } from "react";
import Chat from "../Components/ChatPageComponents/Chat";
import { useChat } from "../Hooks/useChat";
import useStagger from "../Hooks/useStagger";
import HomeBtn from "../Components/Shared/HomeButton";
import PrimaryButton from "../Components/Shared/PrimaryButton";
import ProfilePath from "../Components/Shared/ProfilePath";
import EmptyChatRow from "../Components/Shared/EmptyChatRow";
import { useNavigate } from "react-router-dom";
import LogMessage from "../Components/Shared/LogMessage";

const ChatPage = () => {
  const { chatRoomId } = useChat()
  
   const navigate = useNavigate()

 const navigateToChatRooms = () => {
    navigate("/chatrooms");
  };

  const components = [
    <HomeBtn key={0}/>,
    <PrimaryButton key={1} type="button" fn={navigateToChatRooms} text="to chatrooms" />,
  
  <ProfilePath path="chat" key={2} />,
  <EmptyChatRow key={3}/>,
  <EmptyChatRow key={4}/>,
  <LogMessage message="no chatroom detected" key={5}/>,
  <LogMessage message="join a chatroom to chat" key={6}/>,
  ]
  
  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);
  if(chatRoomId) {
    return <Chat />
  } else {
    
      return (
        <div className="w-full flex place-content-center pt-10">
          <div className="flex flex-col w-lg ">{components.slice(0, count)}</div>
        </div>
      );
  }
}; 
export default ChatPage;
