import { useEffect, useState } from "react";
import getTimeStamp from "../../Functions/getTimeStamp";

interface AppMessageProps {
  from: string;
  message: string;
  color?: string;
}

const AppMessage = ({ from, message, color }: AppMessageProps) => {
  const [timeStamp, setTimeStamp] = useState("");

  useEffect(() => {
    setTimeStamp(getTimeStamp());
  }, []);

  return (
    <p className="font-mono min-h-[32px]">
      <span className="text-gray-400">$</span>&nbsp;
      <span className="text-app-timestamp">{timeStamp}&nbsp;</span>
      <span className="text-app-color">from</span>/
      <span className="text-secondary">{from}</span>
      <span className="text-text-primary">:</span>&nbsp;
      {color ? (
        <>
          <span className={`text-${color}`}>{message}</span>
        </>
      ) : (
        <>
          <span className="text-text-primary">{message}</span>
        </>
      )}
    </p>
  );
};
export default AppMessage;
