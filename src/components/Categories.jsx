import React from 'react';

const Categories = ({value, setCategoryId}) => {
    
    const categories = ['Все', 'Iphone', 'Sumsung', 'Lenovo', 'LG', 'Xiomi'];

    return (
        <div className="categories">
            <ul>
                {categories.map((categor, index) => (
                    <li onClick={() => setCategoryId(index)} className={value === index ? 'active' : ''} key={index}>
                        {categor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
