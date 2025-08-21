import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import ChatMessage from "../Shared/ChatMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import PrimaryButton from "../Shared/PrimaryButton";
import MessageLogger from "../Shared/MessageLogger";
import { useAuth } from "../../Hooks/useAuth";

const Edit = () => {
  const { decodedJwt, updateUserInfo } = useAuth()
 const { user, avatar, id } = decodedJwt

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  updateUserInfo(id, {email: "max@ad.se"})
 }

  const components = [
    <HomeBtn key={0} />,
    <h1
      key={1}
      className="w-2/3 flex py-1 border-b-2 border-dashed border-gray-600"
    >
      <span className="text-gray-400">$</span> &nbsp;
      <span className="text-secondary">{user}</span>
      <img
        className="h-[24px] w-[24px] rounded-full"
        src={avatar}
        alt="avatar"
      />
      /<span className="text-primary">settings</span>/
      <span className="text-app-name">edit</span>
    </h1>,
    <ChatMessage
      from="room_404"
      message="only enter the information you wish to update"
      key={2}
    />,
    <ChatMessage
      from="room_404"
      message="input avatar as a freeimage.host or pravatar.cc link"
      key={3}
    />,

    <EmptyChatRow key={4} />,
    <EmptyChatRow key={5} />,

    
    <EmptyChatRow key={11} />,
    <EmptyChatRow key={12} />,
    <PrimaryButton type="submit" text="Save changes" key={13} />,
    <MessageLogger key={14} />,
  ];

  const [count, setCount] = useState(0);

  useStagger(count, setCount, components);

  return (
    <div className="w-full flex place-content-center pt-10">
      <form onSubmit={handleSubmit} className="flex flex-col w-lg ">
        {components.slice(0, count)}
      </form>
    </div>
  );
};
export default Edit;
