import React, { useState } from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const handleRemoveItem = item => {
        dispatch(removeItemFromCart(item));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleIncreaseQuantity = item => {
        dispatch(increaseItemQuantity(item.id));
    };

    const handleDecreaseQuantity = item => {
        dispatch(decreaseItemQuantity(item.id));
    };

    
  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
            <li key={item.id} classNam="cart-item">
                <span>{item.name} - ${item.price}</span>
                <div className="quantity-controls">
                    <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item)}>-</button>
                    <p>{item.quantity}</p>
                    <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item)}>+</button> 
                </div>
                <button className="remove-item-btn" onClick={() => handleRemoveItem(item)}>Remove</button>
            </li>
        ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>
    </div>
  
    </>
  );
};

export default ShoppingCart;
