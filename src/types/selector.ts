export enum SelectorVarient {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface SelectorProps {
  label?: string;
  varient?: SelectorVarient;
}
