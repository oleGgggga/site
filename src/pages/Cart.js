import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../Components/CartItem";
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
    const navigate=useNavigate();
    const total=useSelector(state=>state.cart.totalPrice);
    const items=useSelector(state=>state.cart.items);
    return(
        <div className="info_wraper">
            <div className="cart_container">
                <div className="cart_items">

                {total===0?<h1 style={{textAlign: 'center', fontSize: '30px'}}>Cart is empty!</h1>:
                items.map(el=><CartItem key={el.id} elem={el}/>
                )}
                </div>
                <div className="cart_btm">
                    <button className="cart_back" onClick={()=>{navigate(-1)}}>back</button>
                    <p className="cart_btm_total">total price: ${total}</p>
                </div>
            </div>
        </div>
    )
}
