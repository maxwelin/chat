import { createContext, useEffect, useState } from "react";
import type { ProviderProps } from "../Models/ProviderProps.model";
import type ChatContextProps from "../Models/ChatContext.model";

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const ChatContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const jwt = localStorage.getItem("jwt");
  const [latestMessage, setLatestMessage] = useState("");
  const [conversations, setConversations] = useState({
    invitesReceived: [],
    invitesSent: [],
    participating: [],
  });
  const [chatRoomId, setChatRoomId] = useState(
    "3f92693f-7a74-4a26-8430-2bf8405fda0d"
  );

  const getConversations = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_CONVERSATIONS_ENDPOINT,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt,
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log(data);
      setConversations(data);
    } catch (error) {
      console.error("Could not retrieve conversations: " + error);
    }
  };

  const sendMessage = async (message: string) => {
    console.log(jwt);
    if (message) {
      try {
        const response = await fetch(import.meta.env.VITE_MESSAGES_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt,
            Accept: "application/json",
          },
          body: JSON.stringify({
            text: message,
            conversationId: chatRoomId,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log(data);
        setLatestMessage(data.latestMessage.text);
      } catch (error) {
        console.error("Failed to send message: ", error);
      }
    }
  };

  useEffect(() => {
    getConversations();
  }, [jwt]);

  return (
    <ChatContext.Provider
      value={{
        sendMessage,
        latestMessage,
        setLatestMessage,
        chatRoomId,
        setChatRoomId,
        conversations,
        getConversations,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export { ChatContext, ChatContextProvider };
