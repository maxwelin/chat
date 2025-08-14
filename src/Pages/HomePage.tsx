import { Link } from "react-router-dom";
import Button from "../Components/Shared/PrimaryButton";
import SecondaryButton from "../Components/Shared/SecondaryButton";
import Title from "../Components/Shared/Title";

const SUB_HEADER = "log in to start chatting";

const HomePage = () => {
  return (
    <div className="w-full flex place-content-center pt-10">
      <div className="flex flex-col w-1/4 h-80">
        <Title title="welcome" />
        <h1>
          <span className="text-gray-500">$ {SUB_HEADER}</span>
        </h1>
        <div className="mt-auto">
          <Link to={"/login"} className="outline-0 ">
            <Button type="button" text="log in" icon="→" />
          </Link>

          <SecondaryButton text="no account?" cta="sign up" to="/register" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
