import type { ButtonProps } from "../../Models/Button.model";

const PrimaryButton = ({
  type = "submit",
  fn,
  formId,
  text,
  icon,
}: ButtonProps) => {
  return (
    <button
      form={formId || undefined}
      onClick={fn || undefined}
      type={type}
      className="w-1/2 group font-mono uppercase outline-0 text-left cursor-pointer"
    >
      <span className="text-gray-500 group-focus-within:text-secondary group-hover:text-secondary">
        $
      </span>{" "}
      {text}{" "}
      <span className="inline-block transition-transform duration-30 text-primary group-focus:translate-x-3 group-hover:translate-x-3">
        {icon}
      </span>
    </button>
  );
};

export default PrimaryButton;
