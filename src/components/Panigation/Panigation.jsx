import React from "react";
import classNames from "classnames/bind";
import styles from "./Panigation.module.scss";
import ReactPaginate from "react-paginate";
import icons from "~/assets/svgs/icons";

const cx = classNames.bind(styles);

const PaginatedItems = ({itemsPerPage, totalItems, currentPage, onPageChange}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    onPageChange(event.selected);
  };

  return (
    <ReactPaginate
      className={cx("panigation")}
      nextLabel={<span>Next{icons.arrow()}</span>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<span>{icons.arrow()}Previous</span>}
      pageClassName={cx("page-item")}
      pageLinkClassName={cx("page-link")}
      previousClassName={cx("page-item")}
      previousLinkClassName={cx("page-link-btn")}
      nextClassName={cx("page-item")}
      nextLinkClassName={cx("page-link-btn")}
      breakLabel="..."
      breakClassName={cx("page-item")}
      breakLinkClassName={cx("page-link")}
      containerClassName={cx("pagination")}
      activeClassName={cx("active")}
      renderOnZeroPageCount={null}
    />
  );
};

export default PaginatedItems;
