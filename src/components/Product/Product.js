import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h5>Price :$ {price}</h5>
                <p><small>Seller :{seller}</small></p>
                <p><small>Ratings :{ratings} stars</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;