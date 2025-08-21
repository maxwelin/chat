interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="w-2/3 py-1 border-b-2 border-dashed border-gray-600">
      <span className="text-gray-400">$</span>{" "}
      <span className="text-app-name">app</span>/
      <span className="text-secondary">room_404</span>/
      <span className="text-primary">{title}</span>
    </h1>
  );
};
export default Title;
