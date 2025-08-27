import { useState } from "react";
import useStagger from "../Hooks/useStagger";
import HomeBtn from "./Shared/HomeButton";
import Title from "./Shared/Title";
import AppMessage from "./Shared/AppMessage";
import Logo from "./NotFoundLogo";

const NotFound = () => {
    const components = [
      <HomeBtn key={0}/>,
      <Title title="lost" key={1}/>,
      <Logo key={2} />,
      <AppMessage key={4} from="room_404" message="you lost?"/>
    ]

    const [count, setCount] = useState(0);
  
    useStagger(count, setCount, components);
  
  return(
    <div className="w-full flex place-content-center pt-10">
      <div className="flex flex-col w-lg ">
        {components.slice(0, count)}
      </div>
    </div>
  )
};
export default NotFound;
