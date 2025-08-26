import { createContext, useState } from "react";
import type { ProviderProps } from "../Models/ProviderProps.model";
import type ChatContextProps from "../Models/ChatContext.model";
import type { Message } from "../Models/Messages.model";
import { useAuth } from "../Hooks/useAuth";

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const ChatContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const { checkJwtExpiration, decodeJwt } = useAuth()
  
  const [loadingMessages, setLoadingMessages] = useState<boolean>(true)
  const [latestMessage, setLatestMessage] = useState<string>("");
  const [chatRoomId, setChatRoomId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState({
    invitesReceived: [],
    invitesSent: [],
    participating: [],
  });
  
  const deleteMessage = async (messageId: number) => {
     const token = localStorage.getItem("jwt")
    if(token) {
      const decodedToken = decodeJwt(token)
      checkJwtExpiration(decodedToken)
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_MESSAGES_ENDPOINT}/${messageId}`, {
        method: "DELETE",
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + token
        }
      })

       if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      getMessages()

    } catch (error) {
      console.error(error)
    }
  }

  // const getUsernames = async (messages: Message[]) => {
  //   const userIds = [...new Set(messages.map(msg => msg.userId))]
  //   userIds.forEach(userId => {
  //     getUserById(userId)
  //   });
  // }

  // const getUserById = async (id: number) => {
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_USERS_ENDPOINT}/${id}`, {
  //       method: "GET",
  //       headers: {
  //         accept: "*/*",
  //         Authorization: "Bearer " + localStorage.getItem("jwt")
  //       }
  //     })

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(`Error ${response.status}: ${errorText}`);
  //     }

  //     const data = await response.json()
    
  //     console.log(data[0])
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const getMessages = async () => {
    
    const token = localStorage.getItem("jwt")
    if(token) {
      const decodedToken = decodeJwt(token)
      checkJwtExpiration(decodedToken)
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_MESSAGES_ENDPOINT}?conversationId=${chatRoomId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json()
      setMessages(data)
      console.log(data)
      setLoadingMessages(false)
      // getUsernames(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getConversations = async () => {
    const token = localStorage.getItem("jwt")
    if(token) {
      const decodedToken = decodeJwt(token)
      checkJwtExpiration(decodedToken)
    }
    try {
      const response = await fetch(
        import.meta.env.VITE_CONVERSATIONS_ENDPOINT,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      setConversations(data);
      if(!chatRoomId) {
        setChatRoomId(data.participating[0])
      }
  
    } catch (error) {
      console.error("Could not retrieve conversations: " + error);
    }
  };

  const sendMessage = async (message: string) => {
    const token = localStorage.getItem("jwt")
    if(token) {
      const decodedToken = decodeJwt(token)
      checkJwtExpiration(decodedToken)
    }
    if (message) {
      try {
        const response = await fetch(import.meta.env.VITE_MESSAGES_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
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

        getMessages()
      } catch (error) {
        console.error("Failed to send message: ", error);
      }
    }
  };

  return (
    <ChatContext.Provider
      value={{
        loadingMessages,
        setLoadingMessages,
        sendMessage,
        latestMessage,
        setLatestMessage,
        chatRoomId,
        setChatRoomId,
        conversations,
        getConversations,
        getMessages,
        messages,
        setMessages,
        deleteMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export { ChatContext, ChatContextProvider };
