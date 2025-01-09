export enum SearchVarient {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface SearchProps {
  placeholder?: string;
  varient?: SearchVarient;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
