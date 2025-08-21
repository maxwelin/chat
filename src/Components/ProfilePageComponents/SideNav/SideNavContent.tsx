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
  const { user, avatar } = decodedJwt;
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
    <EmptyChatRow key={2} />,
    <LogMessage key={3} message="settings loaded" />,
    <h1
      key={4}
      className="w-2/3 flex py-1 border-b-2 border-dashed border-gray-600"
    >
      <span className="text-gray-400">$</span> &nbsp;
      <span className="text-secondary">{user}</span>
      <img
        className="h-[24px] w-[24px] rounded-full"
        src={avatar}
        alt="avatar"
      />
      /<span className="text-primary">settings</span>
    </h1>,
    <UserInfo label="email" value={decodedJwt.email} key={5} />,
    <UserInfo label="user id" value={decodedJwt.id.toString()} key={6} />,
    <UserInfo label="avatar" value={decodedJwt.avatar} key={7} />,
    <EmptyChatRow key={8} />,
    <EmptyChatRow key={11} />,
    <PrimaryButton key={9} type="button" fn={handleEdit} text="edit profile" />,
    <PrimaryButton key={10} type="button" fn={handleLogOut} text="log out" />,
  ];

  const [count, setCount] = useState(0);
  useStagger(count, setCount, components);
  return <>{components.slice(0, count)}</>;
};
export default SideNavContent;
