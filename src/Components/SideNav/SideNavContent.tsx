import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import EmptyChatRow from "../Shared/EmptyChatRow";
import PrimaryButton from "../Shared/PrimaryButton";
import useStagger from "../../Hooks/useStagger";
import ChatMessage from "../Shared/ChatMessage";
import LogMessage from "../Shared/LogMessage";

const SideNavContent = () => {
  const { decodedJwt, logout } = useAuth();
  const { user } = decodedJwt;

  const handleLogOut = () => {
    logout();
  };

  const components = [
    <EmptyChatRow key={0} />,
    <ChatMessage key={1} from="room_404" message="loading user settings..." />,
    <LogMessage key={2} message="settings loaded" />,
    <h1 key={3} className="w-2/3 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-secondary">{user}</span>/
      <span className="text-primary">settings</span>
    </h1>,
    <EmptyChatRow key={4} />,
    <EmptyChatRow key={5} />,
    <EmptyChatRow key={6} />,
    <PrimaryButton
      key={7}
      type="button"
      fn={handleLogOut}
      text="log out"
      icon="→"
    />,
  ];

  const [count, setCount] = useState(0);
  useStagger(count, setCount, components, 500);
  return <>{components.slice(0, count)}</>;
};
export default SideNavContent;
