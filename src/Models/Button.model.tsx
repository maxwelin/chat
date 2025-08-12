export interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  fn?: () => void;
  text: string;
  icon: string;
}
