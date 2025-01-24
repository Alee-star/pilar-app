export interface DataItem {
  name: string;
}

export interface PaginationProps {
  data: DataItem[];
  currentPage: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
}
