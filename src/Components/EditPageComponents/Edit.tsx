import { useEffect, useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import AppMessage from "../Shared/AppMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import PrimaryButton from "../Shared/PrimaryButton";
import MessageLogger from "../Shared/MessageLogger";
import { useAuth } from "../../Hooks/useAuth";
import type { UpdatedData } from "../../Models/UpdatedData.model";
import FormControl from "../Shared/FormControl";

import React from 'react'
import Url from "../Shared/Url";
import DeleteButton from "./DeleteUserButton";
import SettingsPath from "../Shared/SettingsPath";
import { useNavigate } from "react-router-dom";


const Edit = () => {
  const { decodedJwt, updateUserInfo, fetchCsrfToken, setErrorMessage } = useAuth()
  const { user, avatar, id, email } = decodedJwt
  const navigate = useNavigate()

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

  const deleteUser = () => {
    navigate("/profile/delete")
  }

  const components = [
    <HomeBtn key={0} />,
    <SettingsPath path="edit" key={1}/>,
    <AppMessage
      from="room_404"
      message="only enter the information you wish to update"
      key={2}
    />,
    <AppMessage
      from="room_404"
      message="valid avatar domain names:"
      key={3}
    />,
    <Url url="https://i.pravatar.cc" key={15}/>,
    <Url url="https://freeimage.host" key={16}/>,
    <Url url="https://iili.io" key={17}/>,
    <Url url="https://api.dicebear.com" key={18}/>,
    <EmptyChatRow key={4} />,
   
    
    <EmptyChatRow key={5} />,

    <FormControl type="text" id="user" value={formData.user} fn={handleUsernameChange} placeholder={user} label="edit" key={6}/>,
    <FormControl type="text" id="avatar" value={formData.avatar} fn={handleAvatarChange} placeholder={avatar || "avatar"} key={7}/>,
    <FormControl type="email" id="email" value={formData.email} fn={handleEmailChange} placeholder={email} key={8}/>,
    <FormControl type="password" id="pwd" value={password} fn={handlePasswordChange} placeholder="password" key={9}/>,
    
    <div key={10} className="flex py-1 justify-between h-[32px] overflow-visible">
      <span className="text-gray-400">·</span>
      <img
         className="h-[64px] w-[64px] rounded-full bottom-0"
         src={formData.avatar || avatar || undefined}
         alt="avatar"
       />
    </div>,
    <EmptyChatRow key={12} />,
    <PrimaryButton type="submit" text="Save changes" key={13} />,
    <EmptyChatRow key={20} />,
    <EmptyChatRow key={21} />,
    <DeleteButton type="button" fn={deleteUser} key={19}/>,
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
