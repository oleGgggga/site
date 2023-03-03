import { createSlice } from '@reduxjs/toolkit';
const initialState={
    itemsCount: 0, 
    items: [],
    totalPrice: 0,
  }
export const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action)=>{
            const newItem=action.payload;
            const isExsist=state.items.find(({id})=>id===newItem.id)
            if(!isExsist){
                state.items.push(
                    {...newItem, quantity: 1}
                );
                state.itemsCount++;
                state.totalPrice+=newItem.price;
            }
            if(isExsist){
                state.itemsCount++;
                isExsist.quantity++;
                state.totalPrice+=isExsist.price;
            }
                        
        },
        delItem: (state, action)=>{
            const [id, quantity, price]=action.payload;
            const updateItems=state.items.filter(item => item.id !==id);
            state.items=updateItems;
            state.totalPrice=state.totalPrice-quantity*price;
            state.itemsCount=state.itemsCount-quantity;
        },
        delAllItem: (state)=>{
            state.items=[];
            state.itemsCount=0;
            state.totalPrice=0;
        }
    }
});
export const {addItem, delItem, delAllItem}=cartSlice.actions;
export default cartSlice.reducer;