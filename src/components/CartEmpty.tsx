import React from 'react';
// import cartEmpty from '../assets/img/empty-cart.png'

const CartEmpty: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                gap: 50,
            }}
        >
            <h2>Корзина пуста</h2>
            <img src={require('../assets/img/empty-cart.png')} alt="cart-empty" />
        </div>
    );
};

export default CartEmpty;
