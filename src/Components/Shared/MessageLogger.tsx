import { useEffect } from "react";
import { useAuth } from "../../Hooks/useAuth";
import EmptyChatRow from "./EmptyChatRow";

const MessageLogger = () => {
  const { errorMessage, setErrorMessage, successMessage, setSuccessMessage } =
    useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [errorMessage, setErrorMessage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [successMessage, setSuccessMessage]);

  if (errorMessage)
    return (
      <>
        <span className="text-red-500">$ ERROR</span>
        <div className="flex">
          <span className="text-text-primary">&gt;</span>&nbsp;
          <span className="text-red-500"> {errorMessage}</span>
        </div>
      </>
    );
  else if (successMessage)
    return (
      <>
        <EmptyChatRow />
        <div className="flex">
          <span className="text-green-500">$ {successMessage}</span>
        </div>
      </>
    );
};

export default MessageLogger;
