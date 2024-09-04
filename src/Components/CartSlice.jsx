import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalAmount: 0
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalAmount += existingItem.price;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1});
                state.totalAmount += action.payload.price;
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id != action.payload.id);
            state.totalAmount -= action.payload.price * action.payload.quantity;
        },
        clearCart(state, action) {
            state.cartItems = [];
            state.totalAmount = 0;
        },
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
                state.totalAmount += itemToIncrease.price;
            }
        },
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
                state.totalAmount -= itemToDecrease.price;
            }
        }
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
