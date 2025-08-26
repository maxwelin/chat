import type { ButtonProps } from "../../Models/Button.model";

const PrimaryButton = ({
  type = "submit",
  fn,
  formId,
  text,
  icon = ">",
  color
}: ButtonProps) => {
  return (
    <button
      form={formId || undefined}
      onClick={fn || undefined}
      type={type}
      className="w-1/2 group font-mono uppercase outline-0 text-left cursor-pointer"
    >
      <span className="text-gray-400 group-focus-within:text-secondary group-hover:text-secondary">
        $
      </span>{" "}
      {color ? (<span className={`text-${color} group-focus-within:text-text-primary group-hover:text-text-primary`}>
      {text}{" "}
      </span>) : (<span>
        {text}{" "}
      </span>)}
      <span className="inline-block lowercase transition-transform duration-30 text-primary group-focus:translate-x-3 group-hover:translate-x-3">
        {icon}
      </span>
    </button>
  );
};

export default PrimaryButton;
