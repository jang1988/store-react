import React, { useState } from 'react';

const Categories = () => {
    const [active, setActive] = useState(0);

    const categories = ['Все', 'Iphone', 'Sumsung', 'Lenovo', 'LG', 'Xiomi'];

    return (
        <div className="categories">
            <ul>
                {categories.map((categor, index) => (
                    <li onClick={() => setActive(index)} className={active === index ? 'active' : ''} key={index}>
                        {categor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
