import type { ChangeEvent, RefObject } from "react";

export interface FormControlType {
  ref?: RefObject<null | HTMLInputElement>;
  type: string;
  id: string;
  value: string;
  fn: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder: string;
}
