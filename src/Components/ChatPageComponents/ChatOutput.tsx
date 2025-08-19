import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import ChatMessage from "../Shared/ChatMessage";
import { useChat } from "../../Hooks/useChat";

const ChatOutput = () => {
  const { latestMessage } = useChat();

  const components = [
    <ChatMessage from="cornelia" message="hej" />,
    <ChatMessage from="max" message="hej" />,
    <ChatMessage from="cornelia" message="hej" />,
    <ChatMessage from="max" message="hej" />,
    <ChatMessage from="cornelia" message="hej" />,
    <ChatMessage from="max" message="hej" />,
    <ChatMessage from="max" message={latestMessage} />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  return (
    <div className="flex flex-col w-lg max-h-76 py-1 border-t-2 border-r-2 border-dashed border-gray-600 overflow-auto no-scrollbar">
      {components.slice(0, count)}
    </div>
  );
};
export default ChatOutput;
