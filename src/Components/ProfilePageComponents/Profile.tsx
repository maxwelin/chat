import EmptyChatRow from "../Shared/EmptyChatRow";
import useStagger from "../../Hooks/useStagger";
import AppMessage from "../Shared/AppMessage";
import { useAuth } from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import SideNav from "./SideNav/SideNav";
import LogMessage from "../Shared/LogMessage";
import { useNavigate } from "react-router-dom";
import ProfilePath from "../Shared/ProfilePath";
import { useChat } from "../../Hooks/useChat";

const Profile = () => {
  const { decodedJwt, checkJwtExpiration, loggedIn } = useAuth();
  const { getConversations } = useChat();
  const navigate = useNavigate();

  useEffect(() => {
    getConversations()
    checkJwtExpiration(decodedJwt);
    if(!loggedIn) navigate("/login")
  }, []);

  const [navVisibility, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!navVisibility);
  };

  const navigateToChat = () => {
    navigate("/chat");
  };

  const navigateToChatRooms = () => {
    navigate("/chatrooms");
  };

  const { user } = decodedJwt;
  const components = [
    <EmptyChatRow key={0} />,

    <ProfilePath path="profile" key={1} />,
    <LogMessage message={user + " connected"} key={3} />,
    <AppMessage from="room_404" message={`welcome ${user}`} key={4} />,

    <EmptyChatRow key={5} />,
    <EmptyChatRow key={6} />,
    <PrimaryButton key={8} type="button" fn={navigateToChat} text="chat" />,
    <PrimaryButton
      key={7}
      type="button"
      fn={navigateToChatRooms}
      text="select chat room"
    />,
    <PrimaryButton key={9} type="button" fn={toggleNav} text="user settings" />,
    <SideNav key={10} navVisibility={navVisibility} />,
  ];

  const [count, setCount] = useState(0);
  useStagger(count, setCount, components, undefined);
  return <>{components.slice(0, count)}</>;
};
export default Profile;
