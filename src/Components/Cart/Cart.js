import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.donation;
    const total = cart.reduce(totalReducer, 0).toFixed(2);

    return (
        <div className="cart shadow p-2 mb-5 bg-body">
            <h2><i class="fas fa-user"></i> Members Added: {cart.length}</h2>
            <ul>
                {
                    cart.map(person => <li>{person.name}</li>)
                }
            </ul>
            <h2>Total Donation: $ {total}</h2>
            <button className="button btn btn-secondary"> <i class="fas fa-shopping-cart"></i> Donate </button>
        </div>
    );
};

export default Cart;
