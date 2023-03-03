import React, {useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import NavigationHeader from './NavigationHeader';
import { useNavigate } from 'react-router-dom';
function Header(){
    const itemCount = useSelector( state=>state.cart.itemsCount);
    const success=useSelector(state=>state.items.log);
    const [menuStatus, setMenuStatus]=useState(false);
    const navigate = useNavigate();
    const ref = useRef(null);
    function changeStatus(eo){
        if (!eo && menuStatus===true){setMenuStatus(false); ref.current.classList.remove('activeBurger'); return}
        if (eo && eo.currentTarget.className.search(/active/g) === -1) {eo.currentTarget.classList.toggle('activeBurger'); setMenuStatus(true)} else if(eo){
            eo.currentTarget.classList.remove('activeBurger'); setMenuStatus(false)
        }
    };
    return(
        <header className='header'>
            <div className='header_container _container'>
                <div className='header_body'>
                    <div className='header_main'>
                       <NavigationHeader status={menuStatus} cbChangeStatus={changeStatus}/> 
                    </div>
                    
                    <div className='header_actions'>
                        <button className='header_logIn' onClick={()=>{navigate('/log'); changeStatus()}}>{success?'log out':'log in'}</button>
                        <div onClick={()=>{navigate('/cart'); changeStatus()}}><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' data-name="Layer 1" viewBox="0 0 24 24"><path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"/></svg>
                        {itemCount===0?<span></span>:<span style={{color: 'white'}}>{itemCount}</span>}
                        </div>
                    </div>
                    <button ref={ref} className='menu_icon' onClick={(eo)=>{changeStatus(eo)}}>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default React.memo(Header);