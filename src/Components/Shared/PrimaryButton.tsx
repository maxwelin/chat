import type { ButtonProps } from "../../Models/Button.model";

const PrimaryButton = ({ type, fn, text, icon }: ButtonProps) => {
  return (
    <button
      onClick={fn}
      type={type}
      className="border-2 w-full group mt-5  border-[#00e5ff] px-1 py-0.5 uppercase mb-1 cursor-pointer"
    >
      {text + " "}
      <p className="inline-block transition-transform duration-150  text-[#00e5ff] group-hover:translate-x-3">
        {icon}
      </p>
    </button>
  );
};
export default PrimaryButton;
