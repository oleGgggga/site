import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import cartSlice from './cartSlice';
export const store = configureStore({
    reducer: {
        items: itemsSlice,
        cart: cartSlice,
    },
})
