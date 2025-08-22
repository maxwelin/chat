import { useState } from "react";
import useStagger from "../../Hooks/useStagger"
import LogMessage from "../Shared/LogMessage"
import EmptyChatRow from "../Shared/EmptyChatRow";

const ChatRoomStatusMessages = () => {
    const components = [
        <LogMessage message="loading chatrooms..." key={0}/>,
        <EmptyChatRow key={1}/>,
        <EmptyChatRow key={2}/>,
        <LogMessage message="no active chatrooms detected" key={3}/>,
        <LogMessage message="no invites detected" key={4}/>,
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