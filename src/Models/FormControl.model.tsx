import type { ChangeEvent, RefObject } from "react";

export interface FormControlType {
  ref?: RefObject<null | HTMLInputElement>;
  required?: boolean;
  type: string;
  id: string;
  value: string | undefined;
  fn?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder: string;
}
