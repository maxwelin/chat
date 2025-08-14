import { Link } from "react-router-dom";
import Button from "../Components/Shared/PrimaryButton";
import SecondaryButton from "../Components/Shared/SecondaryButton";
import Title from "../Components/Shared/Title";
import EmptyChatRow from "../Components/Shared/EmptyChatRow";
import ChatMessage from "../Components/Shared/ChatMessage";

const SUB_HEADER = "log in to start chatting";

const HomePage = () => {
  return (
    <div className="w-full flex place-content-center pt-10">
      <div className="flex flex-col w-lg">
        <EmptyChatRow />
        <Title title="home" />
        <EmptyChatRow />
        <ChatMessage
          from="room_404"
          message="user connected"
          color="green-500"
        />
        <ChatMessage from="room_404" message="welcome" />
        <EmptyChatRow />
        <h1 className="py-1">
          <span className="text-gray-500">$ {SUB_HEADER}</span>
        </h1>
        <EmptyChatRow />
        <EmptyChatRow />
        <EmptyChatRow />
        <EmptyChatRow />
        <Link to={"/login"} className="outline-0 ">
          <Button type="button" text="log in" icon="→" />
        </Link>

        <SecondaryButton text="no account?" cta="sign up" to="/register" />
      </div>
    </div>
  );
};
export default HomePage;
