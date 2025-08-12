import { useAuth } from "../Hooks/useAuth";

const ErrorMessage = () => {
  const { errorMessage } = useAuth();
  return (
    <>
      {errorMessage ? (
        <>
          <p>{errorMessage}</p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default ErrorMessage;
