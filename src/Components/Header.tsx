import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const Header = () => {
  const { loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true ? (
        <>
          <Link
            to={"/chat"}
            className="border px-1 py-0.5  mb-1 cursor-pointer"
          >
            Home
          </Link>
        </>
      ) : (
        <>
          <Link to={"/"} className="border px-1 py-0.5  mb-1 cursor-pointer">
            Home
          </Link>
        </>
      )}
    </>
  );
};
export default Header;
