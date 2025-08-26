interface ButtonProps {
  fn?: () => void;
  type: "submit" | "reset" | "button" | undefined;
}

const DeleteButton = ({ fn, type }: ButtonProps) => {
    
  return (
    <button
    type={type}
      onClick={fn}
      className="w-1/2 text-gray-400 group font-mono uppercase outline-0 text-left cursor-pointer"
    >
      <span className="text-gray-400 group-focus-within:text-secondary group-hover:text-secondary">
        $
      </span>&nbsp;
      <span className="group-focus-within:text-red-500 group-hover:text-red-500">
      delete user&nbsp;
      </span>
      <span className="lowercase transition-transform duration-30 text-red-500 hidden group-focus:inline-block group-hover:inline-block">
        !
      </span>
    </button>
  )
}

export default DeleteButton