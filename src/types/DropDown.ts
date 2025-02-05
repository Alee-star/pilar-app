export enum DropDownVarient {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface DropDownOption {
  label: string;
  value: string;
  slots?: string[];
}

export interface TowerData {
  title: string;
  dropDownOptions: DropDownOption[];
  name: string;
}

export interface DropDownProps {
  value?: string;
  varient?: DropDownVarient;
  onChange: (value: string) => void;
}

export enum NavigationDirection {
  NEXT = "next",
  PREVIOUS = "previous",
}

export interface PaginationData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}

export interface ApartmentData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}

export interface ElevatorData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}
