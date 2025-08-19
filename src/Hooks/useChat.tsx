import { useContext } from "react";
import { ChatContext } from "../Providers/ChatContext";

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within ChatProvider");
  }
  return context;
};
