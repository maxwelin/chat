import type { FormControlType } from "../../Models/FormControl.model";

const FormControl = ({ ref, type, id, value, fn, label }: FormControlType) => {
  return (
    <div className="flex group">
      <label htmlFor="password" className="text-gray-500 py-1">
        <span className="group-focus-within:text-secondary">$ </span>{" "}
        <span className="group-focus-within:text-text-primary">{label}/</span>
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
