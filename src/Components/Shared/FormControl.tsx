import type { FormControlType } from "../../Models/FormControl.model";

const FormControl = ({ ref, type, id, value, fn, label }: FormControlType) => {
  return (
    <div className="flex group">
      <label
        htmlFor="password"
        className="text-text-primary py-1 min-w-[100px] flex justify-between"
      >
        <span className="text-gray-400 group-focus-within:text-secondary">
          {" "}
          &gt;{" "}
        </span>
        &nbsp;
        <span className="text-gray-400 group-focus-within:text-text-primary">
          {label}
        </span>
        /
      </label>
      <input
        ref={ref}
        required
        value={value}
        onChange={fn}
        id={id}
        type={type}
        autoComplete="off"
        className="py-1 px-2 text-gray-400 outline-none"
      />
    </div>
  );
};
export default FormControl;
