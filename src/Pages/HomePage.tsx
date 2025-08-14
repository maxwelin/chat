import { Link } from "react-router-dom";
import Button from "../Components/Shared/PrimaryButton";
import SecondaryButton from "../Components/Shared/SecondaryButton";

const HEADER = "welcome to /room_404 ";
const SUB_HEADER = "log in to continue";

const HomePage = () => {
  return (
    <div className="w-full flex place-content-center">
      <div className="flex flex-col w-1/4">
        <h1 className="mb-4">
          <span className="text-gray-500">$ </span>
          {HEADER} <br /> <span className="text-gray-500">$ {SUB_HEADER}</span>
        </h1>
        <Link to={"/login"} className="outline-0 ">
          <Button type="button" text="log in" icon="→" />
        </Link>

        <SecondaryButton text="no account?" cta="sign up" to="/register" />
      </div>
    </div>
  );
};
export default HomePage;
