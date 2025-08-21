import { useEffect, useState } from "react";
import getTimeStamp from "../../Functions/getTimeStamp";

interface LogMessageProps {
  message: string;
}

const LogMessage = ({ message }: LogMessageProps) => {
  const [timeStamp, setTimeStamp] = useState("");

  useEffect(() => {
    setTimeStamp(getTimeStamp());
  }, []);

  return (
    <p className="font-mono min-h-[32px]">
      <span className="text-gray-400">$</span>&nbsp;
      <span className="text-app-timestamp">{timeStamp}&nbsp;</span>/
      <span className="text-app-name">app</span>/
      <span className="text-primary">status</span>:&nbsp;
      <span className="text-green-500">{message}</span>
    </p>
  );
};
export default LogMessage;
