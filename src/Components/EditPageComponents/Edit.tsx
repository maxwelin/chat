import { useEffect, useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import ChatMessage from "../Shared/ChatMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import PrimaryButton from "../Shared/PrimaryButton";
import MessageLogger from "../Shared/MessageLogger";
import { useAuth } from "../../Hooks/useAuth";
import type { UpdatedData } from "../../Models/UpdatedData.model";
import FormControl from "../Shared/FormControl";

const Edit = () => {
  const { decodedJwt, updateUserInfo, fetchCsrfToken, setErrorMessage } = useAuth()
 const { user, avatar, id, email } = decodedJwt

useEffect(() => {
  fetchCsrfToken()
}, [])

 const [password, setPassword] = useState<string | undefined>(undefined)
   const [formData, setFormData] = useState<UpdatedData>({
     user: undefined,
     email: undefined,
     avatar: undefined,
   });
 
   
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value );
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, user: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, avatar: e.target.value });
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const userObject: UpdatedData = {}
  for (const [key, value] of Object.entries(formData)) {
    if(value) {
      console.log(`${key}: ${value}`)
      userObject[key as keyof UpdatedData] = value
    }
  }
  if(JSON.stringify(userObject) === '{}') {
    setErrorMessage("no changes detected")
    return
  }
  console.log(id, userObject)
  updateUserInfo(id, userObject)
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

    <FormControl type="text" id="user" value={formData.user} fn={handleUsernameChange} placeholder={user} label="edit" key={6}/>,
    <FormControl type="text" id="avatar" value={formData.avatar} fn={handleAvatarChange} placeholder={avatar} key={7}/>,
    <FormControl type="email" id="email" value={formData.email} fn={handleEmailChange} placeholder={email} key={8}/>,
    <FormControl type="password" id="pwd" value={password} fn={handlePasswordChange} placeholder="password" key={9}/>,
    
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
