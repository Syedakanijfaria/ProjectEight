import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.donation;
    const total = cart.reduce(totalReducer, 0).toFixed(2);

    return (
        <div className="cart">
            <h1>Memebers Added: {cart.length}</h1>
            <ul>
                {
                    cart.map(person => <li>{person.name}</li>)
                }
            </ul>
            <h1>Total Donation: {total}</h1>
        </div>
    );
};

export default Cart;
