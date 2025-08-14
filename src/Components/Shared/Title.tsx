interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="w-1/2 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-500">$</span>{" "}
      <span className="text-[#ff0080]">app</span>/
      <span className="text-app-name">room_404</span>/
      <span className="text-primary">{title}</span>
    </h1>
  );
};
export default Title;
