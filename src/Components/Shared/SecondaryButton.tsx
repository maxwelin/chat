const SecondaryButton = ({ text, cta }: { text: string; cta: string }) => {
  return (
    <button className="w-full cursor-pointer uppercase">
      {text}
      <span className="text-[#00e5ff]">{cta}</span>
    </button>
  );
};
export default SecondaryButton;
