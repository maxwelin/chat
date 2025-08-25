import { useEffect, useState } from "react";
import type { ChatMessageProps } from "../../Models/ChatMessage.model";
import { messagePlaceholders } from "../../constants/MessagePlaceholders";
import { useAuth } from "../../Hooks/useAuth";


const ChatMessage = ({ from, text, time }: ChatMessageProps) => {
  const { decodedJwt } = useAuth()
  const { avatar, id } = decodedJwt

  const rnd = Math.floor(Math.random() * 2000);
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const timeArray = time.split('T')
  const date = timeArray[0].split("-")
  const timeStamp = timeArray[1].split(".")


  
  useEffect(() => {
     const timer = setTimeout(() => {
      setShowMessage(true)
    }, rnd);
    
    return () => clearTimeout(timer);
  }, [])
  
 
  const loadingPlaceholder = messagePlaceholders[Math.floor(Math.random() * messagePlaceholders.length - 1)];

  return (
    <>
    {showMessage ? 
    (<>
    <p className="py-1 flex">
      <span className="text-gray-400">&gt;</span>&nbsp;
      <span className="text-app-timestamp min-w-30 max-h-[32px]">{date[2]}/{date[1]} @ {timeStamp[0].slice(0, 5)}</span>
      {id === from ? (
        <>
<span className="text-app-name">YOU</span>
      </>
      ) : (
        <>
        <span className="text-app-color">from</span>/
<span className="text-secondary">{from}</span>
      </>
      )}
      {/* {avatar && <img
        className="h-[24px] w-[24px] rounded-full"
        src={avatar}
        alt="avatar"
      />} */}
      <span className="text-text-primary">:</span>&nbsp;
      <span>{text}</span>
    </p>
    </>) 
    : 
      (<>
      <p className={`py-1 max-h-[32px] min-h-[32px] text-green-500 animate-pulse`}>{loadingPlaceholder}</p>
      </>) }
    </>
  );
};
export default ChatMessage;
