import { useAuth } from "../Hooks/useAuth";
import PrimaryButton from "./Shared/PrimaryButton";

const Chat = () => {
  const { logout, decodedJwt } = useAuth();

  const { user } = decodedJwt;

  const handleLogOut = () => {
    logout();
  };
  return (
    <div className="w-full flex place-content-center">
      <div className="flex flex-col w-1/4">
        <h1>Welcome {user}</h1>
        <PrimaryButton
          type="button"
          fn={handleLogOut}
          text="log out"
          icon="→"
        />
      </div>
    </div>
  );
};
export default Chat;
