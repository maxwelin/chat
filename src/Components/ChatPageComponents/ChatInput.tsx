import { useRef, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useChat } from "../../Hooks/useChat";

const ChatInput = () => {
  const { decodedJwt } = useAuth();
  const { sendMessage } = useChat();
  const { user, avatar } = decodedJwt;

  const [chatInput, setChatInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const send = () => {
    setChatInput("");
    sendMessage(chatInput);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13) send()
  }

  const inputRef = useRef(null);

  return (
    <>
      <div className="group py-1 flex justify-between border-b-2 border-dashed border-gray-600">
        <div className="flex">
          <label htmlFor="input" className="flex">
            <span className="text-gray-400 group-focus-within:text-secondary">
              $&nbsp;
            </span>{" "}
            <span className="text-app-color">user</span>/
            <span className="text-secondary">{user}</span>
             {avatar && <img
        className="h-[24px] w-[24px] rounded-full"
        src={avatar}
        alt="avatar"
        
      />}
          </label>
          {avatar && <>&nbsp;&nbsp;</>}&nbsp;:
          <input
            ref={inputRef}
            name="input"
            id="input"
            value={chatInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            type="text"
            autoComplete="off"
            placeholder="type your message here"
            className="px-2 text-gray-400 outline-none min-w-full"
          />
        </div>
        <button
          onClick={send}
          className="text-primary cursor-pointer w-10 transition-transform duration-30 focus:translate-x-3 hover:translate-x-3"
        >
          {" "}
          &gt;&gt;
        </button>
      </div>
    </>
  );
};
export default ChatInput;
