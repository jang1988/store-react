import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss'

type PaginationProps = {
    currentPage: number;
    onPageChangePage: any;
}


const Pagination: React.FC<PaginationProps> = ({currentPage, onPageChangePage}) => {
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
            />
    );
}

export default Pagination;
