import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
import Skeleton from '../components/ItemBlock/Skeleton';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    //SORT
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sort: 'rating',
    });

    //CATEGORIES
    const [categoryId, setCategoryId] = useState(0);

    useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        setIsLoading(true);
        fetch(
            `https://63ed0caae6ee53bbf5901b77.mockapi.io/devices?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sort}&order=asc${search}`,
        )
            .then((res) => res.json())
            .then((devices) => {
                setItems(devices);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    const skeletons = [...new Array(6).keys()].map((i) => <Skeleton key={i} />);

    const devices = items.map((item) => <ItemBlock {...item} key={item.id} />);

    //ФИЛЬТР ДЕВАЙСОВ
    // .filter((obj) => {
    //     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return true;
    //     }
    //     return false;
    // })

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} setCategoryId={(i) => setCategoryId(i)} />
                <Sort sortType={sortType} setSortType={setSortType} />
            </div>
            <h2 className="content__title">Все Девайсы</h2>
            <div className="content__items">{isLoading ? skeletons : devices}</div>
            <Pagination onPageChangePage={(number) => setCurrentPage(number)} />
        </div>
    );
};

export default Home;
