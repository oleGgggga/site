import React, {useEffect, useRef,} from "react";
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import { useSelector } from 'react-redux'
import Item from "./Item";
import { useDispatch } from "react-redux";
import {itemFilter} from '../redux/itemsSlice';
import { itemSearch } from "../redux/itemsSlice";
function Shop(){
    const dispatch=useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(itemFilter(0));
        }
    },[dispatch])
    const items=useSelector(state=>state.items.searchData);
    const status=useSelector(state=>state.items.status);
    const handlerSelect=(eo)=>{
        dispatch(itemFilter(eo.target.value));
    }
    const inputHdr = useRef(null);
    function hdrSearch(eo){
        if (eo.currentTarget.className.search(/active/g) === -1) {eo.currentTarget.classList.toggle('active'); inputHdr.current.classList.toggle('activeInput');} else{
            eo.currentTarget.classList.remove('active');
            inputHdr.current.classList.remove('activeInput');
            dispatch(itemSearch(inputHdr.current.value))
        }
        
    }
    
return (
    <div className="shop_container">
        <div className="shop_filter_container">
        <div className="shop_filter">
        <FormControl fullWidth>
         <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Choose category
  </InputLabel>
  <NativeSelect
    onChange={(eo)=>handlerSelect(eo)}
    defaultValue={0}
    inputProps={{
      name: 'category',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}>All</option>
    <option value={1}>City</option>
    <option value={2}>Gravel</option>
    
  </NativeSelect>
   </FormControl>
   </div>
        <div className='header_search'>
    <input ref={inputHdr} type="text" className="search_input" aria-label="search" placeholder="enter your search"/>
    <button onClick={(eo)=>{hdrSearch(eo)}} className="search_submit" aria-label="submit search"><svg width="16" height="16" viewBox="0 0 16 16" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
<path d="M6.75002 2.23335C4.25553 2.23335 2.23335 4.25553 2.23335 6.75002C2.23335 9.2445 4.25553 11.2667 6.75002 11.2667C7.99751 11.2667 9.12544 10.7621 9.94378 9.94378C10.7621 9.12544 11.2667 7.99751 11.2667 6.75002C11.2667 4.25553 9.2445 2.23335 6.75002 2.23335ZM0.43335 6.75002C0.43335 3.26142 3.26142 0.43335 6.75002 0.43335C10.2386 0.43335 13.0667 3.26142 13.0667 6.75002C13.0667 8.16934 12.5978 9.48028 11.8076 10.5348L15.3031 14.0303C15.6545 14.3818 15.6545 14.9516 15.3031 15.3031C14.9516 15.6545 14.3818 15.6545 14.0303 15.3031L10.5348 11.8076C9.48028 12.5978 8.16934 13.0667 6.75002 13.0667C3.26142 13.0667 0.43335 10.2386 0.43335 6.75002Z" fill="black"/>
</svg></button>
        </div>
    </div>
        {status==='pending' && <h1 style={{textAlign: 'center', fontSize: '30px', marginTop: '20px',}}>Loading.....</h1>}
        {status==='resolved' && items.length===0 && <h1 style={{textAlign: 'center', fontSize: '30px', marginTop: '20px',}}>No found!</h1>}      
        <div className="main_items_container">
            {items.map((item)=>(
                <Item key={item.id} elem={item}/>
            ))}
        </div>
    </div>
    )};
export default Shop;