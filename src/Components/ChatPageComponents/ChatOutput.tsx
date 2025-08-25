import { useEffect, useRef } from "react";
import { useChat } from "../../Hooks/useChat";
import ChatMessage from "./ChatMessage";
import AppMessage from "../Shared/AppMessage";

const ChatOutput = () => {
  const { getMessages, messages, loadingMessages } = useChat();

useEffect(() => {
  getMessages()
  setTimeout(() => {
    const container = containerRef.current!;
    container.scrollTop = container.scrollHeight;
  }, 1500);
  const intervalId = setInterval(() => {
    getMessages()
  }, 5000)

  return () => clearInterval(intervalId)
}, [])


useEffect(() => {
    const container = containerRef.current;

    if (messages.length > prevMessagesLength.current && container) {
      container.scrollTop = container.scrollHeight;
    }

    prevMessagesLength.current = messages.length;
  }, [messages]);
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevMessagesLength = useRef<number>(0);
  
  return (
    <div ref={containerRef} className="flex max-h-176 flex-col w-lg py-1 border-t-2 border-r-2 border-b-2 border-dashed border-gray-600 overflow-auto no-scrollbar">
      {loadingMessages ? (<>
           <>
        <AppMessage from="room_404" message="loading messages..." />
      </>
      </>) : (<>
          {messages.map((message) => (
            <ChatMessage key={message.id} from={message.userId} text={message.text} time={message.createdAt} />
            
          ))}
      </>)}
      {messages.length === 0 && <AppMessage from="room_404" message="invite accepted, type a message to start a conversation" />}
    </div>
  );
};
export default ChatOutput;
