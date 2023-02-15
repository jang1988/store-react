import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import ItemBlock from './components/ItemBlock';
import Sort from './components/Sort';

import devices from './assets/devaices.json';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все Девайсы</h2>
                    <div className="content__items">
                        {devices.map((item) => (
                            <ItemBlock {...item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
