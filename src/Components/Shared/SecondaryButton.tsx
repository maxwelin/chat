const SecondaryButton = ({ text }: { text: string }) => {
  return (
    <button className="w-full px-1 py-0.5 mb-1 cursor-pointer uppercase">
      {text}
    </button>
  );
};
export default SecondaryButton;
