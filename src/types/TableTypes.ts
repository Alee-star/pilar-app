export interface User {
  name: string;
  apartment: string;
  tower: string;
  rent: number;
  moveInDate: string;
  lastSignedIn: string;
  actions: string[];
  hasMovedIn?: boolean;
}

export interface TableProps {
  headers: string[];
  hasImage?: boolean;
  hasButtons?: boolean;
}
