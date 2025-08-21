import type { FormControlType } from "../../Models/FormControl.model";

const FormControl = ({
  ref,
  type,
  id,
  value,
  required,
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
        <span className="text-text-primary">{label}/</span>
      </label>
      <input
        ref={ref}
        value={value}
        required={required}
        onChange={fn}
        name={id}
        id={id}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        className="py-1 px-2 text-gray-400 outline-none w-full"
      />
    </div>
  );
};
export default FormControl;
