import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import ChatMessage from "../Shared/ChatMessage";
import { useChat } from "../../Hooks/useChat";

const ChatOutput = () => {
  const { latestMessage } = useChat();

  const components = [
    <ChatMessage from="cornelia" message="hej" key={0}/>,
    <ChatMessage from="max" message="hej" key={1}/>,
    <ChatMessage from="cornelia" message="hej" key={2}/>,
    <ChatMessage from="max" message="hej" key={3}/>,
    <ChatMessage from="cornelia" message="hej" key={4}/>,
    <ChatMessage from="max" message="hej" key={5}/>,
    <ChatMessage from="max" message={latestMessage} key={6}/>,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  return (
    <div className="flex flex-col w-lg max-h-76 py-1 border-t-2 border-r-2 border-b-2 border-dashed border-gray-600 overflow-auto no-scrollbar">
      {components.slice(0, count)}
    </div>
  );
};
export default ChatOutput;
