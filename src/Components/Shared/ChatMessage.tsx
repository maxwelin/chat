import { useEffect, useState } from "react";
import getTimeStamp from "../../Functions/getTimeStamp";

interface ChatMessageProps {
  from: string;
  message: string;
  color?: string;
}

const ChatMessage = ({ from, message, color }: ChatMessageProps) => {
  const [timeStamp, setTimeStamp] = useState("");

  useEffect(() => {
    setTimeStamp(getTimeStamp());
  }, []);

  return (
    <p className="font-mono h-[32px]">
      <span className="text-gray-400">$</span>&nbsp;
      <span className="text-app-timestamp">{timeStamp}&nbsp;</span>
      <span className="text-text-primary">from/</span>
      <span className="text-app-name">{from}</span>
      <span className="text-text-primary">:</span>&nbsp;
      {color ? (
        <>
          <span className={`text-${color}`}>{message}</span>
        </>
      ) : (
        <>
          <span className="text-text-primary">{message}</span>
        </>
      )}
    </p>
  );
};
export default ChatMessage;
