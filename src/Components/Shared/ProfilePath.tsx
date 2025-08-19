import { useAuth } from "../../Hooks/useAuth";

interface ProfilePathProps {
  path: string;
}

const ProfilePath = ({ path }: ProfilePathProps) => {
  const { decodedJwt } = useAuth();
  const { user } = decodedJwt;
  return (
    <h1 key={1} className="w-2/3 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-app-name">room_404</span>/
      <span className="text-secondary">{user}</span>/
      <span className="text-primary">{path}</span>
    </h1>
  );
};
export default ProfilePath;
