import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <>
        <h1>utloggad</h1>
        <Link to={"/login"} className="border rounded">
          logga in
        </Link>
        <Link to={"/register"} className="border rounded">
          registrera
        </Link>
      </>
    </div>
  );
};
export default HomePage;
