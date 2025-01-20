export enum DropDownVarient {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface DropDownOption {
  label: string;
  value: string;
}

export interface TowerData {
  title: string;
  subAssets: DropDownOption[];
}

export interface DropDownProps {
  value?: string;
  varient?: DropDownVarient;
  onChange: (value: string) => void;
  options?: DropDownOption[];
}
