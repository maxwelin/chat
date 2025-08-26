import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import HomeBtn from "../Shared/HomeButton";
import { useAuth } from "../../Hooks/useAuth";
import SettingsPath from "../Shared/SettingsPath";
import AppMessage from "../Shared/AppMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";
import MessageLogger from "../Shared/MessageLogger";
import DeleteButton from "../EditPageComponents/DeleteUserButton";

const DeleteUser = () => {
  const { decodedJwt, deleteUser } = useAuth()
  const { id } = decodedJwt

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(id);
    deleteUser(id)
  }

  const components = [
    <HomeBtn key={0}/>,
    <SettingsPath path="delete" key={1} />,
    <AppMessage
      from="room_404"
      message="deleting a user is a permanent, non reversable action"
      key={2}
    />,
    <AppMessage
      from="room_404"
      message="are you sure you want to delete?"
      key={3}
    />,
    <EmptyChatRow key={4}/>,
    <EmptyChatRow key={5}/>,
    <DeleteButton type="submit" key={6}/>,
    <MessageLogger key={7}/>,
  ]

   const [count, setCount] = useState(0);
  
    useStagger(count, setCount, components);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-lg ">
        {components.slice(0, count)}
      </form>
  )
}

export default DeleteUser