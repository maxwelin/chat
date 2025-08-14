import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const HomeBtn = () => {
  const { loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true ? (
        <>
          <Link
            to={"/chat"}
            className="w-1/2 group py-1 outline-0 flex group-focus:text-secondary group-hover:text-secondary text-gray-500"
          >
            <span className="group-focus:text-secondary group-hover:text-secondary">
              ${" "}
            </span>{" "}
            &nbsp;
            <button
              type="button"
              className="group group-hover:text-text-primary w-full text-gray-500 outline-0 cursor-pointer text-left"
            >
              HOME{" "}
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link
            to={"/"}
            className="w-1/2 group py-1 outline-0 flex group-focus:text-secondary group-hover:text-secondary text-gray-500"
          >
            <span className="group-focus:text-secondary group-hover:text-secondary">
              ${" "}
            </span>{" "}
            &nbsp;
            <button
              type="button"
              className="group text-text-primary w-full outline-0 cursor-pointer text-left"
            >
              HOME{" "}
            </button>
          </Link>
        </>
      )}
    </>
  );
};
export default HomeBtn;
