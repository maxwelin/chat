export interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  fn?: () => void;
  formId?: string;
  text: string;
  icon?: string;
}
