interface UserInfoProps {
  userInfo: string;
}

const UserInfo = ({ userInfo }: UserInfoProps) => {
  if (userInfo) {
    return (
      <h1 className="py-1">
        <span className="text-gray-400">&gt;</span>&nbsp;
        <span className="text-text-primary">{userInfo}</span>
      </h1>
    );
  } else {
    return (
      <h1 className="py-1">
        <span className="text-gray-400">·</span>&nbsp;
      </h1>
    );
  }
};
export default UserInfo;
