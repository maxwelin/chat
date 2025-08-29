import { useState } from "react";
import useStagger from "../../Hooks/useStagger"
import LogMessage from "../Shared/LogMessage"
import EmptyChatRow from "../Shared/EmptyChatRow";
import PrimaryButton from "../Shared/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useChat } from "../../Hooks/useChat";

const ChatRoomStatusMessages = () => {
  const { setChatRoomId } = useChat()
  const navigate = useNavigate()

  const createChatRoom = () => {
    const Uuid = crypto.randomUUID()
    setChatRoomId(Uuid)
    navigate("/chat")
  }

  
    const components = [
        <LogMessage message="loading chatrooms..." key={0}/>,
        <EmptyChatRow key={1}/>,
        <EmptyChatRow key={2}/>,
        <LogMessage message="no active chatrooms detected" key={3}/>,
        <LogMessage message="no invites detected" key={4}/>,
        <EmptyChatRow key={5}/>,
        <EmptyChatRow key={6}/>,
        <PrimaryButton key={7} type="button" fn={createChatRoom} text="create a chatroom" />,
    ]
   const [count, setCount] = useState(0);
     useStagger(count, setCount, components, 600);
  return (
    <>
    {components.slice(0, count)}
    </>
  )
}

export default ChatRoomStatusMessages