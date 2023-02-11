import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import ItemBlock from './components/ItemBlock';
import Sort from './components/Sort';

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
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <ItemBlock title="Apple iPhone 14 Pro" price="47 619" />
            <ItemBlock title="Apple iPhone 12 Pro" price="37 900" />
            <ItemBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
