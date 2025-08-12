import type { ButtonProps } from "../../Models/Button.model";

const PrimaryButton = ({ type, fn, text, icon }: ButtonProps) => {
  return (
    <button
      onClick={fn}
      type={type}
      className="border w-full group mt-5 border-[#00ff99] px-1 py-0.5 uppercase mb-1 cursor-pointer"
    >
      {text + " "}
      <span className="inline-block transition-transform duration-150  text-[#00ff99] group-hover:translate-x-3">
        {icon}
      </span>
    </button>
  );
};
export default PrimaryButton;
