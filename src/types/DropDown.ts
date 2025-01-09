export enum DropDownVarient {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface DropDownProps {
  value?: string;
  varient?: DropDownVarient;
  onChange: (value: string) => void;
}
