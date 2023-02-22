import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
import Skeleton from '../components/ItemBlock/Skeleton';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import axios from 'axios';

const Home = () => {
    //CATEGORIES
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sort);
    const currentPage = useSelector((state) => state.filter.pageCount);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        setIsLoading(true);

        axios
            .get(
                `https://63ed0caae6ee53bbf5901b77.mockapi.io/devices?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sort}&order=asc${search}`,
            )
            .then((response) => {
                setItems(response.data)
                setIsLoading(false)
            });

        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    const skeletons = [...new Array(6).keys()].map((i) => <Skeleton key={i} />);

    const devices = items.map((item) => <ItemBlock {...item} key={item.id} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} setCategoryId={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все Девайсы</h2>
            <div className="content__items">{isLoading ? skeletons : devices}</div>
            <Pagination currentPage={currentPage} onPageChangePage={(number) => onChangePage(number)} />
        </div>
    );
};

export default Home;

//ФИЛЬТР ДЕВАЙСОВ
// .filter((obj) => {
//     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
//         return true;
//     }
//     return false;
// })
