import { useEffect, useState } from "react";
import getTimeStamp from "../Functions/getTimeStamp";
import { useAuth } from "../Hooks/useAuth";
import EmptyChatRow from "./Shared/EmptyChatRow";
import HomeBtn from "./Shared/HomeButton";
import PrimaryButton from "./Shared/PrimaryButton";

const Chat = () => {
  const { logout, decodedJwt } = useAuth();
  const [timeStamp, setTimeStamp] = useState("");

  useEffect(() => {
    setTimeStamp(getTimeStamp());
  }, []);

  const { user } = decodedJwt;

  const handleLogOut = () => {
    logout();
  };
  return (
    <>
      <HomeBtn />

      <h1 className="w-1/2 py-1 border-b-2 border-dashed border-gray-600">
        <span className="text-gray-500">$</span>{" "}
        <span className="text-app-name">room_404</span>/
        <span className="text-[#ff0080]">users</span>/
        <span className="text-primary">{user}</span>
      </h1>
      <EmptyChatRow />
      <h1>
        <span className="text-[#aa88ff] py-1 ">
          <span className="text-gray-500">$</span>
          &nbsp;{timeStamp}
          <span className="text-text-primary"> welcome {user}</span>
        </span>
      </h1>
      <EmptyChatRow />

      <PrimaryButton type="button" fn={handleLogOut} text="log out" icon="→" />
    </>
  );
};
export default Chat;
