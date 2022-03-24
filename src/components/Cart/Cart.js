import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            this is cart
            <h1>Selected item :{cart.length}</h1>
        </div>
    );
};

export default Cart;