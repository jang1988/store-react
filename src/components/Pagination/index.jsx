import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss'


const Pagination = ({currentPage, onPageChangePage}) => {
    return (
        <ReactPaginate
                className={style.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(e) => onPageChangePage(e.selected + 1)}
                pageRangeDisplayed={6}
                pageCount={3}
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
    );
}

export default Pagination;
