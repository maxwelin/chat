import { useAuth } from "../../Hooks/useAuth"

const SettingsPath = ({ path }: {path: string}) => {
  const { decodedJwt } = useAuth()
  const { user, avatar } = decodedJwt
  return (
     <h1
      key={1}
      className="w-2/3 flex py-1 border-b-2 border-dashed border-gray-600"
    >
      <span className="text-gray-400">$</span> &nbsp;
      <span className="text-secondary">{user}</span>
      {avatar && <img
        className="h-[24px] w-[24px] rounded-full"
        src={avatar}
        alt="avatar"
      />}
      
      /<span className="text-primary">settings</span>/
      <span className="text-app-name">{path}</span>
    </h1>
  )
}

export default SettingsPath