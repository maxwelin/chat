import type { FormControlType } from "../../Models/FormControl.model";

const FormControl = ({
  ref,
  type,
  id,
  value,
  fn,
  label,
  placeholder,
}: FormControlType) => {
  return (
    <div className="flex group">
      <label
        htmlFor="password"
        className="text-text-primary py-1 min-w-[100px] flex justify-between"
      >
        <span className="text-gray-400 group-focus-within:text-secondary">
          {label ? <>$</> : <>&gt;</>}
        </span>
        <span className="text-text-primar">{label}/</span>
      </label>
      <input
        ref={ref}
        required
        value={value}
        onChange={fn}
        name={id}
        id={id}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        className="py-1 px-2 text-gray-400 outline-none"
      />
    </div>
  );
};
export default FormControl;
