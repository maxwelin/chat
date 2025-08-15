import { Link } from "react-router-dom";
import type { SecondaryButtonProps } from "../../Models/SecondaryButton.model";

const SecondaryButton = ({ text, cta, to }: SecondaryButtonProps) => {
  return (
    <Link
      to={to}
      className=" group outline-0 flex group-focus:text-secondary group-hover:text-secondary text-gray-400"
    >
      <span className="group-focus:text-secondary group-hover:text-secondary">
        ${" "}
      </span>{" "}
      &nbsp;
      <button className="group group-hover:text-text-primary w-full text-gray-400 outline-0 cursor-pointer text-left">
        {text}{" "}
        <span className="group-hover:text-primary text-text-primary group-focus:text-primary">
          {cta}
        </span>
      </button>
    </Link>
  );
};

export default SecondaryButton;
