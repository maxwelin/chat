import { useState } from "react";
import useStagger from "../../Hooks/useStagger";
import LogMessage from "../Shared/LogMessage";
import EmptyChatRow from "../Shared/EmptyChatRow";

interface InvitesProps {
  array: string[];
  status: string;
  delay: number;

}


const Invites = ({ array, status, delay }: InvitesProps) => {
    const [count, setCount] = useState(0);
    
    const components = [
        <EmptyChatRow key={0}/>,
        <EmptyChatRow key={1}/>,
        <div className="border-b-2 border-dashed border-gray-600" key={2}></div>,
      <LogMessage message={status} key={3} />,
      
    ];
  useStagger(count, setCount, components, 500, delay);
  return (
    <>
      {components.slice(0, count)}
      {count === components.length && (
        <div className="border-t-2 border-dashed border-gray-600">
          {array.map((item, i) => (
            <div className="flex min-h-[32px] py-1">
              <span className="text-gray-400">
                <span>&gt;</span>
                <span className="text-app-name">&nbsp;room id</span>:&nbsp;
              </span>
              <span key={i + components.length + 1}>{item}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Invites;
