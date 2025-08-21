import { useRef, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useChat } from "../../Hooks/useChat";

const ChatInput = () => {
  const { decodedJwt } = useAuth();
  const { sendMessage } = useChat();
  const { user } = decodedJwt;

  const [chatInput, setChatInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const send = () => {
    setChatInput("");
    // const uuid = self.crypto.randomUUID();
    // console.log(uuid);
    sendMessage(chatInput);
  };

  const inputRef = useRef(null);

  return (
    <>
      <div className="group py-1 flex justify-between">
        <div className="flex">
          <label htmlFor="input" className="flex">
            <span className="text-gray-400 group-focus-within:text-secondary">
              $&nbsp;
            </span>{" "}
            <span className="text-app-color">user</span>/
            <span className="text-secondary">{user}</span>
          </label>
          :
          <input
            ref={inputRef}
            name="input"
            id="input"
            value={chatInput}
            onChange={handleInputChange}
            type="text"
            autoComplete="off"
            placeholder=" type here to chat"
            className="px-2 text-gray-400 outline-none min-w-full"
          />
        </div>
        <button
          onClick={send}
          className="text-primary cursor-pointer w-10 transition-transform duration-30 focus:translate-x-3 hover:translate-x-3"
        >
          {" "}
          &gt;
        </button>
      </div>
    </>
  );
};
export default ChatInput;
