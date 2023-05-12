import React from "react";

interface IPaginationProps {
  docs: number;
  docsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

import { PaginationStyled, LiStyled } from "./styles";

const Pagination = ({
  docs,
  docsPerPage,
  setCurrentPage,
  currentPage,
}: IPaginationProps) => {
  const totalPages = Math.ceil(docs / docsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const changePageTo = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <PaginationStyled>
      {pageNumbers.map((number) => (
        <LiStyled
          key={number}
          onClick={() => changePageTo(number)}
          current={currentPage === number}
        >
          {number}
        </LiStyled>
      ))}
    </PaginationStyled>
  );
};

export default Pagination;
