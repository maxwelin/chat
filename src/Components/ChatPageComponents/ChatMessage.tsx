import { useEffect, useState } from "react";
import type { ChatMessageProps } from "../../Models/ChatMessage.model";
import { loadingMessagePlaceholders } from "../../constants/loadingMessagePlaceholders";
import { deletingMessagePlaceholders } from "../../constants/deletingMessagePlaceholders";
import { useAuth } from "../../Hooks/useAuth";
import { useChat } from "../../Hooks/useChat";


const ChatMessage = ({ from, text, time, messageId }: ChatMessageProps) => {
  const { decodedJwt } = useAuth()
  const { deleteMessage } = useChat()
  const { user } = decodedJwt

  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [deleting, setDeleting] = useState(false)


  
  const timeArray = time.split('T')
  const date = timeArray[0].split("-")
  const timeStamp = timeArray[1].split(".")
  
  const removeMessage = () => {
    setDeleting(true)
    deleteMessage(messageId)
  }

  const rnd = Math.floor(Math.random() * 2000);
  
  useEffect(() => {
     const timer = setTimeout(() => {
      setShowMessage(true)
    }, rnd);
    
    return () => clearTimeout(timer);
  }, [])
  
 
  const loadingPlaceholder = loadingMessagePlaceholders[Math.floor(Math.random() * loadingMessagePlaceholders.length - 1)];
  const deletingPlaceholder = deletingMessagePlaceholders[Math.floor(Math.random() * deletingMessagePlaceholders.length - 1)];

  return (
    <>
    {deleting ? (<>
    <p className={`py-1 max-h-[32px] min-h-[32px] text-red-500 animate-pulse`}>{deletingPlaceholder}</p>
    </>) : (
      <>
    {showMessage ? 
    (<>
    <p className="py-1 flex relative">
      <span className="text-gray-400">&gt;</span>&nbsp;
      <span className="text-app-timestamp min-w-30 max-h-[32px]">{date[2]}/{date[1]} @ {timeStamp[0].slice(0, 5)}</span>
      {user === from ? (
        <>
        <button onClick={removeMessage} className="absolute left text-gray-400 cursor-pointer hover:text-red-500">&#x2716;</button>
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
    </>)}
    
    </>
  );
};
export default ChatMessage;
