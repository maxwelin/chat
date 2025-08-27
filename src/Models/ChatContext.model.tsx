import type { Message } from "./Messages.model";

interface Conversation {
  invitesReceived: string[];
  invitesSent: string[];
  participating: string[];
}

export default interface ChatContextProps {
  loadingMessages: boolean;
  setLoadingMessages: React.Dispatch<React.SetStateAction<boolean>>
  sendMessage: (message: string) => void;
  latestMessage: string;
  setLatestMessage: React.Dispatch<React.SetStateAction<string>>;
  chatRoomId: string;
  setChatRoomId: React.Dispatch<React.SetStateAction<string>>;
  conversations: Conversation;
  getConversations: () => void;
  getMessages: () => void;
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  deleteMessage: (messageId: number) => void;
  getUsernames: (messages: Message[]) => Promise<{ id: number; username: string; }[] | undefined>
}
