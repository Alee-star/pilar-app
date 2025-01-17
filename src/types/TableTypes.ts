export interface User {
  name: string;
  apartment: string;
  tower: string;
  rent: number;
  moveInDate?: string;
  lastSignedIn?: string;
  actions: string[];
  hasMovedIn?: boolean;
  id: "string";
}

export interface TenantTableProps {
  headers: string[];
  hasIcon?: boolean;
  hasButtons?: boolean;
}
