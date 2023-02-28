import { useDispatch } from "react-redux";
import React from "react";
import { delItem } from "../redux/cartSlice";
export const CartItem = ({elem}) => {
    const dispatch=useDispatch(); 
    const handlerDel=()=>{
        dispatch(delItem([elem.id, elem.quantity, elem.price]));
    }
    return(
        <div className='cartItem_container'>
            <div className="cart_item_img" style={{backgroundImage: `url('${elem.img}')`}}></div>
            <div className='cart_item_right'>
            <h3 className="cart_item_hdr">{elem.title}</h3>
            <p className="cart_item_price">${elem.price}</p>
            <span className="cart_item_count">quantity: {elem.quantity}</span>
            <button onClick={handlerDel} className="main_item_add">delete</button>
            </div>
        </div>
    )
}