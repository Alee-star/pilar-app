export interface User {
  id: "string";
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    gender: string;
    dob: string;
  };
  apartment: {
    type: string;
    name: {
      en: string;
    };
    tower: {
      name: string;
    };
    rent: string;
    rental_contract: string;
    elevator_slots: string;
  };
  status: {
    is_move: string;
    move_in_date: string;
    last_sign_date: string;
  };
  documents: {
    name: string;
  };
}

export interface TenantTableProps {
  headers: string[];
  hasIcon?: boolean;
  hasButtons?: boolean;
  tenants: User[];
  setTenants: React.Dispatch<React.SetStateAction<User[]>>;
}
