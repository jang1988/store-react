import React, { useEffect, useRef } from 'react';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
import Skeleton from '../components/ItemBlock/Skeleton';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import qs from 'qs';
import { sortList } from '../components/Sort';
import { useNavigate } from 'react-router-dom';
import { fetchDevice } from '../redux/slices/deviceSlice';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isMounted = useRef(false);
    const isSearch = useRef(false);

    // @ts-ignore
    const categoryId = useSelector((state) => state.filter.categoryId);
    // @ts-ignore
    const sortType = useSelector((state) => state.filter.sort);
    // @ts-ignore
    const currentPage = useSelector((state) => state.filter.pageCount);
    // @ts-ignore
    const searchValue = useSelector((state) => state.filter.searchValue);
    // @ts-ignore
    const { items, status } = useSelector((state) => state.device);

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id));
    };

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getDevices = React.useCallback(async () => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            // @ts-ignore
            fetchDevice({
                currentPage,
                category,
                sortType,
                search,
            }),
        );

        window.scrollTo(0, 0);
    }, [categoryId, sortType, currentPage, searchValue, dispatch]);

    // Если первый рендер то запрашиваем пиццы
    useEffect(() => {
        window.scrollTo(0, 0); // ???

        if (!isSearch.current) {
            getDevices();
        }

        isSearch.current = false;
    }, [getDevices]);

    // Если изменили параметры и был первый рендэр
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId,
                sortType: sortType.sort,
                currentPage,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sortType, currentPage, navigate]);

    // Если был первый рендер то проверяем URL-параметры и сохpаняем в редаксе
    useEffect(() => {
        if (window.location.search) {
            const params: any = qs.parse(window.location.search.substring(1));

            const sort = sortList.find((obj) => obj.sort === params.sortType?.sort);

            dispatch(
                setFilters({
                    ...params,
                    sort,
                }),
            );

            isSearch.current = true;
        }
    }, [dispatch]);

    const skeletons = [...new Array(6).keys()].map((i) => <Skeleton key={i} />);

    

    const devices = items.map((item: any) => <ItemBlock {...item} key={item.id} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} setCategoryId={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все Девайсы</h2>
            {status === 'error' ? (
                <div>ERROR</div>
            ) : (
                <div className="content__items">{status === 'loading' ? skeletons : devices}</div>
            )}
            <Pagination
                currentPage={currentPage}
                onPageChangePage={(value: number) => onChangePage(value)}
            />
        </div>
    );
};

export default Home

//ФИЛЬТР ДЕВАЙСОВ
// .filter((obj) => {
//     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
//         return true;
//     }
//     return false;
// })

// axios
//     .get(
//         `https://63ed0caae6ee53bbf5901b77.mockapi.io/devices?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sort}&order=asc${search}`,
//     )
//     .then((response) => {
//         setItems(response.data);
//         setIsLoading(false);
//     })
//     .catch((err) => {
//         setIsLoading(false);
//     });
