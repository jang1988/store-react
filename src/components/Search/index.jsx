import React from 'react';
import style from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {

    return (
        <div className={style.main}>
            <svg
                className={style.icon}
                height="50"
                viewBox="0 0 500 500"
                width="50"
                xmlns="http://www.w3.org/2000/svg">
                <title />
                <path d="M256,64C150.13,64,64,150.13,64,256s86.13,192,192,192,192-86.13,192-192S361.87,64,256,64Zm91.31,283.31a16,16,0,0,1-22.62,0l-42.84-42.83a88.08,88.08,0,1,1,22.63-22.63l42.83,42.84A16,16,0,0,1,347.31,347.31Z" />
                <circle cx="232" cy="232" r="56" />
            </svg>
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={style.input}
                placeholder="Search..."
            />
            {searchValue && (
                <svg
                    onClick={() => setSearchValue('')}
                    className={style.clear}
                    height="50"
                    viewBox="0 0 48 48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
                    <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
            )}
        </div>
    );
};

export default Search;
