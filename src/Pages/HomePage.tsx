import { Link } from "react-router-dom";
import Button from "../Components/Shared/PrimaryButton";
import SecondaryButton from "../Components/Shared/SecondaryButton";

const HomePage = () => {
  return (
    <div className="w-full flex place-content-center">
      <div className="flex flex-col w-1/4">
        <h1>Welcome, please log in</h1>
        <Link to={"/login"}>
          <Button type="button" text="sign up" icon="→" />
        </Link>

        <Link to={"/register"}>
          <SecondaryButton text="No account? Sign up" />
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
