import React, {  useEffect, useState } from 'react';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
import Skeleton from '../components/ItemBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://63ed0caae6ee53bbf5901b77.mockapi.io/devices')
            .then((res) => res.json())
            .then((devices) => {
                setItems(devices);
                setIsLoading(false)
            });
            window.scrollTo(0, 0)
    }, []);

    return (
        <div className='container'>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все Девайсы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6).keys()].map((i) => <Skeleton key={i} />)
                    : items.map((item) => <ItemBlock {...item} key={item.id} />)}
            </div>
        </div>
    );
};

export default Home;
