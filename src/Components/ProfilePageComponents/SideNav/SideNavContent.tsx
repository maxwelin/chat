import { useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import EmptyChatRow from "../../Shared/EmptyChatRow";
import PrimaryButton from "../../Shared/PrimaryButton";
import useStagger from "../../../Hooks/useStagger";
import ChatMessage from "../../Shared/ChatMessage";
import LogMessage from "../../Shared/LogMessage";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";

const SideNavContent = () => {
  const { decodedJwt, logout } = useAuth();
  const { user } = decodedJwt;
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
  };

  const handleEdit = () => {
    navigate("/edit");
  };

  const components = [
    <ChatMessage key={0} from="room_404" message="loading user settings..." />,
    <EmptyChatRow key={1} />,
    <EmptyChatRow key={8} />,
    <LogMessage key={2} message="settings loaded" />,
    <h1 key={3} className="w-2/3 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-secondary">{user}</span>/
      <span className="text-primary">settings</span>
    </h1>,
    <UserInfo userInfo={decodedJwt.email} key={4} />,
    <UserInfo userInfo={decodedJwt.avatar} key={5} />,
    <EmptyChatRow key={6} />,
    <PrimaryButton key={8} type="button" fn={handleEdit} text="edit profile" />,
    <PrimaryButton key={7} type="button" fn={handleLogOut} text="log out" />,
  ];

  const [count, setCount] = useState(0);
  useStagger(count, setCount, components);
  return <>{components.slice(0, count)}</>;
};
export default SideNavContent;
