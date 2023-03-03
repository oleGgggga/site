import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../Components/CartItem";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { delAllItem } from "../redux/cartSlice";
export const Order = () => {
    const navigate=useNavigate();
    const total=useSelector(state=>state.cart.totalPrice);
    const items=useSelector(state=>state.cart.items);
    const isLog=useSelector(state=>state.items.log);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const dispatch=useDispatch();
    return(
        <div className="order_container">
            <div className="order_left">
            <TextField
              defaultValue={isLog?'Oleg':''} 
              inputRef={ref1}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter your name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField 
              defaultValue={isLog?'Minsk':''}
              inputRef={ref2}
              margin="normal"
              required
              fullWidth
              name="adress"
              label="Adress"
              type="text"
              id="adress"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I agree with policy"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                if(ref1.current.value && ref2.current.value){
                  dispatch(delAllItem());
                  navigate('/success');
                }
              
              }}
            >
              Confirm order
            </Button>
                <Link href="http://localhost:3000/log" variant="body2">
                  Login?
                </Link>
            </div>
            <div className="order_right">
                <div className="cart_order_dscr">
                    <p>Order</p>
                    <button onClick={()=>navigate('/cart')}>Change</button>
                </div>
                <div className="cart_order_items">
                    {items.map(({title})=><p>{title}</p>)}
                </div>
                <div className="cart_order_bottom">
                    <p>Total</p>
                    <div>{total}</div>
                </div>
            </div>
        </div>
    )
}