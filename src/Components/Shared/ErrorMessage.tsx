import { useEffect } from "react";
import { useAuth } from "../../Hooks/useAuth";

const ErrorMessage = () => {
  const { errorMessage, setErrorMessage } = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [errorMessage, setErrorMessage]);

  if (errorMessage)
    return (
      <>
        <div className="flex mt-5">
          <span className="text-secondary">$</span>&nbsp;
          <span className="text-red-500"> {errorMessage}</span>
        </div>
      </>
    );
};

export default ErrorMessage;
