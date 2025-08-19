import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const HomeBtn = () => {
  const { loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true ? (
        <>
          <Link
            to={"/profile"}
            className="w-1/2 group py-1 outline-0 flex group-focus:text-secondary group-hover:text-secondary text-gray-400"
          >
            <span className="group-focus:text-secondary group-hover:text-secondary">
              ${" "}
            </span>{" "}
            &nbsp;
            <button
              type="button"
              className="group group-hover:text-text-primary w-full text-gray-400 outline-0 cursor-pointer text-left"
            >
              &lt; PROFILE{" "}
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link
            to={"/"}
            className="w-1/2 group py-1 outline-0 flex group-focus:text-secondary group-hover:text-secondary text-gray-400"
          >
            <span className="group-focus:text-secondary group-hover:text-secondary">
              ${" "}
            </span>{" "}
            &nbsp;
            <button
              type="button"
              className="group text-text-primary w-full outline-0 cursor-pointer text-left"
            >
              <span className="text-primary">&lt;</span> HOME{" "}
            </button>
          </Link>
        </>
      )}
    </>
  );
};
export default HomeBtn;
