import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import BasicSnackbar from "../Components/BasicSnackbar"
import { useNavigate } from 'react-router-dom';
function Item({elem}){
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [open, setOpen] = React.useState(false);
    const handlerAdd=()=>{
        dispatch(addItem(elem));
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    const handlerMore=()=>{
        navigate(`/info/${elem.id}`);
    }
    console.log(`item with id:${elem.id} render`);
    return(
        <div className="main_item_name">
            <div onClick={handlerMore} className="main_item_img" style={{backgroundImage: `url('${elem.img}')`}}>
                <p>Click on img for more information</p>
            </div>
            <h3 className="main_item_hdr">{elem.title}</h3>
            <div className="main_item_btm">
            <span className="main_item_price">${elem.price}</span>
            <button onClick={handlerAdd} className="main_item_add">add</button>
            <BasicSnackbar 
                open={open}
                onClose={handleClose}
                severity="success"
                message="Item is added"
            />
            </div>
        </div>
    )
}
export default React.memo(Item);