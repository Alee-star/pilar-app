export interface DataItem {
  name: string;
}

export interface PaginationProps {
  totalCount: number;
  currentPage: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
}
