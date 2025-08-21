interface UserInfoProps {
  label: string;
  value: string;
}

const UserInfo = ({ value, label }: UserInfoProps) => {
  if (value) {
    return (
      <h1 className="py-1">
        <span className="text-gray-400">&gt;</span>&nbsp;
        <span className="text-gray-400">{label}</span>:&nbsp;
        <span className="text-text-primary">{value}</span>
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
