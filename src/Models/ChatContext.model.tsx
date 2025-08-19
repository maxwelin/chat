interface Conversation {
  invitesReceived: string[];
  invitesSent: string[];
  participating: string[];
}

export default interface ChatContextProps {
  sendMessage: (message: string) => void;
  latestMessage: string;
  setLatestMessage: React.Dispatch<React.SetStateAction<string>>;
  chatRoomId: string;
  setChatRoomId: React.Dispatch<React.SetStateAction<string>>;
  conversations: Conversation;
  getConversations: () => void;
}
