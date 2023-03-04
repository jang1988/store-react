import React from 'react';
import cartEmpty from '../assets/img/empty-cart.png'

const CartEmpty = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', gap: 50}}>
            <h2>Корзина пуста</h2>
            <img src={cartEmpty} alt="cart-empty" />
        </div>
    );
}

export default CartEmpty;
