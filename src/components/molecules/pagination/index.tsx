import React from "react";
import ReactPaginate from "react-paginate";
import { useLocation, useSearchParams } from "react-router-dom";

import styles from "./styles.module.css";

type Props = {
  totalPages: number;
  currentPage: number;
};

const Pagination: React.FC<Props> = ({ totalPages, currentPage }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const hrefBuilder = (pageNumber: number) => {
    searchParams.set("page", pageNumber.toString());
    return `${location.pathname}?${searchParams.toString()}`;
  };

  if(!totalPages) return null

  return (
    <nav aria-label="Page navigation" data-testid="pagination">
      <ReactPaginate
        className={styles.pagination}
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={totalPages}
        onPageChange={(pageNumber) => {
          setSearchParams((prevSearchParams) => {
            const newSearchParams = new URLSearchParams(prevSearchParams);
            newSearchParams.set("page", (pageNumber.selected + 1).toString());
            return newSearchParams;
          });
        }}
        breakClassName="page-item"
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        pageClassName={styles.pageItem}
        nextClassName={styles.pageItem}
        previousClassName={styles.pageItem}
        disabledClassName={styles.disabled}
        hrefBuilder={hrefBuilder}
        hrefAllControls
        forcePage={currentPage}
      />
    </nav>
  );
};

export default Pagination