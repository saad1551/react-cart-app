import React, { useState, useEffect } from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    useEffect(() => {
        let newSuperCoins;
        if (totalAmount < 150) {
            newSuperCoins = 0;
        }
        else if (totalAmount >= 150 && totalAmount < 300) {
            newSuperCoins = 10;
        }
        else if (totalAmount >= 300 && totalAmount < 400) {
            newSuperCoins = 20;
        }
        else if (totalAmount >= 400) {
            newSuperCoins = 30;
        }
        setSuperCoins(newSuperCoins);
    }, [totalAmount]);
  return (
    <div>
        Super Coins: {superCoins}
    </div>
  );
};

export default SuperCoin;
