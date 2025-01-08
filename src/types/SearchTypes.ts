export enum SearchVarient {
  primary = "primary",
  secondary = "secondary",
}

export interface SearchProps {
  placeholder?: string;
  image?: string;
  imageAlt?: string;
  varient?: SearchVarient;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
