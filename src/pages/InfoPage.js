import React from "react";
import {useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
export const InfoPage = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch(); 
    const {id}=useParams();
    const items=useSelector(state=>state.items.data);
    const product=items.find((elem)=>{
        return elem.id===id
    })
    const handlerAdd=()=>{
        dispatch(addItem(product));
        navigate(-1);
    }
    
    return (
        items.length===0?(<h1 style={{marginTop: 'auto', textAlign: 'center', fontSize: '30px'}}>Loading...</h1>):
        items.length!==0 && !product?(<h1 style={{marginTop: 'auto', textAlign: 'center', fontSize: '30px'}}>No product found!</h1>):
        (<div className="info_wraper">
            <div className="info_container">
                <div className="info_img" style={{backgroundImage: `url('${product.img}')`}}></div>
                <div className="info_right">
                <div>
                <h2 className="info_title">{product.title}</h2>
                <p className="info_dscr">{product.description}</p>
                </div>
                <button onClick={handlerAdd} className="info_add">add</button>
                </div>
            </div>
            

        </div>)
    )
}