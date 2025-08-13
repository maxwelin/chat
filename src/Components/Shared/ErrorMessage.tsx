import { useEffect } from "react";
import { useAuth } from "../../Hooks/useAuth";

const ErrorMessage = () => {
  const { errorMessage, setErrorMessage } = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [errorMessage]);

  if (errorMessage)
    return (
      <>
        <div className="flex">
          <span className="text-red-500">$ </span>&nbsp;
          <span className=""> {errorMessage}</span>
        </div>
      </>
    );
};

export default ErrorMessage;
