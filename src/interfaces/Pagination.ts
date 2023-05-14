export interface IPaginationProps {
  docs: number;
  docsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
