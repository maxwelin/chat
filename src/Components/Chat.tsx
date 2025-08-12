import { useAuth } from "../Hooks/useAuth";

const Chat = () => {
  const { logout, decodedJwt } = useAuth();

  const { user } = decodedJwt;

  const handleLogOut = () => {
    logout();
  };
  return (
    <>
      <h1>Välkommen {user}</h1>
      <button onClick={handleLogOut} className="border rounded">
        Logga ut
      </button>
    </>
  );
};
export default Chat;
