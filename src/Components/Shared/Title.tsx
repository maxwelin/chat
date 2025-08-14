interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className=" mb-4">
      <span className="text-secondary">$</span>{" "}
      <span className="text-[#ff0080]">app</span>/
      <span className="text-app-name">room_404</span>/
      <span className="text-primary">{title}</span>
    </h1>
  );
};
export default Title;
