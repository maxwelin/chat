import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import { useAuth } from "../../Hooks/useAuth";
import ChatMessage from "../Shared/ChatMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import PrimaryButton from "../Shared/PrimaryButton";
import FormControl from "../Shared/FormControl";
import { useNavigate } from "react-router-dom";
import MessageLogger from "../Shared/MessageLogger";
import type { EditBody } from "../../Models/EditBody.model";

const Edit = () => {
  const { decodedJwt } = useAuth();
  const { setErrorMessage } = useAuth();
  const navigate = useNavigate();
  const { user, id, avatar, email } = decodedJwt;

  const [repeatPassword, setRepeatPassword] = useState("");
  const [formData, setFormData] = useState<EditBody>({});

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password && formData.password !== repeatPassword) {
      setErrorMessage("password does not match");
      return;
    }
    console.log("form submitted :-)", e.target[1].value);
  };

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
        src={formData.avatar || avatar}
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

    <FormControl
      label="edit"
      key={6}
      type="text"
      id="username"
      placeholder={user}
      value={formData.username!}
    />,
    <FormControl
      key={7}
      type="avatar"
      id="avatar"
      placeholder={avatar}
      value={formData.avatar!}
    />,
    <FormControl
      key={8}
      type="email"
      id="email"
      placeholder={email}
      value={formData.email!}
    />,
    <FormControl
      key={9}
      type="password"
      id="password"
      placeholder="password"
      value={formData.password!}
    />,
    <FormControl
      key={10}
      type="password"
      id="repeat-password"
      fn={handleRepeatPasswordChange}
      placeholder="password"
      value={repeatPassword}
    />,
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
